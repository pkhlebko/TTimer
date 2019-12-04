import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer/timer.component';
import { SettingsComponent } from './settings/settings/settings.component';
import { TimeCounterComponent } from './timer/time-counter/time-counter.component';
import { EventLogComponent } from './timer/event-log/event-log.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    SettingsComponent,
    TimeCounterComponent,
    EventLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
