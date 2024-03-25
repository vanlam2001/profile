import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://cv.nguyenvanlam.online/",
    base: 'profile',
    integrations: [
        tailwind(),
    ],
    vite: {
        ssr: {
            external: ["svgo"],
        },
    },
});
