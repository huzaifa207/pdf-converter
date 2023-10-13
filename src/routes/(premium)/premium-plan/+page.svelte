<script>
    import {goto} from '$app/navigation'

    import Cross from '$lib/svgs/cross.svelte'

    let handleClick = () => {
        console.log('test');
        goto("/")
    }
</script>

<main class="h-screen bg-gradient-to-b from-[#D1C5FF] to-[#6138FF] px-0">
    <img src="/bg-diamond.png" alt="diamond background" class="fixed top-1/4 left-1/2 -translate-x-1/2 z-0">
    <div class="z-10 text-white flex flex-col gap-4 items-center">
        <div class="w-full bg-[#6138FF80] flex flex-col gap-2 border-white border-b-[10px] rounded-br-full rounded-bl-full h-[22vh] shadow-xl">
            <button class="bg-white rounded-full p-2 w-max ml-6 mt-2" on:click|preventDefault={handleClick}>
                <Cross />
            </button>
            <div class="w-[70%] bg-white rounded-lg p-2 self-center drop-shadow-lg relative">
                <img src="/ribbon.png" alt="" class="h-full w-full">
                <h1 class="font-bold absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-black">Choose your Plan</h1>
            </div>
        </div>
        <p>Continue with free plan</p>
        <p>Access Premium version - Get ad free Tools</p>

        <div class="bg-[#6138FFBF] rounded-lg py-4 px-8 font-bold w-3/5 text-center shadow-xl">
            <p>All file types Unlimited Conversion</p>
        </div>

        <div class="box current">
            <h2 class="font-semibold">Weekly Plan</h2>
            <p>Rs:600</p>
            <p>Basic</p>
        </div>
        <div class="box">
            <h2 class="font-semibold">Weekly Plan</h2>
            <p>Rs:600</p>
            <p>Basic</p>
        </div>
        <div class="box">
            <h2 class="font-semibold">Weekly Plan</h2>
            <p>Rs:600</p>
            <p>Basic</p>
        </div>

        <button class="btn text-xl font-bold shadow-lg">
            CONTINUE
        </button>
        <div class="flex justify-between text-[10px] underline w-full px-6">
            <p>Cancel anytime</p>
            <p>Privacy Policy</p>
            <p>Term of Service</p>
            <p>Restore Purchase</p>
        </div>
    </div>
</main>
<style lang="postcss">
    .box {
        @apply flex gap-8 px-3 w-10/12 self-start ml-6 relative bg-white text-black py-4 rounded-lg shadow-lg after:content-['10%_Off'] after:text-black after:font-semibold after:flex after:items-center after:justify-center after:text-[10px] after:h-full after:absolute after:aspect-square after:-right-7 after:bottom-1/2 after:translate-y-1/2 after:bg-gradient after:rounded-full after:border-4
    }

    .current {
        @apply bg-primary text-white
    }
</style>