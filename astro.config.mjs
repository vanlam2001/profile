import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://vanlam2001.github.io/",
    base: 'my-repo',
    integrations: [
        tailwind(),
    ],
    vite: {
        ssr: {
            external: ["svgo"],
        },
    },
});
