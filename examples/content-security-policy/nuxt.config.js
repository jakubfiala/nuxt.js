export default {
  loading: false,
  loadingIndicator: false,
  fetch: {
    client: false,
    server: false
  },
  features: {
    store: false,
    layouts: false,
    meta: false,
    middleware: false,
    transitions: false,
    deprecations: false,
    validate: false,
    asyncData: false,
    fetch: false,
    clientOnline: false,
    clientPrefetch: false,
    clientUseUrl: true,
    componentAliases: false,
    componentClientOnly: false
  },
  build: {
    indicator: false,
    terser: true
  },
  render: {
    csp: {
      policies: {
        'default-src': ["'self'"],
        'img-src': ['https:', '*.google-analytics.com'],
        'worker-src': ["'self'", `blob:`, '*.logrocket.io'],
        'style-src': ["'self'", "'unsafe-inline'", ],
        'script-src': ["'self'", "'unsafe-inline'",  'sentry.io', '*.sentry-cdn.com', '*.google-analytics.com', '*.logrocket.io'],
        'connect-src': [ 'sentry.io', '*.google-analytics.com'],
        'form-action': ["'self'"],
        'frame-ancestors': ["'none'"],
        'object-src': ["'none'"],
        'base-uri': [],
      },
      nonceGenerator: () => 'asdfghj',
    }
  }
}
