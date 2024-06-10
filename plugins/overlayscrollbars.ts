import { ClickScrollPlugin, OverlayScrollbars } from "overlayscrollbars";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook("app:beforeMount", () => {
        OverlayScrollbars.plugin([ClickScrollPlugin]);
    });
});
