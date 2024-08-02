import { addComponentsDir, addImportsDir, addPlugin, createResolver, defineNuxtModule } from "nuxt/kit";

export default defineNuxtModule({
    meta: {
        name: "app-core-module",
    },
    setup: async () => {
        const { resolve } = createResolver(import.meta.url);

        await addComponentsDir({
            path: resolve("../../app/fragments/"),
            extensions: ["vue"],
            pattern: "**/*.fragment.vue",
        });

        await addComponentsDir({
            path: resolve("../../app/features/"),
            extensions: ["vue"],
            pattern: "**/*.feature.vue",
        });

        addImportsDir([
            resolve("./composables"),
            resolve("./utils"),
        ]);
        await addComponentsDir({
            path: resolve("./components"),
            extensions: ["vue"],
        });

        addPlugin(resolve("./plugins/overlayscrollbars.ts"));
    },
});
