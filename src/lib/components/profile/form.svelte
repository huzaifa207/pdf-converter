<script>
	let date = [
		{
			month: '01',
			days: 31
		},
		{
			month: '02',
			days: 28
		},
		{
			month: '03',
			days: 31
		},
		{
			month: '04',
			days: 30
		},
		{
			month: '05',
			days: 31
		},
		{
			month: '06',
			days: 30
		},
		{
			month: '07',
			days: 31
		},
		{
			month: '08',
			days: 31
		},
		{
			month: '09',
			days: 30
		},
		{
			month: '10',
			days: 31
		},
		{
			month: '11',
			days: 30
		},
		{
			month: '12',
			days: 31
		}
	];

	let selectedMonth, selectedDay, selectedYear;
</script>

<div class="grid grid-cols-2 text-[10px] gap-x-8 gap-y-4">
	<div class="flex flex-col gap-2">
		<label for="">First Name</label>
		<input type="text" name="" id="" placeholder="First Name"/>
	</div>
	<div class="flex flex-col gap-2">
		<label for="">Last Name</label>
		<input type="text" name="" id="" placeholder="Last Name"/>
	</div>
	<div class="flex flex-col gap-2">
		<label for="">Email Id</label>
		<input type="email" name="" id="" placeholder="Email Id"/>
	</div>
	<div class="flex flex-col gap-2">
		<label for="">Phone Number</label>
		<input type="text" name="" id="" placeholder="Phone Number"/>
	</div>
	<div class="col-span-2 flex flex-col gap-2">
		<label for="">Date of birth</label>
		<div>
			<select name="month" id="" bind:value={selectedMonth} class={selectedMonth == '0' && 'selected-text'}>
                <option value="0">Month</option>
				{#each date as d}
                <option value={d.month}>{d.month}</option>
				{/each}
			</select>
			<select name="" id="" bind:value={selectedDay} class={selectedDay == '0' && 'selected-text'}>
                <option value="0">Day</option>
				{#each [...Array(31).keys()] as d}
                <option value={d + 1}>{d + 1}</option>
				{/each}
			</select>
			<select name="" id="" bind:value={selectedYear} class={selectedYear == '0' && 'selected-text'}>
                <option value="0">Year</option>
				{#each [...Array(2024 - 1900).keys()].sort((a, b) => b - a).map((i) => i + 1900) as year}
					<option value={year}>{year}</option>
				{/each}
			</select>
		</div>
	</div>
</div>

<style lang="postcss">
    input, select {
        @apply bg-[#E7E7E7] rounded-xl h-6 px-3
    }

    input {
        @apply w-3/5
    }

    select {
        @apply w-1/5
    }

    option {
        @apply first:text-[#C8C8C8]
    }

    .selected-text {
        @apply text-[#C8C8C8] !important
    }
</style>