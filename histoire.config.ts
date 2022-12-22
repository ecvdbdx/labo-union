import { defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
	plugins: [HstSvelte()],
	setupFile: '/histoire.setup.ts',
	theme: {
		title: 'Labo - Union',
	},
	tree: {
		groups: [
			{
				id: 'top',
				title: '',
			},
			{
				id: 'general',
				title: '',
			},
			{
				id: 'forms',
				title: 'Forms',
			},
		],
	},
});
