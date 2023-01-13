<script lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD
	import Link from '$lib/components/Link.svelte';
=======
	import Button from '$lib/components/Button.svelte';
	import Link from '$lib/components/Link.svelte';
	import Icon from '$lib/components/Icon.svelte';

	import { goto } from '$app/navigation';
>>>>>>> 8f79a83 (feat: handle signup form errors (wip))
=======
	import Link from '$lib/components/Link.svelte';
	import Icon from '$lib/components/Icon.svelte';
>>>>>>> 44c6eae (feat: add required attribute to input)
</script>

<div class="container">
	<h1>Welcome to Annuaire</h1>
<<<<<<< HEAD
=======
	<p>
		Visit <Link href="https://kit.svelte.dev">kit.svelte.dev</Link> to read the documentation
		<Icon id="bookmark" />
	</p>
>>>>>>> c8a9396 (feat: externalise form validators and check email)

<<<<<<< HEAD
<<<<<<< HEAD
	<Link href="inscription">S'enregistrer</Link>
=======
	<Button on:click={() => goto('/inscription', { replaceState: true })}>S'enregister</Button>
>>>>>>> 8f79a83 (feat: handle signup form errors (wip))
=======
	<Link href="inscription">S'enregister</Link>
>>>>>>> 44c6eae (feat: add required attribute to input)
</div>
