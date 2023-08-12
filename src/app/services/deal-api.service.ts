import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, timer } from 'rxjs';
import { DealModel } from '../models/deal.model';
import { IDeal } from '../interface/deal.interface';
import { mock } from './mock';

/**
 * Service for requesting deals data.
 * Inherits from RequestService to handle HTTP requests.
 */
@Injectable({
  providedIn: 'root'
})
export class DealApiService {
  endPointUrl = "https://my-json-server.typicode.com/mabukoush1/contacts/db"

  private localData: DealModel[] = <DealModel[]>{};
  subject: BehaviorSubject<any> = new BehaviorSubject<any>('')
  get data() {
    return this.subject.asObservable()
  }

  constructor(private http: HttpClient) {
    // this.getAll.subscribe(d => {
    //   this.localData = d;
    //   this.fakeData()
    //   this.subject.next(d);
    // })
  }
  /**
   * Overrides the getAll method of the parent RequestService class to return deals data as `IDeal[]`
   * @returns ` Observable<IDeal[]> ` - An observable of an array of IDeal objects.
  **/

  get getAll(): Observable<IDeal[]> {
    return of(mock)
    // return this.http.get(this.endPointUrl).pipe(map(
    //   (value: any) => (value.deals)),
    // )
  }

  // update and create just example for using overwrite to anotate.

  // override update(id: number, updatedRow: DealProperty): void {
  //   let item = this.localData[this.indexById(id)].item

  //   this.localData[this.indexById(id)].item = { ...item, ...updatedRow }

  //   this.subject.next(this.localData)

  // }
  // override create(row: IDeal) {
  //   return super.create(row)
  // }
  // override delete(id: number) {
  //   this.localData.splice(this.indexById(id), 1)

  //   this.subject.next(this.localData)
  // }
  // private fakeData() {
  //   this.localData[1].item.probability_status = '100%'
  //   this.localData[6].item.probability_status = '100%'
  //   const index = this.localData.findIndex(e => e.item.id == 10)
  //   this.localData[index].item.probability_status = '100%'
  // }

  // private indexById = (id: number) => this.localData.findIndex(el => el.item.id == id)
  // private duplicateDate(data: IDeal[]): IDeal[] {
  //   return [...data, ...data]
  // }
}
