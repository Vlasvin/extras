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
    height: "400px",
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
    fontFamily: " GT America LC Compressed",
    fontSize: 54,
    fontWeight: 800,
    lineHeight: 1.25,
    letterSpacing: ".01em",
    marginBottom: 48,
  },
  li: {
    fontFamily: "Quicksand, sans-serif",
    fontSize: 20,
    fontWeightRegular: 400,
  },

  boxWhyUs: { marginBottom: 8 },

  h2: {
    margin: "48px 0",
    fontSize: 54,
    lineHeight: 1.25,
    fontFamily: " GT America LC Compressed",
    fontWeight: 800,
    letterSpacing: ".01em",
  },
  titleWhyUs: {
    fontSize: 42,
    lineHeight: 1.08,
    fontFamily: " GT America LC Compressed",
    fontWeight: 500,
    letterSpacing: ".01em",
    marginLeft: 24,
  },
};
