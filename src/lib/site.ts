import cursorIcon from '$lib/assets/cursor.jpg';
import ghosttyIcon from '$lib/assets/ghostty.svg';
import arcIcon from '$lib/assets/arc.png';
import wisprFlowIcon from '$lib/assets/wisprflow.png';
import vercelIcon from '$lib/assets/vercel.png';
import supabaseIcon from '$lib/assets/supabase.jpg';
import firebaseIcon from '$lib/assets/firebase.png';
import posthogIcon from '$lib/assets/posthog.jpg';
import swiftIcon from '$lib/assets/swift.jpg';
import reactIcon from '$lib/assets/react.png';
import nestjsIcon from '$lib/assets/nestjs.png';
import mongodbIcon from '$lib/assets/mongodb.png';

export type AppShowcase = {
	id: 'app1' | 'app2' | 'app3';
	href: string;
	tooltip: string;
	alt: string;
};

export type SocialImageLink = {
	id: string;
	href: string;
	tooltip: string;
	alt: string;
	/** Remote URL or path; local assets are wired in +page imports if you prefer */
	iconUrl: string;
};

export type FooterCta = {
	lead: string;
	href: string;
	linkLabel: string;
};

/** One indented row under a tool (icon + gray text, optional code chip or inline link). */
export type ToolDetailLine =
	| { type: 'text'; text: string }
	| { type: 'discount'; before: string; code: string; after: string }
	| { type: 'link'; before: string; linkText: string; href: string; after: string };

export type ToolItem = {
	name: string;
	href: string;
	/** Defaults to shared placeholder in ToolRow (e.g. Instagram) when omitted */
	iconUrl?: string;
	details: ToolDetailLine[];
};

export type ToolSection = {
	sectionTitle: string;
	items: ToolItem[];
};

export const site = {
	name: 'Ruaridh Bell',
	siteUrl: 'https://ruaridhbell.com',
	seo: {
		title: 'Ruaridh Bell',
		description: 'Developer portfolio — projects, tools, and contact.'
	},
	toolsPage: {
		title: 'Tools I use',
		intro: 'Here are the tools and services I use to build my apps and power them :)'
	},
	avatarAlt: 'Portrait of Ruaridh Bell',
	heroTagline: 'I build productivity apps',
	apps: [
		{
			id: 'app1',
			href: 'https://ruaridhbell.com',
			tooltip: 'Ping — a notification api app',
			alt: 'Ping'
		},
		{
			id: 'app2',
			href: 'https://testflight.apple.com/join/zmXesa5k',
			tooltip: 'Muscle Memory — A workout tracker app',
			alt: 'Muscle Memory'
		},
		{
			id: 'app3',
			href: 'https://apps.apple.com/gb/app/my-pocket-garage/id6447470205',
			tooltip: 'My Pocket Garage — A garage management app',
			alt: 'My Pocket Garage'
		}
	] satisfies AppShowcase[],
	youtube: {
		href: 'https://www.youtube.com/',
		tooltip: '@yourhandle',
		alt: 'YouTube',
		/** Square logo; replace with your channel art if you like */
		iconUrl: 'https://cdn.simpleicons.org/youtube/FF0000'
	},
	youtubeLead: 'and make youtube videos about building',
	studio: {
		badge: {
			href: 'https://www.usertesting.com/sites/default/files/usertestingv3/styles/medium/public/2023-07/Resource%20placeholder%20image.jpg.webp?itok=Vu6yhtaF',
			tooltip: 'click here to learn more about my company',
			alt: 'User Testing'
		},
		lineStudio: 'I work at a software company called',
		lineHelp: {
			before: 'Check out my github for more of my projects ',
			linkText: 'here',
			linkHref: 'https://github.com/zondaf12',
			after: ' :)'
		}
	},
	socialIntro: 'I also post regularly on these platforms',
	socials: [
		{
			id: 'twitter',
			href: 'https://x.com/ruaridhbell',
			tooltip: '@ruaridhbell',
			alt: 'X',
			iconUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg'
		},
		{
			id: 'instagram',
			href: 'https://www.instagram.com/ruaridh_bell',
			tooltip: '@ruaridh_bell',
			alt: 'Instagram',
			iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg'
		},
		{
			id: 'linkedin',
			href: 'https://www.linkedin.com/in/ruaridh-bell',
			tooltip: 'Ruaridh Bell',
			alt: 'LinkedIn',
			iconUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s'
		}
	] satisfies SocialImageLink[],
	stackCta: {
		lead: 'Curious about my tech stack? ',
		href: '/tools',
		linkLabel: 'Click here.'
	},
	footerCtas: [
		{
			lead: 'Need dev/design help for your company? ',
			href: 'mailto:ruaridhbell73@googlemail.com',
			linkLabel: 'Click here.'
		},
		{
			lead: 'Want to say hi? ',
			href: 'mailto:ruaridhbell73@googlemail.com',
			linkLabel: 'Click here.'
		}
	] satisfies FooterCta[],
	toolSections: [
		{
			sectionTitle: 'Things that power my life',
			items: [
				{
					name: 'Cursor',
					href: 'https://cursor.com',
					details: [{ type: 'text', text: 'What I use for code editing.' }],
					iconUrl: cursorIcon
				},
				{
					name: 'Ghostty',
					href: 'https://ghostty.org',
					details: [{ type: 'text', text: 'The terminal i use for all my commands.' }],
					iconUrl: ghosttyIcon
				},
				{
					name: 'Arc',
					href: 'https://arc.net',
					details: [{ type: 'text', text: 'The browser i use for all my browsing.' }],
					iconUrl: arcIcon
				},
				{
					name: 'Wispr Flow	',
					href: 'https://wisprflow.com',
					details: [{ type: 'text', text: 'The dictation tool that I use every 40 seconds' }],
					iconUrl: wisprFlowIcon
				}
			]
		},
		{
			sectionTitle: 'Things that power my apps',
			items: [
				{
					name: 'Vercel',
					href: 'https://vercel.com',
					details: [{ type: 'text', text: 'The service I use to host frontend websites.' }],
					iconUrl: vercelIcon
				},
				{
					name: 'Supabase',
					href: 'https://supabase.com',
					details: [{ type: 'text', text: 'The backend I use.' }],
					iconUrl: supabaseIcon
				},
				{
					name: 'Firebase',
					href: 'https://firebase.google.com',
					details: [{ type: 'text', text: 'Another backend I use.' }],
					iconUrl: firebaseIcon
				},
				{
					name: 'NestJS',
					href: 'https://nestjs.com',
					details: [{ type: 'text', text: 'Another Backend Framework I use.' }],
					iconUrl: nestjsIcon
				},
				{
					name: 'MongoDB',
					href: 'https://mongodb.com',
					details: [{ type: 'text', text: 'The database I use for backend development' }],
					iconUrl: mongodbIcon
				},
				{
					name: 'Posthog',
					href: 'https://posthog.com',
					details: [{ type: 'text', text: 'The analytics tool I use.' }],
					iconUrl: posthogIcon
				},
				{
					name: 'Swift',
					href: 'https://posthog.com',
					details: [{ type: 'text', text: 'The framework I use for iOS apps' }],
					iconUrl: swiftIcon
				},
				{
					name: 'React',
					href: 'https://react.dev',
					details: [{ type: 'text', text: 'The framework I use for web development' }],
					iconUrl: reactIcon
				}
			]
		}
	] satisfies ToolSection[]
} as const;
