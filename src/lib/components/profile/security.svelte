<script>
    import Lock from '$lib/svgs/lock.svelte'
    import Tick from '$lib/svgs/tick.svelte'
</script>

<div class="flex flex-col gap-4 text-[10px]">
    <div class="flex gap-2 items-center">
        <Lock />
        <h2 class="font-bold text-base">Security</h2>
    </div>
    <p>Change Password</p>
    <p>You are changing password for : <span class="font-bold">talhaashraf344@gmail.com</span></p>
    <label for="c-pass">Current Password</label>
    <input type="password" name="c-pass" id="" placeholder="Current Password">
    <label for="n-pass">New Password</label>
    <input type="password" name="n-pass" id="" placeholder="New Password">
    <div class="flex flex-col gap-1">
        <p class="font-bold">Your password must contain</p>
        <div class="flex gap-1">
            <Tick />
            <p>At least 6 characters</p>
        </div>
        <div class="flex gap-1">
            <Tick />
            <p>Uppercase and lowercase letters</p>
        </div>
    </div>
    <button class="btn">Save Changes</button>
</div>

<style lang="postcss">
    input {
        @apply w-1/2 bg-[#E7E7E7] rounded-full py-1 px-3
    }

    .btn {
        @apply w-max mx-auto py-2
    }
</style>