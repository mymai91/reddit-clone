import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RedditCloneAppComponent } from '../app/reddit-clone.component';

beforeEachProviders(() => [RedditCloneAppComponent]);

describe('App: RedditClone', () => {
  it('should create the app',
      inject([RedditCloneAppComponent], (app: RedditCloneAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'reddit-clone works!\'',
      inject([RedditCloneAppComponent], (app: RedditCloneAppComponent) => {
    expect(app.title).toEqual('reddit-clone works!');
  }));
});
