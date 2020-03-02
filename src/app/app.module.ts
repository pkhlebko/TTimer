import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingsModule } from './settings/settings.module';
import { TimerModule } from './timer/timer.module';
import { LandingComponent } from './landing/components/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SettingsModule,
    TimerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
