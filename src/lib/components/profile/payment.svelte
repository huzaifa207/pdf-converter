<script>
    import Card from "$lib/svgs/card.svelte"
    import Paypal from "$lib/svgs/paypal.svelte"
    import Visa from "$lib/svgs/visa.svelte"
</script>

<div class="flex flex-col gap-4">
    <div class="flex gap-2">
        <Card />
        <h2>Payment Methods</h2>
    </div>
    <div class="flex justify-between items-center box">
        <div class="flex items-center gap-4">
            <Paypal /> <h3>PayPal</h3>
        </div>
        <p>Edit</p>
    </div>
    <div class="flex justify-between items-center box">
        <div class="flex items-center gap-4">
            <Visa /> <h3>Allied Bank</h3>
        </div>
        <p>Edit</p>
    </div>
    <p class="highlight">Add payment method</p>
</div>

<style lang="postcss">
    h2 {
        @apply font-bold
    }
    .box {
        @apply bg-[#E7E7E7] w-4/5 px-2 rounded-xl py-4
    }
    h3 {
        @apply font-bold text-sm
    }
    p {
        @apply text-primary text-[10px]
    }
    .highlight {
        @apply text-sm font-bold py-4
    }
</style>