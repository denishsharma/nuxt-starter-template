import { createResolver, defineNuxtModule } from "nuxt/kit";

export default defineNuxtModule({
    meta: {
        name: "load-components",
    },
    setup: (_, nuxt) => {
        const { resolve } = createResolver(import.meta.url);

        nuxt.hook("components:dirs", (dirs) => {
            dirs.push({
                path: resolve("../fragments/"),
                extensions: ["vue"],
                pattern: "**/*.fragment.vue",
            });

            dirs.push({
                path: resolve("../features/"),
                extensions: ["vue"],
                pattern: "**/*.feature.vue",
            });
        });
    },
});
