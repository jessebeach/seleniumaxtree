var path = require('path');
var nightwatchPages = require('nightwatch-pages');

module.exports = {
  'Ax test': function (client) {
    nightwatchPages(client, path.resolve(__dirname, '..', 'pages'));

    client
      .page.ax
      .load()
      .saveScreenshot('./results/screenshots/screen2.png')
      .end();
  }
};
