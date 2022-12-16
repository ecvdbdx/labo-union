import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

import { dirname } from 'path';

const __dirname = dirname(import.meta.url);

const alias = {
	'@interfaces': `${__dirname}/src/interfaces.d.ts`,
};

const config: UserConfig = {
	plugins: [sveltekit()],
	server: { port: 8080 },
	publicDir: 'static',
	resolve: { alias },
};

export default config;
