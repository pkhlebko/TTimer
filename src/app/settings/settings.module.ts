import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsRepositoryService } from './services/settings-repository.service';

@NgModule({
  declarations: [
    SettingsComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    SettingsRepositoryService
  ],
})
export class SettingsModule { }
