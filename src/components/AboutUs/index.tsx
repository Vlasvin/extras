import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Typography, Grid, Container, Paper, Box, Button } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

import AnimatedServiceItem from "./AboutUsComponents/ServiceItem";
import { GetSections } from "services/servicesData";
import useIconColor from "hooks/useIconColor";

import PassportIcon from "assets/pictures/svg/PassportIcon";
import TranslationIcon from "assets/pictures/svg/TranslationIcon";
import DocIcon from "assets/pictures/svg/DocIcon";
import CheckIcon from "assets/pictures/svg/CheckIcon";
import AboutUsImg from "assets/pictures/jpg/mudrenok.jpg";
import { aboutUsStyles } from "./AboutUsStyles";

interface Service {
  title: string;
  description?: string;
  points?: string[];
  icon: JSX.Element;
  size?: number;
}

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const [isSectionsLoaded, setIsSectionsLoaded] = useState(false);
  const sections = GetSections();
  const iconColor = useIconColor();

  useEffect(() => {
    setTimeout(() => setIsSectionsLoaded(true), 300);
  }, []);

  const iconSize = 80;

  const services: Service[] = [
    {
      title: t("aboutUs.bureau"),
      description: t("aboutUs.bureau_description"),
      icon: <TranslationIcon fill={iconColor} size={iconSize} />,
    },
    {
      title: t("aboutUs.visa_assistance"),
      points: [
        t("aboutUs.consultation"),
        t("aboutUs.document_preparation"),
        t("aboutUs.center_accompaniment"),
      ],
      icon: <PassportIcon fill={iconColor} size={iconSize} />,
    },
    {
      title: t("services"),
      points: [
        t("aboutUs.document_notarization"),
        t("aboutUs.apostille"),
        t("aboutUs.legalization"),
      ],
      icon: <DocIcon fill={useIconColor()} size={iconSize} />,
    },
  ];

  const springConfig = {
    delay: 2,
    duration: 2,
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  };

  const animation = useSpring(springConfig);

  return (
    <Container style={aboutUsStyles.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h1" style={aboutUsStyles.h1}>
            {t("aboutUs.title")}
          </Typography>
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
            marginBottom="48px"
          >
            <img
              src={AboutUsImg}
              alt="About Us"
              style={{
                width: "320px",
                maxHeight: "430px",
                borderRadius: "20px",
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} direction="row">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              style={{
                ...aboutUsStyles.section,
                margin: "10px",
                background: "rgb(11, 15, 21);",
              }}
            >
              <animated.div style={{ ...animation }}>
                <AnimatedServiceItem service={service} />
              </animated.div>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h2" style={aboutUsStyles.h2}>
        {t("aboutUs.why_us")}
      </Typography>
      <Grid container spacing={2} style={{ marginBottom: "48px" }}>
        {sections.map((section, index) => (
          <Grid item xs={12} sm={6} key={index} marginBottom={4}>
            <Box style={aboutUsStyles.root} display="flex" alignItems="center">
              <CheckIcon fill={iconColor} />
              <Typography variant="h6" style={aboutUsStyles.titleWhyUs}>
                {section.title}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              style={{ ...aboutUsStyles.content, maxWidth: "480px" }}
            >
              {section.description}
              {section.component && section.component}
            </Typography>
          </Grid>
        ))}
      </Grid>
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

      <Grid item xs={12}>
        <Button variant="outlined" color="primary">
          {t("aboutUs.leave_review")}
        </Button>
      </Grid>
    </Container>
  );
};

export default AboutUs;
