import { Component, OnInit } from '@angular/core';
import { SettingsRepositoryService } from 'src/app/settings/services/settings-repository.service';
import { Observable } from 'rxjs';
import { TrialEvent } from 'src/app/settings/models/trial-event.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {

  public events$: Observable<TrialEvent[]>;

  constructor(
    private settingsRepository: SettingsRepositoryService
  ) {
    console.log(this.settingsRepository);
  }

  ngOnInit() {
    // this.events$ = this.settingsRepository.getActiveEvents();
  }

}
