<script lang="ts">
	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Link from '$lib/components/Link.svelte';
</script>

<div class="container">
	<Link href="/">Retour</Link>

	<form method="POST">
		<div class="form-widget">
			<h1 class="header">Me connecter</h1>
			<Input
				value={''}
				name="email"
				type="email"
				required
				placeholder="john.doe@mail-ecv.com"
				error={''}>Email</Input
			>
			<Input value={''} name="password" required type="password" error={'error'}>Mot de passe</Input
			>

			<Button>Me connecter</Button>
		</div>
	</form>
</div>

<style lang="sass">

</style>
