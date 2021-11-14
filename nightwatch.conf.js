{
  module.exports = {
    src_folders: ["test"],
    page_objects_path: "page-objects",
    globals_path: "./globals.js",
    test_settings: {
      default: {
          desiredCapabilities: {
              browserName: 'chrome',
              chromeOptions: {
                args: ["start-maximized"]
            },
          },
          webdriver: {
              start_process: true,
              port: 4444,
              server_path: "./drivers/chromedriver.exe",
          }
      },
      test_workers: {
          enabled: true,
          workers: 'auto'
      },
      safari: {
          desiredCapabilities: {
              browserName: 'safari',
              alwaysMatch: {
                  acceptInsecureCerts: false
              }
          },
          webdriver: {
              port: 4445,
              start_process: true,
              server_path: '/usr/bin/safaridriver'
          }
      },
      firefox: {
          desiredCapabilities: {
              browserName: 'firefox',
              firefoxOptions: {
                args: ["start-maximized"]
            },
          },
          webdriver: {
              start_process: true,
              port: 4446,
              server_path: "./drivers/geckodriver.exe"
          }
      },
      edge: {
        desiredCapabilities: {
            browserName: 'MicrosoftEdge',
            firefoxOptions: {
              args: ["start-maximized"]
          },
        },
        webdriver: {
            start_process: true,
            port: 9515,
            server_path: "./drivers/msedgedriver.exe"
        }
      }
    }
  }
}
    
