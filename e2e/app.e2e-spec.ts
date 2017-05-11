import { LightboxPage } from './app.po';

describe('lightbox App', () => {
  let page: LightboxPage;

  beforeEach(() => {
    page = new LightboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
