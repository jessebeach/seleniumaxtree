var path = require('path');
var nightwatchPages = require('nightwatch-pages');

module.exports = {
  'Ax test': function (client) {
    nightwatchPages(client, path.resolve(__dirname, '..', 'pages'));

    client
      .page.ax
      .load()
      .saveScreenshot('./results/screenshots/screen2.png');

    client
      .timeoutsAsyncScript(50)
      .executeAsync(function (done, data) {
        function onMessage(event) {
          var data = event.data;
          if (
            data.source === 'extension' &&
            data.extension === 'arborea11y'
          ) {
            done(data.axtree);
          }
        }
        window.addEventListener('message', onMessage, false);
        window.postMessage({
          extension: "arborea11y",
          source: 'page',
          action: 'message'
        }, "*");
      }, [], function (response) {
        console.log(response.value);
      });
  }
};
