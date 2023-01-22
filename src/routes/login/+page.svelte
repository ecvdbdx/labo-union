<script lang="ts">
	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Link from '$lib/components/Link.svelte';

	import { supabase } from '$lib/supabaseClient';

	let loading = false;
	let email: string;
	let password: string;

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signInWithPassword({
				email: 'example@email.com',
				password: 'example-password',
			});
			console.log('TRY');
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
			console.log('FINALLY' + email);
		}
	};
</script>

<div class="container">
	<Link href="/">Retour</Link>

	<form method="POST" on:submit|preventDefault={handleLogin}>
		<div class="form-widget">
			<h1 class="header">Me connecter</h1>
			<Input name="Email" type="email" placeholder="Your email" bind:value={email}>Email</Input>
			<Input bind:value={password} name="password" type="password" required>Mot de passe</Input>

			<Button>Me connecter</Button>
		</div>
	</form>
</div>

<style lang="sass">

</style>
