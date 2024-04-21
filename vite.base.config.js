import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
// postcss预设
import PostcssPresetEnv from 'postcss-preset-env'
import path from 'path'
// ts校验错误显示在控制台
import Checker from 'vite-plugin-checker'
// /**
//  * @type {import('vite').UserConfig }
//  */
export default defineConfig({
  define: {
    vname: "'daada'"
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [Vue(), Checker({ typescript: false })],
  envPrefix: 'TT_',
  optimizeDeps: {
    // exclude: ['lodash-es']
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    },
    // postcss: {
    //   plugins: [
    //     PostcssPresetEnv({
    //       /* pluginOptions */
    //       features: {}
    //       // importFrom: path.resolve(__dirname, './src/assets/css/variables.css')
    //     })
    //   ]
    // },
    preprocessorOptions: {
      less: {
        // 引入全局LESS文件
        additionalData: `@import "@/assets/css/variables.less";`,
        // 定义全部变量，只能在less或vue文件中使用
        globalVars: {
          zzblue: '#2CC0FF'
        },
        math: 'always'
      }
    },
    devSourcemap: true
  },
  build: {
    rollupOptions: {
      // input: {
      //   index: './index.html',
      //   home: './home.html'
      // },
      output: {
        manualChunks: {
          lodash: ['lodash-es']
        }
      }
    }
  }
})
