import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-led-status',
  templateUrl: './led-status.component.html',
  styleUrls: ['./led-status.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LedStatusComponent implements OnInit {

  @Input()
  updateCounter:number;

  constructor() { }

  ngOnInit() {
  }

}
