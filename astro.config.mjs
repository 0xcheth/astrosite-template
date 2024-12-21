// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { Yourweblink } from './socials-config.js';


import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: {Yourweblink},
	integrations: [mdx(), sitemap()],
	base: '/', // For root-level deployment
	
});



