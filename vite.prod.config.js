import Compression from 'vite-plugin-compression'
console.log('aaa')
/**
 * @type {import('vite').UserConfig }
 */
export default {
  plugins: [
    // gzip压缩
    new Compression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    })
  ]
}
