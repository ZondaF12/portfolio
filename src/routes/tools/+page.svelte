<script lang="ts">
	import avatar from '$lib/assets/avatar.jpg';
	import ToolRow from '$lib/components/ToolRow.svelte';
	import { resolveAppPath } from '$lib/resolve-app-path';
	import { site } from '$lib/site';

	const pageTitle = `${site.name} — ${site.toolsPage.title}`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={site.toolsPage.intro} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={site.toolsPage.intro} />
	<meta property="og:url" content={`${site.siteUrl}/tools`} />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={site.toolsPage.intro} />
</svelte:head>

<div class="ruaridh-tools mt-0 flex w-full flex-col items-center bg-white p-8 pt-10 sm:mt-20">
	<div class="flex w-full max-w-175 flex-row items-center justify-center gap-20">
		<div class="flex w-full flex-col items-start gap-6">
			<a href={resolveAppPath('/')} class="text-back mb-4 text-lg">&larr; Back to home</a>

			<div class="mb-8 flex w-full justify-start">
				<img
					src={avatar}
					alt={site.avatarAlt}
					width="64"
					height="64"
					class="h-16 w-16 rounded-full object-cover"
				/>
			</div>

			<div class="flex w-full flex-col items-start gap-4 text-2xl font-light text-gray-800">
				<div class="mb-10 w-full">
					<p class="m-0">{site.toolsPage.intro}</p>
				</div>

				{#each site.toolSections as section, si (section.sectionTitle)}
					<div class="w-full" class:mt-8={si > 0}>
						<h2 class="mb-6 text-2xl font-light text-gray-800">{section.sectionTitle}</h2>
						<ul class="m-0 flex list-none flex-col gap-6 p-0 text-xl">
							{#each section.items as item, ii (`${si}-${ii}-${item.href}`)}
								<ToolRow {item} />
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
