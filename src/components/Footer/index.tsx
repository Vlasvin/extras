import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";

import SocialMediaIcons from "components/Footer/FooterComponents/SocialMediaIcons";

import USAIcon from "assets/pictures/svg/usa-map.svg";
import CanadaIcon from "assets/pictures/svg/canada.svg";
import AustraliaIcon from "assets/pictures/svg/australia.svg";
import DocIcon from "assets/pictures/svg/DocIcon";
import ServicesIcon from "assets/pictures/svg/ServicesIcon";
import TranslationIcon from "assets/pictures/svg/TranslationIcon";
import { footerStyles } from "./FooterStyles";

const Footer = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 900px)");

  const iconSize = 20;

  const linkItems = [
    {
      label: t("visa to canada"),
      link: "/visas/canada",
      icon: <img src={CanadaIcon} alt="Canada Icon" width="24" height="24" />,
    },
    {
      label: t("visa to australia"),
      link: "/visas/australia",
      icon: (
        <img src={AustraliaIcon} alt="Australia Icon" width="24" height="24" />
      ),
    },
    {
      label: t("visa to usa"),
      link: "/visas/usa",
      icon: <img src={USAIcon} alt="USA Icon" width="24" height="24" />,
    },
    {
      label: t("translations"),
      link: "/translations",
      icon: <TranslationIcon fill="#FFFFFF" size={24} />,
    },
    {
      label: t("services"),
      link: "/services",
      icon: <DocIcon fill="#FFFFFF" size={iconSize} />,
    },
    {
      label: t("about us"),
      link: "/about-us",
      icon: <ServicesIcon fill="#FFFFFF" size={iconSize} />,
    },
  ];

  return (
    <Box
      sx={{
        ...footerStyles.box,
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      {!isMobile && (
        <Box sx={{ maxWidth: "150px" }}>
          <Link to="/">
            <img
              src="https://extras.com.ua/wp-content/themes/slick-red/images/red/logo.gif"
              alt="Company logo"
              title="Logo"
              style={{ height: 70, marginRight: 30 }}
            />
          </Link>
        </Box>
      )}
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
          sx={{ ...footerStyles.linkGrid, maxWidth: isMobile ? 420 : 800 }}
        >
          {linkItems.map((item, index) => (
            <Grid
              item
              xs={isMobile ? 6 : 4}
              key={index}
              sx={{ width: "100px !important" }}
            >
              <Button
                color={"inherit"}
                component={Link}
                to={item.link}
                sx={{ ...footerStyles.button, fontSize: isMobile ? 16 : 18 }}
              >
                {item.icon}
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
        <Typography variant="body2" sx={footerStyles.developedBox}>
          {t("developed_by")}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
