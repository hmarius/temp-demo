// /// <reference path="../../node_modules/wijmo/wijmo.angular2.core.d.ts" />
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    public data = [];
    constructor() {
        for (var i = 0; i <= 30; i++) {
            this.data.push({
                "col1": Math.round(Math.random() * 100),
                "col2": Math.round(Math.random() * 100),
                "col3": Math.round(Math.random() * 100),
                "col4": Math.round(Math.random() * 100),
                "col5": Math.round(Math.random() * 100),
                "col6": Math.round(Math.random() * 100),
            });
        }
    }
}
