import { Observable } from 'rxjs';

export interface TrialEvent {
  name: string;
  location: string;
  description: string;
  races: Observable<RaceModel[]>;
  adminsId: string[];
  judgesIds: string[];
}

export interface RaceModel {
  id: string;
  raceName: string;
  judgesIds: string[];
  competitorsIds: string[];
  rounds: RaceRoundModel[];
  competitors?: Observable<UserModel[]>; // Extended
}

export interface UserModel {
  id: string;
  name: string;
}

export interface RaceRoundModel {
  id: number;
  name: string;
  timeLimit: number;
  timeLimitPerSection: number;
  numberOfSections: number;
  results: RaceRoundResultsModel[];
  closed: boolean;
}

export interface RaceRoundResultsModel {
  competitorId: string;
  time: number;
  penaltes: number;
  mergedResult: number;
  acceptable: boolean;
  disqualified: boolean;
}
