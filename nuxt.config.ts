export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        rootId: "__app",
    },
    typescript: {
        typeCheck: "build",
        tsConfig: {
            compilerOptions: {
                noErrorTruncation: true,
            },
        },
    },
    modules: ["@nuxt/eslint"],
    eslint: {
        config: {
            standalone: false,
        },
    },
});
