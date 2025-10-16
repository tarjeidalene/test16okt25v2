import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({

  integrations: [db()],
  output: 'server',
  adapter: netlify()
  
});