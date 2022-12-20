<<<<<<< HEAD
<<<<<<< HEAD
<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';

	export let form: ActionData;
</script>

<div class="container sign-up">
	<form method="POST" use:enhance>
		<Input
			value={form?.email ?? ''}
			name="email"
			type="email"
			required
			placeholder="john.doe@mail-ecv.com"
			error={form?.email_error}>Email*</Input
		>
		<Input
			value={form?.password ?? ''}
			name="password"
			required
			type="password"
			error={form?.password_error}>Mot de passe*</Input
		>
		<Input
			value={''}
			name="confirmedPassword"
			type="password"
			required
			error={form?.confirmedPassword_error}>Confirmer votre mot de passe*</Input
		>
=======
<script>
	import Input from '../../lib/components/forms/Input.svelte';
	import Button from '../../lib/components/Button.svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';
=======
<script lang="ts">
	import type { ActionData } from './$types';
>>>>>>> 8f79a83 (feat: handle signup form errors (wip))

	import { enhance } from '$app/forms';
	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';
	import Link from '$lib/components/Link.svelte';

	export let form: ActionData;

	$: emailError = form?.email;
	$: passwordError = form?.password;
	$: termAndConditionsError = form?.termAndConditions;
</script>

<div class="container sign-up">
	<Link href="/">Retour</Link>

	<form method="POST" use:enhance>
		<Input value="" name="email" type="email" placeholder="john.doe@mail-ecv.com" error={emailError}
			>Email</Input
		>
<<<<<<< HEAD
		<Input value="" name="password" type="password" placeholder="">Mot de passe</Input>
>>>>>>> 2a5a1f6 (feat: init supabase auth)
=======
		<Input value="" name="password" type="password" error={passwordError}>Mot de passe</Input>
>>>>>>> 8f79a83 (feat: handle signup form errors (wip))
		<Checkbox
			name="termAndConditions"
			reverse
			label="J’accepte les Conditions d’utilisation et la Politique de confidentialité"
			value={false}
		/>
<<<<<<< HEAD
<<<<<<< HEAD
		{#if form?.termAndConditions_error}
			<p class="error">{form?.termAndConditions_error}</p>
		{/if}

		<Button>Créer un compte</Button>

		{#if form?.success}
			<p class="success">Votre compte a bien été créé !</p>
		{/if}
	</form>
</div>

<style lang="sass">

	.sign-up
		margin-top: 5vh
		width: 100%

		form
			margin-top: 1rem
		
		.error
			color: $error
		
		.success
			color: $success

</style>
=======
		<Button>Créer un compte</Button>
	</form>
</div>
>>>>>>> 2a5a1f6 (feat: init supabase auth)
=======
		{#if form?.termAndConditions}
			<p class="error">{termAndConditionsError}</p>
		{/if}
		<Button>Créer un compte</Button>
	</form>
</div>

<style lang="sass">

	.sign-up
		margin-top: 5vh

		form
			margin-top: 1rem
		
		.error
			color: $error

</style>
>>>>>>> 8f79a83 (feat: handle signup form errors (wip))
