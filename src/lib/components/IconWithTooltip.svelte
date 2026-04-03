<script lang="ts">
	let {
		href,
		src,
		alt,
		tooltip,
		imgClass = ''
	}: {
		href: string;
		src: string;
		alt: string;
		tooltip: string;
		imgClass?: string;
	} = $props();
</script>

<a
	{href}
	class="group relative inline-flex shrink-0 align-middle no-underline hover:no-underline"
	target="_blank"
	rel="noopener noreferrer"
>
	<img
		{src}
		{alt}
		class="h-10 w-10 cursor-pointer rounded-xl object-contain shadow-sm transition-all duration-200 {imgClass}"
	/>
	<span
		class="pointer-events-none absolute -top-8 left-1/2 z-50 hidden -translate-x-1/2 rounded-xl bg-black/80 px-2.5 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 sm:block"
		role="tooltip">{tooltip}</span
	>
</a>
