import { IDeal } from "../interface/deal.interface";

export class DealModel {
  constructor(private item: IDeal) {
  }
  get id() {
    return this.item.id
  }

  get title() {
    return this.item.title
  }
  get cost() {
    return this.item.cost
  }
  get dayMonth() {
    return new Date(this.item.date).toLocaleDateString('ar', { day: '2-digit', month: 'long' })
  }
  get timeFrom() {
    const date = new Date()
    return new Date(this.item.timeFrom).toLocaleTimeString('ar', { hour: '2-digit', minute: '2-digit' })
  }
  get timeTo() {
    return new Date(this.item.timeTo).toLocaleTimeString('ar', { hour: '2-digit', minute: '2-digit' })
  }
  get client() {
    return this.item.client
  }
  get stage() {
    return this.item.status
  }
  state = () => this.item.state

  updateState(newState: string) {
    this.item.state = newState
  }




}
