<script>
	import { goto } from '$app/navigation';

	import { bottomNav, profileNav, homeNav, settingsNav } from '$lib/store.js';
	import Person from '$lib/svgs/person.svelte';
	import Crown from '$lib/svgs/crown.svelte';
	import Menu from '$lib/svgs/menu.svelte';
	import BackArrow from '$lib/svgs/back_arrow.svelte';

	let bottomNavTitles = ['PDF Converter Suite', 'Converted Files', 'Scanner'];
	let homeNavTitles = [
		'Convert To Pdf',
		'Convert From Pdf',
		'Other Conversions',
		'Pdf Tools',
		'Select File'
	];
	let profileNavTitles = ['Profile', 'Order', 'Payment Method', 'Security'];

	let generatePageTitle = ($profileNav, $homeNav, $bottomNav, $settingsNav) => {
		if($settingsNav === true){
			return "Settings"
		}
		else if ($profileNav === null && $homeNav === null) {
			return bottomNavTitles[$bottomNav];
		} else if ($profileNav === null && $homeNav !== null) {
			return homeNavTitles[$homeNav];
		} else if ($profileNav != null && $homeNav === null) {
			return profileNavTitles[$profileNav];
		}
	};

	$: pageTitle = generatePageTitle($profileNav, $homeNav, $bottomNav, $settingsNav);

	let handleClick = (page) => {
		profileNav.set(page);
		homeNav.set(null);
		goto('/profile');
	};

	let handleBack = () => {
		profileNav.set(null);
		homeNav.set(null);
		settingsNav.set(false)
		goto('/');
	};

	let handlePremium = () => {
		goto('/premium-plan');
	};

	let handleSettings = () => {
		settingsNav.set(true)
		goto("/settings")
	}
</script>

<header class="bg-primary font-bold text-lg text-white rounded-bl-xl rounded-br-xl">
	{#if $profileNav === null && $homeNav === null && $settingsNav === false}
		<div class="flex justify-between items-center w-full px-4">
			<h1>{pageTitle}</h1>
			<div class="flex items-center justify-end gap-4">
				<button on:click={() => handleClick(0)}>
					<Person />
				</button>
				<button on:click={handlePremium}>
					<Crown />
				</button>
				<button on:click={handleSettings}>
					<Menu />
				</button>
			</div>
		</div>
	{:else}
		<div class="flex justify-between px-4 w-full">
			<div class="flex items-center justify-start gap-6">
				<button on:click={handleBack}>
					<BackArrow />
				</button>
				<h1>{pageTitle}</h1>
			</div>
			{#if $homeNav !== null}
				<button on:click={handlePremium}>
					<Crown />
				</button>
			{/if}
		</div>
	{/if}
</header>
