<script>
	import {page} from "$app/stores";

	import BottomNavItems from './bottom_nav_items.svelte';
    import {bottomNav} from "$lib/store.js"
	
	$: active_page = $page.url.pathname
</script>

<footer
	class="fixed bottom-0 left-0 right-0 shadow-inner justify-around gap-2 py-1 px-2"
>
	<BottomNavItems data={{ title: 'Home', icon: 'home', id:0 }} focused={$bottomNav === 0} class_={active_page === '/' && 'selected'}/>
	<BottomNavItems data={{ title: 'Converted Files', icon: 'converted', id:1 }} focused={$bottomNav === 1} class_={active_page === '/converted' && 'selected'}/>
	<BottomNavItems data={{ title: 'Scanner', icon: 'scanner', id:2 }} focused={$bottomNav === 2} class_={active_page === '/scanner' && 'selected'}/>
</footer>

