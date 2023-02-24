<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import Profile from '$lib/components/Profile.svelte';
	// import { supabase } from '$lib/auth';
	export let data: PageData;
	export let form: ActionData;
</script>

<Profile profile={data.profile} editable={true} {form} />
