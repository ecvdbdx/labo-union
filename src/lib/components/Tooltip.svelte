<script lang="ts">
	export let message: string;
	export let type: 'info' | 'error' | 'warning' = 'info';
</script>

<div class={`Tooltip ${type}`}>
	<p>{message}</p>
</div>

<style lang="sass">
	.Tooltip
		width: 100%
		justify-content: center
		align-items: center
		height: fit-content
		padding: 2rem
		border-radius: 1rem

	.info
		border: 0.15rem solid $secondary

	.error
		border: 0.15rem solid $error

	.warning
		border: 0.15rem solid $primary
</style>
