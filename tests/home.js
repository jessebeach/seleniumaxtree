var path = require('path');
var nightwatchPages = require('nightwatch-pages');

module.exports = {
  tags: ['sanity'],

  'Load Bing.com': function (client) {
    nightwatchPages(client, path.resolve(__dirname, '..', 'pages'));

    client.page.homepage.load().end();
  }
};
