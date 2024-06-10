import type { OverlayScrollbarsComponentProps } from "overlayscrollbars-vue";

export const defaultOverlayscrollbarsOptions: OverlayScrollbarsComponentProps["options"] = {
    overflow: {
        x: "hidden",
    },
    scrollbars: {
        autoHide: "move",
        clickScroll: true,
    },
};
