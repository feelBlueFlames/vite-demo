import { defineConfig } from 'vite'
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'
const envConfig = {
  build: () => {
    console.log('生产环境')
    return { ...viteBaseConfig, viteProdConfig }
  },
  serve: () => {
    console.log('开发环境')
    return Object.assign(viteBaseConfig, viteDevConfig)
  }
}
export default defineConfig(({ command, mode }) => {
  console.log(command, mode)
  return envConfig[command]()
})
