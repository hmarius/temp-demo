import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {CommonDataService} from './services/common-data.service';

import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {IstoricComponent} from './istoric/istoric.component';
import {SetariComponent} from './setari/setari.component';
import {TemperaturiComponent} from './temperaturi/temperaturi.component';
import {ReteaComponent} from './retea/retea.component';
import { LedStatusComponent } from './led-status/led-status.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'istoric', component: IstoricComponent},
  {path: 'temperaturi', component: TemperaturiComponent},
  {path: 'setari', component: SetariComponent},
  {path: 'retea', component: ReteaComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IstoricComponent,
    HomeComponent,
    HeaderComponent,
    TemperaturiComponent,
    SetariComponent,
    ReteaComponent,
    LedStatusComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BsDropdownModule.forRoot(),
    WjGridModule
  ],
  providers: [CommonDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
