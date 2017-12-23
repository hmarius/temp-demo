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
    function zeroPad(num, places) {
      var zero = places - num.toString().length + 1;
      return Array(+(zero > 0 && zero)).join("0") + num;
    }

    let newRows = [];
    for (let i = 1; i <= 10; i++) {
      let id=Math.floor(Math.random() * 20);
      newRows.push(<IstoricRow>{
        id: id,
        dataInregistrare: DateTime.newDate(),
        numeCamera: `camera ${zeroPad(id + 1,2)}`,
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
