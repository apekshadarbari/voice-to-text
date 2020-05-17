import { TestBed } from '@angular/core/testing';

import { CloudSpeechApiService } from './cloud-speech-api.service';

describe('CloudSpeechApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloudSpeechApiService = TestBed.get(CloudSpeechApiService);
    expect(service).toBeTruthy();
  });
});
