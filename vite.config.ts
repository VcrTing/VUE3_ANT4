import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    vue(),
    
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      vueTemplate: true,
    }),

    Components({
      dirs: [ './src/components', './src/ui/*', './src/cake/*', './src/views/*' ],
      dts: true,
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
        }),
      ],
    }),
  
  ],
})
