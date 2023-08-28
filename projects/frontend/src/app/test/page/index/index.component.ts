import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DB } from "../../../db"

interface TableTemper {
  title: string
  heading?: string[]
  body: {
    key: string;
    value: string;
  }[][],
  total: number
}

interface Result {
  [category: string]: {
    total?: number
    [index: number]: string
  }
}

interface Counter {
  [category: string]: {
    [index: string]: number
  }
}

interface OnMove {
  direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT',
  row: number,
  cell: number,
  table: number,
}

interface OnClickValues {
  title: string,
  key: string,
  value?: string,
  index: number
}

type TemperTable = TableTemper[]

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public counter!: Counter
  public result: Result = {}
  public temperData!: TemperTable
  public showResultButton = false

  private keys = ['fortalezas', 'debilidades']
  private _DB = DB
  private _progress: { [key: string]: number, selected: number, total: number } = { total: 0, selected: 0 }

  @ViewChild('modal', { static: false }) $modal!: ElementRef<HTMLDialogElement>
  @ViewChildren('bodyTable') $bodyTables!: QueryList<ElementRef>
  @ViewChild('progress', { static: false }) $progress!: ElementRef

  ngOnInit(): void {
    this.temperData = Object.entries(this._DB).map(([title, data], i, arr) => {
      this.result[title] = this.result[title] ?? {}
      this._progress.total += data.length
      this._progress[title] = 0

      return {
        title,
        heading: Object.keys(data[0]).map((a, i) => `Option ${i + 1}`),
        body: data.map(line => Object.entries(line).map(([key, value]) => ({ key, value }))),
        total: data.length
      }
    })
  }

  onClick(event: Event, { title, key, index }: OnClickValues): void {
    const { parentElement } = event.target as HTMLElement

    this.result[title] = {
      ...this.result[title],
      [index]: key
    }
    Object.keys(this.result[title]).forEach((key, i, arr) => {
      this._progress[title] = arr.length
    })

    parentElement?.classList.add('selected')
    this._progress.selected = this._progress[this.keys[0]] + this._progress[this.keys[1]]
    this.$progress.nativeElement.style.width = `${(this._progress.selected / this._progress.total) * 100}%`
    this.showResultButton = ((this._progress.selected / this._progress.total) * 100) === 100

    if (this.showResultButton) {
      this.showTemper()
    }
  }

  showTemper() {
    if (this.showResultButton) {
      this.counter = {}
      Object.entries(this.result).forEach(([key, row]: [string, { [index: number]: string }]) => {
        this.counter[key] = this.counter[key] ?? {}
        Object.values(row).forEach((curr: string) => {
          this.counter[key][curr] = this.counter[key][curr] ?? 0
          ++this.counter[key][curr]
        })
      })
      this.openModal()
    } else {
      // TODO: toast notifiying
    }
  }

  onMove(event: Event, { direction, row, cell, table }: OnMove) {
    event.preventDefault()

    let target: HTMLElement = document.createElement('div')
    const $body = this.$bodyTables.get(table)?.nativeElement
    const parent = ($body as HTMLElement).children[row]
    const childrenCount = parent.childElementCount
    const prevSibling = parent.previousElementSibling
    const nextSibling = parent.nextElementSibling
    const ScrollIntoViewOptions: ScrollIntoViewOptions = {
      block: "center",
      behavior: "smooth",
      inline: 'center'
    }

    if (prevSibling && direction === 'UP') {
      target = (prevSibling.children[cell] as HTMLElement)
    }

    else if (nextSibling && direction === 'DOWN') {
      target = (nextSibling.children[cell] as HTMLElement)
    }

    else if (cell > 0 && direction === 'LEFT') {
      target = (parent.children[cell - 1] as HTMLElement)
    }

    else if (cell + 1 < childrenCount && direction === 'RIGHT') {
      target = (parent.children[cell + 1] as HTMLElement)
    }

    target.focus()
    target.scrollIntoView(ScrollIntoViewOptions)
  }

  closeModal() {
    this.$modal.nativeElement.close()
  }

  openModal() {
    this.$modal.nativeElement.showModal()
  }
}