import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimerComponent } from './timer/pages/timer/timer.component';
import { SettingsComponent } from './settings/components/settings/settings.component';
import { LandingComponent } from './landing/components/landing/landing.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
