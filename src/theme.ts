import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  global: (props: any) => ({
    root: {
      bg: props.colorMode === "light" ? "red.100" : "blue.200",
    },
  }),
  colors: {
    main: {
      1: "#7400b8ff",
      2: "#5e60ceff",
      3: "#4ea8deff",
      4: "#56cfe1ff",
      5: "#72efddff",
    },
  },
});

export default theme;
