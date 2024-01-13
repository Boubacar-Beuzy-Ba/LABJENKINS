browsers: ['Chrome', 'ChromeHeadless', 'ChromeHeadlessCI'],
customLaunchers: {
  ChromeHeadlessCI: {
    base: 'ChromeHeadless',
    flags: ['--no-sandbox', '--disable-gpu', '--disable-translate', '--disable-extensions', '--remote-debugging-port=9222']
  }
}
