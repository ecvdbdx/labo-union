import { dirname } from 'path';
import { fileURLToPath } from 'url';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		sass: {
			prependData: `@import '${__dirname}/src/styles/index'`,
			renderSync: true,
		},
		postcss: {
			plugins: [autoprefixer],
		},
	}),

	kit: {
		adapter: adapter(),
	},
};

export default config;
