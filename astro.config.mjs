// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { Yourweblink } from './config.js';

import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: Yourweblink.SiteURL,
	integrations: [mdx(), sitemap(), react()],
	base: '/', // For root-level deployment

});



