<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data : PageData;
</script>


{JSON.stringify(data.todo)}
