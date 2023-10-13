<script>
	import Form from '$lib/components/profile/form.svelte';
	import { homeNav } from '$lib/store.js';
	import OrderInfo from '$lib/components/profile/order_info.svelte';
	import Payment from '$lib/components/profile/payment.svelte';
	import Security from '$lib/components/profile/security.svelte';

	let handleClick = (option) => {
		homeNav.set(option);
	};
</script>

<main>
	<div class="flex flex-col gap-8 py-10">
		<div class="flex gap-2">
			<button class="square-buttons {$homeNav === 0 && 'selected'}" on:click={() => handleClick(0)}>
				<img src="/pdf.png" alt="" />
				<p>Profile Info</p>
			</button>
			<button class="square-buttons {$homeNav === 1 && 'selected'}" on:click={() => handleClick(1)}>
				<img src="/pdf.png" alt="" />
				<p>Order</p>
			</button>
			<button class="square-buttons {$homeNav === 2 && 'selected'}" on:click={() => handleClick(2)}>
				<img src="/pdf.png" alt="" />
				<p>Payment Method</p>
			</button>
			<button class="square-buttons {$homeNav === 3 && 'selected'}" on:click={() => handleClick(3)}>
				<img src="/pdf.png" alt="" />
				<p>Security</p>
			</button>
		</div>
		{#if $homeNav === 0}
			<Form />
		{:else if $homeNav === 1}
			<OrderInfo />
		{:else if $homeNav === 2}
			<Payment />
		{:else if $homeNav === 3}
			<Security />
		{/if}
	</div>
</main>
