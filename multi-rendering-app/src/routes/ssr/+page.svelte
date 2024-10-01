<script lang="ts">
	import { onMount } from 'svelte';

	export let data;
	console.log('data on init', data);
	onMount(() => {
		console.log('data on mount', data);
	});
</script>

<div>
	<p>This is SSR page {JSON.stringify(data)}</p>
</div>
