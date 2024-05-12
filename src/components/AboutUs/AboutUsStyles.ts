export const aboutUsStyles = {
  root: { paddingRight: 0 },
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
    boxShadow: "0px 8px 24px 0px rgba(0, 0, 0, 0.2)",
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
    height: "390px",
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
    fontSize: "clamp(34px,5.55vw,54px)",
    fontWeight: 800,
    lineHeight: 1.25,
    letterSpacing: ".01em",
    marginBottom: 48,
  },
  li: {
    fontSize: "clamp(18px,4.375vw,20px)",
    fontFamily: "Montserrat, sans-serif",
    fontWeightRegular: 400,
  },

  boxWhyUs: { marginBottom: 8 },

  h2: {
    margin: "48px 0",
    fontSize: "clamp(34px,5.55vw,54px)",
    lineHeight: 1.25,
    fontWeight: 800,
    letterSpacing: ".01em",
  },
  h6: {
    fontSize: "clamp(24px,5.55vw,28px)",
    marginBottom: 10,
  },

  titleWhyUs: {
    fontSize: "clamp(26px,5.55vw,42px)",
    lineHeight: 1.08,
    fontWeight: 500,
    letterSpacing: ".01em",
    marginLeft: 24,
  },
};
