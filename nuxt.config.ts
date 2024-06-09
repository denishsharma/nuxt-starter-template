import { isDevelopment } from "std-env";

export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        rootId: "__app",
    },
    site: {
        name: "Nuxt Starter Template",
        description: "Nuxt 3 minimal starter template wih Vue 3, TypeScript, Unocss, SEO and more. Made by Denish Sharma",
    },
    typescript: {
        typeCheck: "build",
        tsConfig: {
            compilerOptions: {
                noErrorTruncation: true,
            },
        },
    },
    css: ["~/assets/styles/global.scss"],
    modules: [
        "@nuxt/eslint",
        "@unocss/nuxt",
        "@nuxt/fonts",
        "@nuxtjs/seo",
    ],
    seo: {
        debug: isDevelopment,
    },
    eslint: {
        config: {
            standalone: false,
        },
    },
});
