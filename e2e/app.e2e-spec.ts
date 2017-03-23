import { LightBoxPage } from './app.po';

describe('light-box App', function() {
  let page: LightBoxPage;

  beforeEach(() => {
    page = new LightBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
