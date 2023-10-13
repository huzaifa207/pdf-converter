<script>
	import EditIcon from '../../svgs/edit_icon.svelte';
	import DropDown from '../../svgs/drop_down.svelte';
	import Reload from '../../svgs/reload.svelte';
</script>

<div class="flex flex-col items-center gap-6 w-4/5 mx-auto">
	<div class="w-full flex flex-col justify-center items-center gap-2">
		<button class="select-field">
			<div class="box">HTML</div>
			<p>Select File</p>
			<EditIcon />
		</button>
		<div>
            <img src="/down-arrow.png" alt="">
        </div>
		<button class="select-field">
			<div class="box">TXT</div>
			<p>Select Format</p>
			<DropDown />
		</button>
	</div>
	<button class="btn"><Reload /> Convert File</button>
</div>

<style lang="postcss">
	.select-field {
		@apply flex justify-between items-center w-full bg-white p-4 rounded-xl shadow-xl;
	}

    .box {
        @apply flex items-center justify-center bg-[#6138FF80] text-white text-[10px] h-9 w-9 aspect-square rounded-xl
    }
</style>
