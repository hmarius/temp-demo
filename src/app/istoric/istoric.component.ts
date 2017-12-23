import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {CommonDataService, IstoricRow} from '../services/common-data.service';
import * as wjcCore from 'wijmo/wijmo';
import {CollectionView, ObservableArray} from 'wijmo/wijmo';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/observable/bindCallback';


@Component({
  selector: 'app-istoric',
  templateUrl: './istoric.component.html',
  styleUrls: ['./istoric.component.css']
})
export class IstoricComponent implements OnInit, OnDestroy {
  data: CollectionView;
  newDataSubcription: Subscription;
  updateCount = 0;
  private dataSvc: CommonDataService;

  constructor(@Inject(CommonDataService) dataSvc: CommonDataService) {
    this.dataSvc = dataSvc;

    this.data = new wjcCore.CollectionView(new wjcCore.ObservableArray());

    this.newDataSubcription = dataSvc.istoricRow$.subscribe(rows => {
        this.updateCount++;
        this.data.beginUpdate();
        let obsArray: ObservableArray = this.data.sourceCollection;
        rows.forEach(r => {
          let rowIndex: number = obsArray.findIndex((value: IstoricRow) => value.id == r.id);
          if (rowIndex != -1) {
            obsArray.setAt(rowIndex, r);
          }
          else obsArray.push(r);
        });
        this.data.endUpdate();
      }
    );
  }

  gotNewData(rows: IstoricRow[]) {
  }

  ngOnInit() {
  }


  ngOnDestroy(): void {
    if (this.newDataSubcription) {
      this.newDataSubcription.unsubscribe();
      console.log('istoric unsubscribe');
    }
  }

  updateRandom() {
    this.dataSvc.updateRandom();
  }

  startRandom() {
    this.dataSvc.setAuto(true);

  }

  stopRandom() {
    this.dataSvc.setAuto(false);

  }
}
