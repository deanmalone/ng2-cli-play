import { Ng2CliPlayPage } from './app.po';

describe('ng2-cli-play App', function() {
  let page: Ng2CliPlayPage;

  beforeEach(() => {
    page = new Ng2CliPlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
