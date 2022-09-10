const { build } = require('esbuild')
const { createDevServer } = require('@layer0/core/dev')

const appDir = process.cwd()

module.exports = function () {
  build({
    entryPoints: [`${appDir}/sw/service-worker.js`],
    outfile: `${appDir}/dist/service-worker.js`,
    minify: true,
    bundle: true,
    define: {
      'process.env.NODE_ENV': '"production"',
      'process.env.LAYER0_PREFETCH_HEADER_VALUE': '"1"',
      'process.env.LAYER0_PREFETCH_CACHE_NAME': '"prefetch"',
    },
  })
  return createDevServer({
    label: '[Astro]',
    command: (port) => `npx astro dev --port ${port}`,
    ready: [/listening on/i],
  })
}
