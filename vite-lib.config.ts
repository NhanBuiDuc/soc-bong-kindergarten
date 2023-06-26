import { svelte } from '@sveltejs/vite-plugin-svelte'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
	plugins: [svelte(), Icons({ compiler: 'svelte' })],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		target: 'es2015',
		outDir: 'primo-components',
		assetsDir: 'assets',
		cssCodeSplit: false,
		rollupOptions: {
			input: '/src/lib/index.ts' // JavaScript entry point of your library
		},
		lib: {
			entry: '/src/lib/index.ts', // point this to the entry point of your library
			name: 'MyLibrary' // this will be the global variable name in non-module environments
		}
	},
	resolve: {
		alias: {
			$lib: path.resolve(__dirname, './src/lib')
		}
	}
})
