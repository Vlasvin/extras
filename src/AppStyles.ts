import styled from "@emotion/styled";

export const AppContainer = styled("div")({
  margin: "70px 25px",
  "@media (min-width: 900px)": {
    margin: "100px 100px",
  },
});

export const appStyles = {
  boxHeader: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 500,
  },
  boxFooter: { position: "relative", bottom: 0, width: "100%" },
};
