export default {
  namedModules: true,
  namedChunks: true,
  moduleIds: 'hashed',
  noEmitOnErrors: true,
  runtimeChunk: 'single',
  splitChunks: {
    chunks: 'all',
    maxInitialRequests: Infinity,
    minSize: 30000,
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name (module) {
          // get the name. E.g. node_modules/packageName/not/this/part.js
          // or node_modules/packageName
          const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

          // npm package names are URL-safe, but some servers don't like @ symbols
          return `${packageName.replace('@', '')}`
        }
      }
    }
  }
}
