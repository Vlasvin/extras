import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Title, aboutUsStyles } from "../AboutUsStyles";
import AboutUsImg from "assets/pictures/jpg/mudrenok.jpg";

const HeaderSection = () => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Title>{t("aboutUs.title")}</Title>
        <Typography
          variant="body1"
          style={{
            ...aboutUsStyles.content,
            fontSize: "clamp(20px,5.55vw,28px)",
            marginBottom: 48,
          }}
        >
          {t("aboutUs.company_desc")}
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <img
            src={AboutUsImg}
            alt="About Us"
            style={aboutUsStyles.headerImg}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeaderSection;
