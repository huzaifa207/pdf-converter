<script>
    import {goto} from "$app/navigation"

    import {bottomNav, homeNav} from "$lib/store.js"
    import Person from "$lib/svgs/person.svelte"
    import Crown from "$lib/svgs/crown.svelte"
    import Menu from "$lib/svgs/menu.svelte"
    import BackArrow from "$lib/svgs/back_arrow.svelte"


    $: pageTitle = $homeNav === null ? $bottomNav === 0 ? "PDF Converter Suite" : $bottomNav === 1 ? 'Converted Files' : "Scanner" : $homeNav === 0 ? 'Profile' : $homeNav === 1 ? "Order" : $homeNav === 2 ? "Payment Method" : "Security"

    let handleClick = (page) => {
        homeNav.set(page)
        goto('/profile')
    }

    let handleBack = () => {
        homeNav.set(null)
        goto("/")
    }

    let handlePremium = () => {
        goto("/premium-plan")
    }
</script>

<header class="bg-primary font-bold text-lg text-white">
    {#if $homeNav === null}
        <div class="flex justify-between items-center w-full px-4">
            <h1>{pageTitle}</h1>
            <div class="flex items-center justify-end gap-4">
                <button on:click={() => handleClick(0)}>
                    <Person />
                </button>
                <button on:click={handlePremium}>
                    <Crown />
                </button>
                <Menu />
            </div>
        </div>
    {:else}
        <div class="flex items-center justify-start px-4 gap-6">
            <button on:click={handleBack}>
                <BackArrow />
            </button>
            <h1>{pageTitle}</h1>
        </div>
    {/if}
</header>