<script lang="ts">
	import type { Profile } from '$lib/types/profile';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Modal from '$lib/components/Modal.svelte';

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

	const logout = async () => {
		await supabase.auth.signOut();
		invalidate('supabase:auth');
	};
</script>

<Header {user} {logout} />
<main>
	<slot />
</main>
<Modal />
