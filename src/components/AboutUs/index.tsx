import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Typography, Grid, Container, Paper, Box, Button } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

import AnimatedServiceItem from "./AboutUsComponents/ServiceItem";
import { GetSections } from "services/servicesData";
import { ThemeContext } from "redux/ThemeContext";
import { IThemeContext, IThemeMode } from "redux/ThemeContext/types";

import PassportIcon from "assets/pictures/svg/PassportIcon";
import TranslationIcon from "assets/pictures/svg/TranslationIcon";
import DocIcon from "assets/pictures/svg/DocIcon";
import CheckIcon from "assets/pictures/svg/CheckIcon";
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSectionsLoaded, setIsSectionsLoaded] = useState(false);
  const { themeMode } = useContext(ThemeContext) as IThemeContext;
  const sections = GetSections();

  const getIconColor = () => {
    return themeMode === IThemeMode.DARK ? "#FFFFFF" : "#000000dd";
  };
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const handleModalOpen = () => {
  //   setIsModalOpen(true);
  // };

  // const handleModalClose = () => {
  //   setIsModalOpen(false);
  // };

  useEffect(() => {
    setTimeout(() => setIsSectionsLoaded(true), 300);
  }, []);

  const iconSize = 80;

  const services: Service[] = [
    {
      title: t("aboutUs.bureau"),
      description: t("aboutUs.bureau_description"),

      icon: <TranslationIcon fill={getIconColor()} size={iconSize} />,
    },
    {
      title: t("aboutUs.visa_assistance"),
      points: [
        t("aboutUs.consultation"),
        t("aboutUs.document_preparation"),
        t("aboutUs.center_accompaniment"),
      ],
      icon: <PassportIcon fill={getIconColor()} size={iconSize} />,
    },
    {
      title: t("services"),
      points: [
        t("aboutUs.document_notarization"),
        t("aboutUs.apostille"),
        t("aboutUs.legalization"),
      ],
      icon: <DocIcon fill={getIconColor()} size={iconSize} />,
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
      <Typography
        variant="h1"
        style={{ ...aboutUsStyles.h1, textTransform: "uppercase" }}
      >
        {t("aboutUs.title")}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
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
        <Typography
          variant="h2"
          style={{ ...aboutUsStyles.h2, textTransform: "uppercase" }}
        >
          {t("aboutUs.why_us")}
        </Typography>
        <Grid container spacing={2} style={{ marginBottom: "48px" }}>
          {sections.map((section, index) => (
            <Grid item xs={12} sm={6} key={index} marginBottom={4}>
              <Box
                style={aboutUsStyles.root}
                display="flex"
                alignItems="center"
              >
                <CheckIcon fill={getIconColor()} />
                <Typography
                  variant="h6"
                  style={{
                    ...aboutUsStyles.titleWhyUs,
                    textTransform: "uppercase",
                  }}
                >
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
            <Typography variant="body1" style={aboutUsStyles.content}>
              {t("aboutUs.phone")}: +380 (44) 234-56-78
              <br /> {t("aboutUs.email")}: info@extras.com.ua
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Button variant="outlined" color="primary">
            {t("aboutUs.leave_review")}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
