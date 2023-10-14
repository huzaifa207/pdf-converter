<script>
	import { goto } from "$app/navigation";
	import Form from '$lib/components/home/form.svelte';
	import { homeNav, profileNav } from "$lib/store.js";

	let urls = ['/converted/to', 'converted/from', '/converted/other', '/tools', '/select-file']

	let handleClick = (page) => {
		profileNav.set(null)
		if (typeof page === 'number') {
			homeNav.set(page)
			goto(urls[page])
		}else {
			let test_page = page.detail.page
			homeNav.set(test_page)
			goto(urls[test_page])
		}
		
	}
</script>

<main>
	<div class="flex flex-col justify-between h-full py-4">
		<div class="flex flex-col gap-6 py-6">
			<div class="flex gap-2">
				<button class="square-buttons" on:click={() => handleClick(0)}>
					<img src="/pdf.png" alt="" />
					<p>Convert to Pdf</p>
				</button>
				<button class="square-buttons" on:click={() => handleClick(1)}>
					<img src="/pdf.png" alt="" />
					<p>Convert from Pdf</p>
				</button>
				<button class="square-buttons" on:click={() => handleClick(2)}>
					<img src="/pdf.png" alt="" />
					<p>Other Conversions</p>
				</button>
				<button class="square-buttons" on:click={() => handleClick(3)}>
					<img src="/pdf.png" alt="" />
					<p>Pdf Tools</p>
				</button>
			</div>
			<Form on:message={handleClick}/>
		</div>

		<p class="text-center text-[#959595]">
			Files are upload over an encrypted connection, and immediately deleted from the server after
			conversion.No identifiable records are kept of the conversion. <a href="/" class="text-[#6138FF]">Privacy Policy</a>
		</p>
	</div>
</main>
