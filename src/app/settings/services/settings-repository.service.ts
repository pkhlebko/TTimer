import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrialEvent, RaceModel, RaceRoundModel, UserModel } from '../models/trial-event.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsRepositoryService {

  constructor() { }

  getActiveEvents(): Observable<[TrialEvent]> {
    const event = {
      name: 'Test trial event',
      location: 'Minsk',
      description: 'Test descriptions',
      races: this.getTrialEventRaces(),
      adminsId: ['root'],
      judgesIds: ['root']
    };

    return of([event]);
  }

  getTrialEventRaces(): Observable<RaceModel[]> {
    const round: RaceRoundModel = {
      id: 0,
      name: 'Round 1',
      timeLimit: 240,
      timeLimitPerSection: 60,
      numberOfSections: 8,
      results: [],
      closed: false
    };

    const race: RaceModel = {
      id: '1',
      raceName: 'First race',
      judgesIds: ['root'],
      competitorsIds: ['root'],
      rounds: [round]
    };

    return of([race]);
  }

  getUser(id: string): Observable<UserModel|null> {
    const root: UserModel = {id: 'root', name: 'Pablo' };

    switch (id) {
      case 'root':
        return of(root);
      default:
        return of(null);
    }
  }

}
