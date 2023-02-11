<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	import { supabase } from '$lib/auth';

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

<main>
	<slot />
</main>
