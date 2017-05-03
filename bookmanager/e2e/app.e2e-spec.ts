import { BookmanagerPage } from './app.po';

describe('bookmanager App', () => {
  let page: BookmanagerPage;

  beforeEach(() => {
    page = new BookmanagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
