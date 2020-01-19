import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimerComponent } from './timer/pages/timer/timer.component';
import { SettingsComponent } from './settings/settings/settings.component';

const routes: Routes = [
  { path: 'timer', component: TimerComponent },
  { path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
