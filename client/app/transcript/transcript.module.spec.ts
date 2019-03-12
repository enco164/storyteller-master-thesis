import {TranscriptModule} from './transcript.module';

describe('TranscriptModule', () => {
  let transcriptModule: TranscriptModule;

  beforeEach(() => {
    transcriptModule = new TranscriptModule();
  });

  it('should create an instance', () => {
    expect(transcriptModule).toBeTruthy();
  });
});
