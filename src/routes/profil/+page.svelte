<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import Profile from '$lib/components/Profile.svelte';
	export let data: PageData;
	export let form: ActionData;
</script>

<Profile profile={data.profile} editable={true} {form} userId={data.session.user.id} />
