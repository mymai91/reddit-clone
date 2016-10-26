export class RedditClonePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('reddit-clone-app h1')).getText();
  }
}
