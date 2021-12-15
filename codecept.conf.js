const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    // Playwright: {
    //   url: 'https://6151ff8e4a5f22001701d590.mockapi.io',
    //   show: true,
    //   browser: 'chromium'
    // },
    REST: {
      endpoint: 'https://6151ff8e4a5f22001701d590.mockapi.io/transactions',
      onRequest: (request) => {
      request.headers.auth = '123';
    }
  }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeTest',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
    }
  }
}