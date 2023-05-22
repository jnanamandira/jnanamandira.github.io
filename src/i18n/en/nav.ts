/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [
	// Learn Tab, use type as 'learn'
	{ text: 'Start Here', header: true, type: 'learn', key: 'startHere' },
	{ text: 'Introduction', slug: 'start-here/introduction', key: 'introduction' },
	{ text: 'Roadmap', slug: 'start-here/roadmap', key: 'roadmap' },


	// Industry Tab, use type as 'api'
	{ text: 'Industry', header: true, type: 'api', key: 'industry' },
] as const;
