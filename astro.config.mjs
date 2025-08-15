// // @ts-check
// import { defineConfig } from 'astro/config';

// import tailwindcss from '@tailwindcss/vite';

// // https://astro.build/config
// export default defineConfig({
//   vite: {
//     plugins: [tailwindcss()]
//   }
// });

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  //base: '/portafolio-rs/',
});


// import { defineConfig } from 'astro/config';
// import tailwind from '@astrojs/tailwind';
// import github from '@astrojs/github-pages';

// export default defineConfig({
//   integrations: [tailwind()],
//   output: 'static',
//   adapter: github(),
//   base: '/portafolio-rs/', // Cambia esto por el nombre de tu repo si no es la raíz
// });