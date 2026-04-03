import { resolve } from '$app/paths';

/** Wraps SvelteKit `resolve()` for in-app paths; add cases when you add routes. */
export function resolveAppPath(href: string): string {
	switch (href) {
		case '/':
			return resolve('/');
		case '/tools':
			return resolve('/tools');
		default:
			return href;
	}
}
