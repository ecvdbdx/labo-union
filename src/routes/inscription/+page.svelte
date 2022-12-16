<script>
	import Input from '../../lib/components/forms/Input.svelte';
	import Button from '../../lib/components/Button.svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';

	// let data;
	// $: data, console.log('data :', data);
</script>

<div class="container">
	<form method="POST">
		<Input value="" name="email" type="email" placeholder="fabriceparmentier@gmail.com">Email</Input
		>
		<Input value="" name="password" type="password" placeholder="">Mot de passe</Input>
		<Checkbox
			name="termAndConditions"
			reverse
			label="J’accepte les Conditions d’utilisation et la Politique de confidentialité"
			value={false}
		/>
		<Button>Créer un compte</Button>
	</form>
</div>
