import { TestBed } from '@angular/core/testing';

import { SettingsRepositoryService } from './settings-repository.service';

describe('SettingsRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SettingsRepositoryService = TestBed.get(SettingsRepositoryService);
    expect(service).toBeTruthy();
  });
});
