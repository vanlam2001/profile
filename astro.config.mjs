import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://cv.nguyenvanlam.online/",
    integrations: [
        tailwind(),
    ],
    vite: {
        ssr: {
            external: ["svgo"],
        },
    },
});
