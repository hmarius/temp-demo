import {Injectable} from '@angular/core';
import * as wjcCore from 'wijmo/wijmo';
import {DateTime, ObservableArray} from 'wijmo/wijmo';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

export interface IstoricRow {
  id: number,
  numeCamera: string,
  dataInregistrare: DateTime,
  vBat: number,
  vTempOne: number,
  vTempTwo: number
}

@Injectable()
export class CommonDataService {
  // data used to generate random items
  istoric: IstoricRow[] = [];

  private subject = new BehaviorSubject<IstoricRow[]>([]);

  istoricRow$: Observable<IstoricRow[]> = this.subject.asObservable();

  private data: ObservableArray;

  private autoTimer?:Subscription=null;

  constructor() {
  }

  getData(count: number): wjcCore.ObservableArray {
    return this.data;
  }

  newDataAvailable(rows: IstoricRow[]) {
    this.subject.next(rows);
  }

  updateData(rows: IstoricRow[]) {
    this.subject.next(rows);
  }

  updateRandom() {
    let newRows = [];
    for (let i = 1; i <= 10; i++) {
      newRows.push(<IstoricRow>{
        id: Math.floor(Math.random() * 20),
        dataInregistrare: DateTime.newDate(),
        numeCamera: 'updated',
        vTempOne: Math.random() * 100.0,
        vTempTwo: Math.random() * 50,
        vBat: Math.random() * 100
      });
    }
    this.updateData(newRows);
  }

  setAuto(start: boolean) {
    if(start){
      console.log("Start auto update");
      this.autoTimer=Observable.interval(1000).subscribe(_=>this.updateRandom())
    }else {
      if(this.autoTimer){
        this.autoTimer.unsubscribe();
        this.autoTimer=null;
        console.log("End auto update");
      }
    }
  }
}
