import { style, styleVariants } from "@vanilla-extract/css";

const baseStyle = style({
  position: "fixed",
  padding: "0.5rem 0",
  backdropFilter: "blur(0.25rem)",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  overscrollBehaviorY: "contain",
  transition: "visibility 0.2s, opacity 0.2s",
});

export const headerStyle = styleVariants({
  hidden: [
    baseStyle,
    {
      visibility: "hidden",
      opacity: 0,
    },
  ],
  visible: [
    baseStyle,
    {
      visibility: "visible",
      opacity: 1,
    },
  ],
});
