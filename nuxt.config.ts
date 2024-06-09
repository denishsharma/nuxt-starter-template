export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        rootId: "__app",
        head: {
            title: "Nuxt Starter Template by Denish Sharma",
        },
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
    ],
    eslint: {
        config: {
            standalone: false,
        },
    },
});
