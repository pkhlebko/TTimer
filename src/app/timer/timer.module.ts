import { CommonModule } from '@angular/common';
import { EventLogComponent } from './components/event-log/event-log.component';
import { NgModule } from '@angular/core';
import { TimeCounterComponent } from './components/time-counter/time-counter.component';
import { TimerComponent } from './pages/timer/timer.component';

@NgModule({
  declarations: [
    TimerComponent,
    TimeCounterComponent,
    EventLogComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
})
export class TimerModule { }
