<script>
	import { goto } from '$app/navigation';

	import Home from '$lib/svgs/home.svelte';
	import Converted from '$lib/svgs/converted.svelte';
	import Scanner from '$lib/svgs/scanner.svelte';
	import { bottomNav, profileNav, homeNav } from '$lib/store.js';

	export let data, class_;

	let ref;

	let handleClick = () => {
		bottomNav.set(data.id);
		profileNav.set(null);

		if (data.id === 0) {
			homeNav.set(null)
			goto('/');
		} else if (data.id === 1) {
			goto('/converted');
		} else if (data.id === 2) {
			goto('/scanner');
		}
	};
</script>

<button class="icon-container {class_}" bind:this={ref} on:click|preventDefault={handleClick}>
	{#if data.icon === 'home'}
		<Home />
	{:else if data.icon === 'converted'}
		<Converted />
	{:else}
		<Scanner />
	{/if}
	<p>{data.title}</p>
</button>

