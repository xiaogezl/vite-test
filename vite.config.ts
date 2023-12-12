import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const config = loadEnv(mode, process.cwd(), '')
    return {
        server: {
            // 指定dev sever的端口号，默认为5173
            port: 8090,
            // 自动打开浏览器运行以下页面
            open: '/',
            proxy: {
                '^/api/': {
                    target: config.VUE_APP_SERVER, // 后台服务器地址
                    changeOrigin: true /* 允许跨域 */,
                    rewrite: (path) => path.replace(/^\/api/, '/api/')
                }
            }
        },
        envPrefix: ['VITE', 'VUE'], // 可读取的全局变量前缀
        plugins: [
            vue(),
            vueJsx(),
            eslintPlugin({
                // include: ['src/**/*.ts', 'src/**/*.js', 'src/**/*.tsx', 'src/**/*.vue']
                // exclude: ['node_modules'],
                // cache:false
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        build: {
            outDir: '../public',
            assetsDir: 'static',
            // minify: 'terser',
            cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
            terserOptions: {
                compress: {
                    // warnings: false,
                    drop_console: true, // 打包时删除console
                    drop_debugger: true, // 打包时删除 debugger
                    pure_funcs: ['console.log']
                },
                output: {
                    // 去掉注释内容
                    comments: true
                }
            }
        }
    }
})
