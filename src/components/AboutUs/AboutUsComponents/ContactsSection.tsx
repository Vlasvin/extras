import React from "react";
import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { aboutUsStyles } from "../AboutUsStyles";

const ContactsSection = () => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={2} style={{ marginBottom: "48px" }}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" style={aboutUsStyles.h6}>
          {t("aboutUs.props")}
        </Typography>
        <Typography variant="body1" style={aboutUsStyles.content}>
          {t("aboutUs.iban")}: UA433052990000026009033605744
          <br /> {t("aboutUs.receiver")}: {t("aboutUs.receiver_name")}
          <br /> {t("aboutUs.edrpou")}: 3087023062
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" style={aboutUsStyles.h6}>
          {t("aboutUs.contacts")}
        </Typography>
        <Typography
          variant="body1"
          style={{
            ...aboutUsStyles.content,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <a
            href="tel:+380442345678"
            style={{ color: "#1976d2", textDecoration: "none" }}
          >
            {t("aboutUs.phone")}: +380632715551
          </a>
          <br />
          <a
            href="mailto:info@extras.com.ua"
            style={{ color: "#1976d2", textDecoration: "none" }}
          >
            {t("aboutUs.email")}: info@extras.com.ua
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ContactsSection;
