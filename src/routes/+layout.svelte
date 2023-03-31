<script lang="ts">
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';

	import type { Profile } from '$lib/types/profile';
	import Header from '$lib/components/Header.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;

	$: ({ supabase } = data);
	$: user = data.user as Profile;

	onMount(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== _session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<Header {user} />
<main>
	<slot />
</main>
<Modal />
<Footer />
