import { WebDemoPage } from './app.po';

describe('web-demo App', () => {
  let page: WebDemoPage;

  beforeEach(() => {
    page = new WebDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
