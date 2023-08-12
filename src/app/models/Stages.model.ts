import { DealModel } from "./deal.model";

export type Stage = 'Potential Value' | 'Focus' | 'Contact Made' | 'Getting Ready';
export type TStageInfo = { title: string, quantity: number, img: string }
export type TStageInfoList = { [stage in Stage]: TStageInfo }

export type IDataList = { [stage in Stage]: DealModel[] };

export class Stages {
  public items: IDataList = <IDataList>{ "Contact Made": [], "Getting Ready": [], "Potential Value": [], "Focus": [] }
  public newItems: IDataList = <IDataList>{ "Contact Made": [], "Getting Ready": [], "Potential Value": [], "Focus": [] }
  constructor(private dealModels: DealModel[]) {
    this.itemsMap()
  }
  public stageInfo: TStageInfoList = <TStageInfoList>{}

  public itemsMap() {
    this.dealModels.forEach(item => {
      let stage = <Stage>item.stage
      this.items[stage].push(item);
    })
    this.setupHeaderInfo()
  }

  setupHeaderInfo() {
    for (const item in this.items) {
      this.stageInfo[<Stage>item] = this.addationlInformation(<Stage>item)
    }
  }

  addationlInformation(stage: Stage) {
    if (stage == 'Potential Value')
      return { title: 'حجز المواعيد', quantity: this.items[stage].length || 0, img: 'assets/images/calendar-add.svg' }
    if (stage == 'Getting Ready')
      return { title: 'مواعيد مكتملة', quantity: this.items[stage].length || 0, img: 'assets/images/tick-circle.svg' }
    if (stage == 'Focus')
      return { title: 'تأكيد حجز المواعيد', quantity: this.items[stage].length || 0, img: 'assets/images/calender-warn.svg' }
    if (stage == 'Contact Made')
      return { title: 'مواعيد ملغية', quantity: this.items[stage].length || 0, img: 'assets/images/close-circle.svg' }
    return { title: '', quantity: 0, img: '' }
  }

}
