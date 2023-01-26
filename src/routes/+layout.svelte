<script lang="ts">
	import { supabase } from '$lib/auth';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		supabase.auth.signInWithPassword({
			email: 'elisa.bourg@mail-ecv.fr',
			password: 'tototov23',
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<main>
	<slot />
</main>
