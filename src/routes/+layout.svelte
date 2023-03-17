<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	import { supabase } from '$lib/auth';
	import Header from '$lib/components/Header.svelte';

	export let data;

	$: user = data.user;

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
