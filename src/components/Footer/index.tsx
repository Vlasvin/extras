import { Link } from "react-router-dom";
import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import SocialMediaIcons from "./SocialMediaIcons";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 900px)");

  const linkItems = [
    { label: t("visa to usa"), link: "/visas/usa" },
    { label: t("visa to canada"), link: "/visas/canada" },
    { label: t("visa to australia"), link: "/visas/australia" },
    { label: t("translations"), link: "/translations" },
    { label: t("services"), link: "/services" },
    { label: t("about us"), link: "/about-us" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "rgb(56, 54, 56)",
        padding: 4,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <Box sx={{ maxWidth: "150px", order: isMobile ? -1 : 0 }}>
        <Link to="/">
          <img
            src="https://extras.com.ua/wp-content/themes/slick-red/images/red/logo.gif"
            alt="Company logo"
            style={{ height: 70, marginRight: 30 }}
          />
        </Link>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          order: isMobile ? 1 : undefined,
          marginTop: isMobile ? 2 : 0,
        }}
      >
        <Grid
          container
          spacing={0.1}
          sx={{
            alignItems: "center",
            maxWidth: isMobile ? 400 : 500,
            marginBottom: 4,
          }}
        >
          {linkItems.map((item, index) => (
            <Grid item xs={isMobile ? 6 : 4} key={index}>
              <Button
                color={"inherit"}
                component={Link}
                to={item.link}
                sx={{
                  color: "#FFFFFF",
                  textTransform: "none",
                  fontSize: 18,
                  textAlign: "left",
                }}
              >
                {item.label}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            marginTop: 2,
            borderBottom: "1px solid #ddd",
            paddingBottom: 2,
          }}
        >
          <SocialMediaIcons />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
