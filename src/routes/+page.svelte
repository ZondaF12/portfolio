<script lang="ts">
	import appOne from '$lib/assets/ping.png';
	import appTwo from '$lib/assets/muscle_memory.png';
	import appThree from '$lib/assets/my_pocket_garage.png';
	import avatar from '$lib/assets/avatar.jpg';
	import studioImg from '$lib/assets/usertesting.jpg';
	import IconWithTooltip from '$lib/components/IconWithTooltip.svelte';
	import { resolveAppPath } from '$lib/resolve-app-path';
	import { site } from '$lib/site';

	const appIcons = { app1: appOne, app2: appTwo, app3: appThree } as const;

	const appRotations = [
		'sm:-rotate-6 sm:group-hover/appsrow:rotate-0 sm:group-hover/appsrow:translate-x-0 sm:translate-x-2',
		'sm:rotate-3 sm:group-hover/appsrow:rotate-0 sm:group-hover/appsrow:translate-x-2',
		'sm:-rotate-6 sm:group-hover/appsrow:rotate-0 sm:group-hover/appsrow:translate-x-4 sm:-translate-x-4'
	];

	const socialRotations = [
		'sm:-rotate-6 sm:group-hover/socialrow:rotate-0 sm:group-hover/socialrow:translate-x-0 sm:translate-x-2',
		'sm:rotate-3 sm:group-hover/socialrow:rotate-0 sm:group-hover/socialrow:translate-x-2',
		'sm:-rotate-6 sm:group-hover/socialrow:rotate-0 sm:group-hover/socialrow:translate-x-4 sm:-translate-x-4',
		'sm:rotate-6 sm:group-hover/socialrow:rotate-0 sm:group-hover/socialrow:translate-x-6 sm:-translate-x-6'
	];
</script>

<svelte:head>
	<title>{site.seo.title}</title>
	<meta name="description" content={site.seo.description} />
	<meta property="og:title" content={site.seo.title} />
	<meta property="og:description" content={site.seo.description} />
	<meta property="og:url" content={site.siteUrl} />
	<meta name="twitter:title" content={site.seo.title} />
	<meta name="twitter:description" content={site.seo.description} />
</svelte:head>

<div class="ruaridh-home mt-0 flex w-full flex-col items-center bg-white p-8 pt-10 sm:mt-20">
	<div class="flex max-w-2xl flex-col items-start gap-6">
		<div class="flex flex-col gap-4 text-2xl font-light text-gray-800">
			<span class="mb-10 flex flex-col items-start gap-2 sm:flex-row sm:items-center">
				Hi, my name is {site.name}
				<img
					src={avatar}
					alt={site.avatarAlt}
					width="40"
					height="40"
					class="h-10 w-10 shrink-0 rounded-full object-cover"
				/>
			</span>

			<span
				class="group/appsrow relative inline-flex flex-col items-start gap-2 sm:flex-row sm:items-center"
			>
				<span>{site.heroTagline}</span>
				<span class="relative inline-flex flex-wrap items-center gap-2 sm:gap-0">
					{#each site.apps as app, i (app.id)}
						<IconWithTooltip
							href={app.href}
							src={appIcons[app.id]}
							alt={app.alt}
							tooltip={app.tooltip}
							imgClass={appRotations[i] ?? ''}
						/>
					{/each}
				</span>
			</span>

			<span class="mt-8 inline-flex flex-col items-start gap-2 sm:flex-row sm:items-center">
				<span>
					{site.studio.lineStudio}
					<IconWithTooltip
						href={site.studio.badge.href}
						src={studioImg}
						alt={site.studio.badge.alt}
						tooltip={site.studio.badge.tooltip}
						imgClass="ml-2 h-10 w-auto max-w-[140px] rounded-lg border border-gray-200 object-contain px-1 py-1 shadow-sm transition-all sm:-rotate-3 sm:hover:rotate-0 hover:shadow-md"
					/>
				</span>
			</span>

			<span class="inline-flex flex-col items-start gap-2 sm:flex-row sm:items-center">
				<span>
					{site.studio.lineHelp.before}<a
						href={site.studio.lineHelp.linkHref}
						class="link-brand"
						target="_blank"
						rel="noopener noreferrer">{site.studio.lineHelp.linkText}</a
					>{site.studio.lineHelp.after}
				</span>
			</span>

			<span
				class="group/socialrow relative mt-10 inline-flex flex-col items-start gap-2 sm:flex-row sm:items-center"
			>
				<span>{site.socialIntro}</span>
				<span class="relative inline-flex flex-wrap items-center gap-2 sm:gap-0">
					{#each site.socials as s, i (s.id)}
						<IconWithTooltip
							href={s.href}
							src={s.iconUrl}
							alt={s.alt}
							tooltip={s.tooltip}
							imgClass={socialRotations[i % socialRotations.length] ?? ''}
						/>
					{/each}
				</span>
			</span>

			<span class="mt-8 inline-flex flex-col items-start gap-2 sm:flex-row sm:items-center">
				<span>
					{site.stackCta.lead}<a href={resolveAppPath(site.stackCta.href)} class="link-brand"
						>{site.stackCta.linkLabel}</a
					>
				</span>
			</span>

			<div class="my-10 w-full border-t border-dotted border-gray-300"></div>

			<span class="inline-flex flex-col items-start gap-2 text-lg">
				{#each site.footerCtas as cta, ci (ci)}
					<span>
						{cta.lead}<a
							href={cta.href}
							class="link-brand"
							target={cta.href.startsWith('http') ? '_blank' : undefined}
							rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
							>{cta.linkLabel}</a
						>
					</span>
				{/each}
			</span>
		</div>
	</div>
</div>
