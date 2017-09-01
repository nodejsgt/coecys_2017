import { ExpositoresCoecysPage } from './app.po';

describe('expositores-coecys App', () => {
  let page: ExpositoresCoecysPage;

  beforeEach(() => {
    page = new ExpositoresCoecysPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
