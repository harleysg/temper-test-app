import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { HotToastService } from '@ngneat/hot-toast'

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

interface ResultRow { [index: number]: string }

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

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'

interface OnMove {
  direction: Direction,
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

interface ToastBuilder { message: string, duration?: number }

type TemperTable = TableTemper[]

interface LoL { percent: number, currentValue: string, finished: boolean, evenType: string }

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
  public counter!: Counter
  public result: Result = {}
  public temperData!: TemperTable
  public showResultButton = false

  private toastRef!: any;
  private preSelected = ''
  private lol$ = new BehaviorSubject({ percent: 0, currentValue: '', finished: false } as LoL)
  private finished = false
  private keys = ['fortalezas', 'debilidades']
  private _DB = DB
  private _progress: { [key: string]: number, selected: number, total: number } = { total: 0, selected: 0 }

  @ViewChild('modal', { static: false }) $modal!: ElementRef<HTMLDialogElement>
  @ViewChildren('bodyTable') $bodyTables!: QueryList<ElementRef>
  @ViewChild('progress', { static: false }) $progress!: ElementRef

  constructor(private toastService: HotToastService) { }

  ngOnInit(): void {
    this.buildData()
  }

  ngAfterViewInit(): void {
    this.updateUI()
  }

  private buildData(): void {
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

  private updateUI(next?: LoL): void {
    if (next) {
      this.lol$.next(next)
      return;
    }

    this.lol$.subscribe(({ percent, currentValue, finished }: LoL) => {
      this.$progress.nativeElement.style.width = `${percent}%`
      this.preSelected = currentValue

      if (finished) {
        this.showToast({
          message: `Complete ${percent}%`,
          duration: 1000
        })

        this.toastRef.afterClosed.subscribe(() => {
          if (!this.finished) this.showTemper()

          this.finished = finished
        })
      }
    })
  }

  private showToast({ message, duration }: ToastBuilder = { message: 'Hello World!', duration: 1000 }) {
    this.toastRef = this.toastService.info(message, {
      position: 'bottom-center',
      autoClose: true,
      duration: duration ?? 1000
    })
  }

  private openModal() {
    this.$modal.nativeElement.showModal()
  }

  onClick(event: Event, { title, key, index, value }: OnClickValues) {
    const { parentElement } = event.target as HTMLElement
    const evenType = event.type

    this.result[title] = {
      ...this.result[title],
      [index]: key
    }
    Object.keys(this.result[title]).forEach((key, i, arr) => {
      this._progress[title] = arr.length
    })

    parentElement?.classList.add('selected')
    this._progress.selected = this._progress[this.keys[0]] + this._progress[this.keys[1]]
    const percent = +((this._progress.selected / this._progress.total) * 100).toFixed(2)
    this.showResultButton = percent === 100

    if (evenType === 'click' && this.preSelected !== `${index}-${value}` && !this.showResultButton) {
      this.showToast({
        message: `Has seleccionado: <strong>${value}</strong>, complete ${percent}%`,
      })
    }

    this.updateUI({
      percent,
      currentValue: `${index}-${value}`,
      finished: this.showResultButton,
      evenType
    })
  }

  showTemper() {
    if (this.showResultButton) {
      this.counter = {}
      Object.entries(this.result).forEach(([key, row]: [string, ResultRow]) => {
        this.counter[key] = this.counter[key] ?? {}
        Object.values(row).forEach((curr: string) => {
          this.counter[key][curr] = this.counter[key][curr] ?? 0
          ++this.counter[key][curr]
        })
      })
      this.openModal()
    }
  }

  onMove(event: Event, { direction, row, cell, table }: OnMove) {
    event.preventDefault()

    let target: HTMLElement = document.createElement('div')
    const $body = this.$bodyTables.get(table)?.nativeElement
    const $parent = ($body as HTMLElement).children[row]
    const childrenCount = $parent.childElementCount
    const $prevSibling = $parent.previousElementSibling
    const $nextSibling = $parent.nextElementSibling
    const ScrollIntoViewOptions: ScrollIntoViewOptions = {
      block: "center",
      behavior: "smooth",
      inline: 'center'
    }

    if (direction === 'UP') {
      if ($prevSibling) {
        target = ($prevSibling.children[cell] as HTMLElement)
      } else if (table + 1 > 1) {
        const $prevTablet = this.$bodyTables.get(table - 1)?.nativeElement
        const totalCells = ($prevTablet as HTMLElement).childElementCount - 1
        target = (($prevTablet as HTMLElement).children[totalCells].children[cell] as HTMLElement)
      }

      target.scrollIntoView(ScrollIntoViewOptions)
    }

    else if (direction === 'DOWN') {
      if ($nextSibling) {
        target = ($nextSibling.children[cell] as HTMLElement)
      } else if (table + 1 < this.$bodyTables.length) {
        const $nextTablet = this.$bodyTables.get(table + 1)?.nativeElement
        target = (($nextTablet as HTMLElement).children[0].children[cell] as HTMLElement)
      }

      target.scrollIntoView(ScrollIntoViewOptions)
    }

    else if (cell > 0 && direction === 'LEFT') {
      target = ($parent.children[cell - 1] as HTMLElement)
    }

    else if (cell + 1 < childrenCount && direction === 'RIGHT') {
      target = ($parent.children[cell + 1] as HTMLElement)
    }

    target.focus()
  }

  closeModal() {
    this.$modal.nativeElement.close()
  }
}