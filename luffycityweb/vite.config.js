import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite'; // 按需加载组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  // server: {
  //   port: '3000',           // 客户端的运行端口，此处也可以绑定vue运行的端口，当然也可以写在pycharm下
  //   host: 'www.luffy.cn', // 客户端的运行地址，此处也可以绑定vue运行的域名，当然也可以写在pycharm下
  //   前端进行 跨域代理
  // 注意针对跨域的处理，前端进行或者是后端进行，不需要两端都进行！！！
  // proxy: {
  //     '/api': {
  //         // 凡是遇到 /api 路径的请求，都映射到 target 属性  /api/header/  ---> http://api.luffycity.cn:8000/header/
  //         target: 'http://api.luffy.cn:8000/',
  //         changeOrigin: true,
  //         ws: true,    // 是否支持websocket跨域
  //         rewrite: path => path.replace(/^\/api/, '')
  //     }
  // }
  // }
});
