<script lang="ts">
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import type { ConstructorOfATypedSvelteComponent } from '$lib/types/svelte';

	import type { Profile } from '$lib/types/profile';
	import Header from '$lib/components/Header.svelte';

	import Footer from '$lib/components/Footer.svelte';

	export let data;
	let Modal: ConstructorOfATypedSvelteComponent;

	$: ({ supabase } = data);
	$: user = data.user as Profile;

	onMount(async () => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== _session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		Modal = (await import('$lib/components/Modal.svelte')).default;

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<Header {user} />
<main>
	<slot />
</main>
<svelte:component this={Modal} />
<Footer />
