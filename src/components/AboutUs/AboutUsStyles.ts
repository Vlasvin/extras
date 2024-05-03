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
    background: "transparent",
    marginBottom: 20,
    borderRadius: 20,
    boxShadow: "0px 8px 24px 0px rgba(0, 0, 0, 0.05)",
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
    borderRadius: 24,
    padding: 18,
    height: "340px",
  },
  serviceIcon: {
    marginTop: "8px",
    marginBottom: "24px",
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
