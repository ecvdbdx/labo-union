<script lang="ts">
	export let id: string;
	export let color: string | undefined = undefined;
	export let filled = false;
	export let size = '1em';
</script>

<svg
	class="Icon"
	fill={filled ? color : 'transparent'}
	stroke={color ?? 'currentColor'}
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	width={size}
	height={size}
	on:click
	on:keydown
>
	<use href={`/svg/feather-sprite.svg#${id}`} />
</svg>
