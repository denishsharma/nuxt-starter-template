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
        "@nuxtjs/color-mode",
        "nuxt-icon",
        "nuxt-svgo",
        "@vueuse/nuxt",
        "@nuxt/scripts",
        "nuxt-lodash",
        "nuxt-typed-router",
        "@pinia/nuxt",
        "@pinia-plugin-persistedstate/nuxt",
        "nuxt-api-party",
    ],
    seo: {
        debug: isDevelopment,
    },
    colorMode: {
        classSuffix: "",
        globalName: "__APP_COLOR_MODE__",
        storageKey: "app-color-mode",
        hid: "app-color-mode-script",
    },
    svgo: {
        autoImportPath: "~/assets",
    },
    piniaPersistedstate: {
        debug: isDevelopment,
        cookieOptions: {
            secure: !isDevelopment,
        },
    },
    eslint: {
        config: {
            standalone: false,
        },
    },
});
