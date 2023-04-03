<script lang="ts">
	import type { Profile } from '$lib/types/profile';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	import { supabase } from '$lib/auth';
	import Header from '$lib/components/Header.svelte';
	import Modal from '$lib/components/Modal.svelte';

	export let data;

	$: user = data.user as Profile;

	onMount(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
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
