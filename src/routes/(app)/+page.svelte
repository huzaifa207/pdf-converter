<script>
	import Form from '$lib/components/home/form.svelte';
</script>

<main>
	<div class="flex flex-col justify-end h-full gap-6 py-4">
		<div class="flex gap-2">
			<div class="square-buttons">
				<img src="/pdf.png" alt="" />
				<p>Convert to Pdf</p>
			</div>
			<div class="square-buttons">
				<img src="/pdf.png" alt="" />
				<p>Convert from Pdf</p>
			</div>
			<div class="square-buttons">
				<img src="/pdf.png" alt="" />
				<p>Other Conversions</p>
			</div>
			<div class="square-buttons">
				<img src="/pdf.png" alt="" />
				<p>Pdf Tools</p>
			</div>
		</div>
		<Form />

		<p class="text-center text-[#959595]">
			Files are upload over an encrypted connection, and immediately deleted from the server after
			conversion.No identifiable records are kept of the conversion. <a href="/" class="text-[#6138FF]">Privacy Policy</a>
		</p>
	</div>
</main>
