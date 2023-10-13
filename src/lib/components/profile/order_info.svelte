<div class="flex flex-col gap-4">
    <div class="flex items-center justify-around bg-white py-4 rounded-xl shadow-xl">
        <div class="flex flex-col justify-center items-center">
            <h3>Order on</h3>
            <p>2022-12-03 Time</p>
        </div>
        <div class="flex flex-col justify-center items-center">
            <h3>Amount</h3>
            <p>$12</p>
        </div>
        <div class="flex flex-col justify-center items-center">
            <h3>Order#</h3>
            <p>EREDS</p>
        </div>
    </div>
    <div class="flex flex-col gap-3">
        <h3>Renews on 2022-12-03 Time</h3>
        <div class="grid grid-cols-2 gap-y-2">
            <p>Details</p>
            <p>Terms</p>
            <p>Monthly Subscription</p>
            <p>$12/monthly</p>
        </div>
    </div>
    <div class="flex flex-col gap-2 pt-4">
        <p class="info">Edit Payment Method</p>
        <p class="info">Cancel Subscription</p>
        <p class="info">Pause Subscription</p>
    </div>
</div>

<style lang="postcss">
    h3 {
        @apply font-bold text-xs
    }
    p {
        @apply text-[10px]
    }
    .info {
        @apply text-primary
    }
</style>