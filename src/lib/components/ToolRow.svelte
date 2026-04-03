<script lang="ts">
	import CornerDownRight from '@lucide/svelte/icons/corner-down-right';
	import type { ToolDetailLine, ToolItem } from '$lib/site';
	import defaultIcon from '$lib/assets/Instagram_logo.svg';

	let { item }: { item: ToolItem } = $props();

	const iconSrc = $derived(item.iconUrl ?? defaultIcon);

	function lineKey(d: ToolDetailLine, i: number): string {
		if (d.type === 'text') return `t-${i}-${d.text.slice(0, 24)}`;
		if (d.type === 'discount') return `d-${i}-${d.code}`;
		return `l-${i}-${d.href}`;
	}
</script>

<li class="flex flex-col gap-2">
	<div class="flex items-center gap-3">
		<img
			src={iconSrc}
			alt={item.name}
			width="32"
			height="32"
			class="h-8 w-8 shrink-0 rounded-lg object-contain"
		/>
		<span class="text-xl">
			<a
				href={item.href}
				class="font-light text-blue-600 no-underline transition-colors hover:text-purple-600"
				target="_blank"
				rel="noopener noreferrer">{item.name}</a
			>
		</span>
	</div>

	{#each item.details as detail, di (lineKey(detail, di))}
		<div class="ml-11 flex items-center gap-2">
			<CornerDownRight class="h-4 w-4 shrink-0 text-gray-300" strokeWidth={2} aria-hidden="true" />
			{#if detail.type === 'text'}
				<span class="text-sm text-gray-600">{detail.text}</span>
			{:else if detail.type === 'discount'}
				<span class="text-sm text-gray-600">
					{detail.before}<button
						type="button"
						class="cursor-pointer rounded border border-gray-200 bg-gray-100 px-2 py-1 font-mono text-xs text-gray-800 transition-colors hover:bg-gray-200"
						>{detail.code}</button
					>{detail.after}
				</span>
			{:else}
				<span class="text-sm text-gray-600">
					{detail.before}<a
						href={detail.href}
						class="font-light text-blue-600 underline transition-colors hover:text-purple-600"
						target="_blank"
						rel="noopener noreferrer">{detail.linkText}</a
					>{detail.after}
				</span>
			{/if}
		</div>
	{/each}
</li>
