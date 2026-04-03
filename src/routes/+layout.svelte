<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { site } from '$lib/site';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:locale" content="en_GB" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

{@render children()}
