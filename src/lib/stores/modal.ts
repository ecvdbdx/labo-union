import { writable } from 'svelte/store';

export const modal = writable<{
	title: string;
	component: ConstructorOfATypedSvelteComponent;
	props: object;
} | null>(null);
