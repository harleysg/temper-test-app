export interface TableTemper {
  title: string
  heading?: string[]
  body: {
    key: string;
    value: string;
  }[][],
  total: number
}

export interface TemperResult {
  type: string;
  table: TemperFeature[];
  temper: string;
  characterist: string;
  ranking: number;
}

export interface TemperFeature {
  title: string;
  description: string;
}

export interface TemperTypes {
  type: string;
  characterist: string;
  weakness: TemperFeature[];
  strength: TemperFeature[];
}[]

export interface ResultRow { [index: number]: string }

export interface Result {
  [category: string]: {
    total?: number
    [index: number]: string
  }
}

export interface Counter {
  [category: string]: {
    [index: string]: number
  }
}

export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'

export interface OnMove {
  direction: Direction,
  row: number,
  cell: number,
  table: number,
}

export interface OnClickValues {
  title: string,
  key: string,
  value?: string,
  index: number
}

export interface ToastBuilder { message: string, duration?: number }

export type TemperTable = TableTemper[]

export interface LoL { percent: number, currentValue: string, finished: boolean, evenType: string }