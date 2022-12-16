import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const alias = {
	'@utils': `${__dirname}/src/utils`,
};

const config: UserConfig = {
	plugins: [sveltekit()],
	server: { port: 8080 },
	resolve: { alias },
};

export default config;
