module.exports = {
  src_folders: ['./tests'],
  output_folder: './results',
  custom_assertions_path: '',
  globals_path: './globals.json',
  live_output: true,

  selenium: {
    start_process: true,
    server_path: './node_modules/selenium-server/lib/runner/selenium-server-standalone-2.38.0.jar',
    log_path: './results',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': './node_modules/.bin/chromedriver',
      'webdriver.ie.driver': './node_modules/dalek-browser-ie/lib/bin/IEDriverServer.exe'
    }
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_host: '127.0.0.1',
      selenium_port: 4444,
      silent: false,
      disable_colors: false,
      screenshots: {
        enabled: true,
        path: './results/screenshots'
      },
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        chromeOptions: {
          binary: '/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary',
          extensions: ['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']
        }
      }
    },

    ie: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        javascriptEnabled: true
      }
    },

    phantom: {
      desiredCapabilities: {
        browserName: 'phantomjs',
        'phantomjs.binary.path': require('phantomjs').path,
        javascriptEnabled: true
      }
    }
  }
};
