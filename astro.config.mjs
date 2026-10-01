// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://kevinsheedy.github.io',
	base: '/logic-choir-workflow',
	integrations: [
		starlight({
			title: 'Ascolta Audio Workflow',
			description: 'Recording and editing live a cappella concerts with a Zoom H5essential and Logic Pro.',
			lastUpdated: true,
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/KevinSheedy/logic-choir-workflow' },
			],
			sidebar: [
				{ label: 'Start here', items: [{ label: 'Overview', slug: '' }, 'how-to-use-this-site'] },
				{ label: '1. Recording', items: [{ autogenerate: { directory: 'recording' } }] },
				{ label: '2. Ingest', items: [{ autogenerate: { directory: 'ingest' } }] },
				{ label: '3. Editing', items: [{ autogenerate: { directory: 'editing' } }] },
				{ label: '4. Clean-up', items: [{ autogenerate: { directory: 'cleanup' } }] },
				{ label: '5. Tone & balance', items: [{ autogenerate: { directory: 'tone' } }] },
				{ label: '6. Reverb', items: [{ autogenerate: { directory: 'reverb' } }] },
				{ label: '7. Loudness & export', items: [{ autogenerate: { directory: 'export' } }] },
				{ label: 'Concert log', items: [{ autogenerate: { directory: 'concerts' } }] },
				{ label: 'Reference', items: [{ autogenerate: { directory: 'reference' } }] },
			],
		}),
	],
});
