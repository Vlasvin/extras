import { Link } from "react-router-dom";
import { Box, Button, Grid, Stack } from "@mui/material";
import SocialMediaIcons from "./SocialMediaIcons";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const linkItems = [
    { label: t("visa to usa"), link: "/visas/america" },
    { label: t("visa to canada"), link: "/visas/canada" },
    { label: t("visa to australia"), link: "/visas/australia" },
    { label: t("translations"), link: "/translations" },
    { label: t("services"), link: "/services" },
    { label: t("about us"), link: "/about-us" },
  ];

  return (
    <Box sx={{ backgroundColor: "rgb(56, 54, 56)" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box sx={{ maxWidth: "150px" }}>
          <Link to="/">
            <img
              src="https://extras.com.ua/wp-content/themes/slick-red/images/red/logo.gif"
              alt="Company logo"
              style={{ height: 70, marginRight: 30 }}
            />
          </Link>
        </Box>
        <Grid
          container
          spacing={0.2}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          {linkItems.map((item, index) => (
            <Grid item xs={4} key={index}>
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
      </Box>

      <Stack direction="row" justifyContent="center" alignItems="center">
        <Box
          sx={{
            borderBottom: "1px solid #ddd",
            marginBottom: 4,
          }}
        >
          <SocialMediaIcons />
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
