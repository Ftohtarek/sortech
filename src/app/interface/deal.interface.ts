export interface IDeal {
  id: number
  cost: number | string
  title: string
  client: IClient
  status: string
  date: string
  timeFrom:string
  timeTo:string
  probability_status: string
  state: string
}
export interface IClient {
  name: string
  img: string,
  phone: string,
  email: string
}

export type DealProperty<T = { [K in keyof IDeal]: Pick<IDeal, K> }> = T[keyof T]

