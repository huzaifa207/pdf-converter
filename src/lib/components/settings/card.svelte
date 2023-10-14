<script>
    import Crown from "$lib/svgs/crown.svelte"

    export let data;
</script>

<div class="flex items-center gap-4">
    <div class="p-2 bg-white rounded-xl shadow-xl">
        <Crown />
    </div>
    <p>{data.text}</p>
</div>