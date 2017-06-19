import { EveWhContractsPage } from './app.po';

describe('eve-wh-contracts App', () => {
  let page: EveWhContractsPage;

  beforeEach(() => {
    page = new EveWhContractsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
