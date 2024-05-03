export const aboutUsStyles = {
  root: {
    marginTop: 70,
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
    marginBottom: 20,
  },
  content: {
    lineHeight: 1.6,
  },
  section: {
    marginBottom: 20,
    animation: `fadeIn 1s ease-in-out forwards`,
  },
  "@keyframes fadeIn": {
    from: {
      opacity: 0,
      transform: "translateY(20px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  serviceItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 16,
    padding: 18,
    height: "340px",
  },
  serviceIcon: {
    marginRight: 16,
    marginBottom: 8,
  },
  serviceTitle: {
    fontWeight: "bold",
    paddingLeft: "22px",
  },
  serviceDescription: {
    margin: "16px 22px",
  },

  h1: {
    fontFamily: "Nunito",
    fontSize: "64px",
    fontWeight: 800,
    lineHeight: "87px",
    letterSpacing: "1%",
  },
  li: {
    fontFamily: "Quicksand, sans-serif",
    fontSize: 20,
    fontWeightRegular: 400,
  },
};
