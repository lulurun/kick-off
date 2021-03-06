const rp = require('request-promise');
const ScrapingJobRunner = require('./ScrapingJobRunner');

const UA = {
  CHROME: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
  FIREFOX: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:62.0) Gecko/20100101 Firefox/62.0',
  SAFARI: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Safari/605.1.15',
};

module.exports = class RequestRunner extends ScrapingJobRunner {
  async getHtml() {
    const html = await rp.get(this.url, {
      headers: {
        'User-Agent': UA.CHROME,
      },
    });
    return html;
  }
};
