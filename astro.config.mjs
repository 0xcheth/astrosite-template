// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { Yourweblink } from './config.js';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: Yourweblink.SiteURL,
	integrations: [mdx(), sitemap()],
	base: '/subpath/', // For root-level deployment

});



