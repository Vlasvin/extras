import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";

import SocialMediaIcons from "components/Footer/FooterComponents/SocialMediaIcons";
import { footerStyles } from "./FooterStyles";

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
        ...footerStyles.box,
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
          ...footerStyles.contentContainer,
          ...(isMobile && { order: 1 }),
          marginTop: isMobile ? 2 : 0,
        }}
      >
        <Grid
          container
          spacing={0.1}
          sx={{ ...footerStyles.linkGrid, maxWidth: isMobile ? 400 : 550 }}
        >
          {linkItems.map((item, index) => (
            <Grid item xs={isMobile ? 6 : 4} key={index}>
              <Button
                color={"inherit"}
                component={Link}
                to={item.link}
                sx={footerStyles.button}
              >
                {item.label}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            ...footerStyles.socialMediaBox,
            paddingLeft: isMobile ? "14px" : "28px",
            maxWidth: isMobile ? 300 : 500,
          }}
        >
          <SocialMediaIcons />
        </Box>
        <Typography variant="body2" color="#ddd">
          {t("developed_by")}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
