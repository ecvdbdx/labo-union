<script lang="ts">
	import { supabase } from '$lib/auth';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_, session) => {
			invalidate('supabase:auth');

			if (session && session.user) {
				// TODO: show popup to inform user that he is logged in
			}
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<main>
	<slot />
</main>
