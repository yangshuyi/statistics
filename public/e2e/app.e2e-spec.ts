import { AppwwwwwwPage } from './app.po';

describe('appwwwwww App', function() {
  let page: AppwwwwwwPage;

  beforeEach(() => {
    page = new AppwwwwwwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
