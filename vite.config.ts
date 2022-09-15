import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import DefineOptions from 'unplugin-vue-define-options/vite';
import unocss from 'unocss/vite';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig(configEnv => {
  const viteEnv = loadEnv(configEnv.mode, `.env.${configEnv.mode}`);

  const isVercel = viteEnv.VITE_IS_VERCEL === '1';

  return {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    plugins: [
      vue(),
      DefineOptions(),
      unocss({ include: ['src/App.vue'] }),
      dts({
        include: ['./src/index.ts', './src/index.vue'],
        beforeWriteFile(filePath, content) {
          return {
            filePath: filePath.replace('/dist/src/', '/dist/'),
            content
          };
        }
      }),
      AutoImport({
        dts: './src/typings/auto-imports.d.ts',
        imports: ['vue'],
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true
        }
      }),
      Components({
        dts: './src/typings/components.d.ts',
        dirs: ['src/components']
      })
    ],
    optimizeDeps: {
      exclude: ['vue-demi']
    },
    build: isVercel
      ? {
          brotliSize: false
        }
      : {
          lib: {
            entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
            name: 'BasicLayout',
            fileName: 'index'
          },
          rollupOptions: {
            external: ['vue'],
            output: {
              globals: {
                vue: 'Vue'
              }
            }
          }
        }
  };
});
