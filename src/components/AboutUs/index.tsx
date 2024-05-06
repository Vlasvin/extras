import React, { useContext, useEffect, useState } from "react";
import { Typography, Grid, Container, Paper } from "@mui/material";

import AnimatedServiceItem from "./AboutUsComponents/ServiceItem";

import PassportIcon from "assets/pictures/svg/PassportIcon";
import TranslationIcon from "assets/pictures/svg/TranslationIcon";
import ServicesIcon from "assets/pictures/svg/ServicesIcon";
import { aboutUsStyles } from "./AboutUsStyles";
import { useSpring, animated } from "@react-spring/web";
import { ThemeContext } from "redux/ThemeContext";
import { IThemeContext, IThemeMode } from "redux/ThemeContext/types";
import { useTranslation } from "react-i18next";

interface Service {
  title: string;
  description?: string;
  points?: string[];
  icon: JSX.Element;
}

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSectionsLoaded, setIsSectionsLoaded] = useState(false);
  const { themeMode } = useContext(ThemeContext) as IThemeContext;

  const getIconColor = () => {
    return themeMode === IThemeMode.DARK ? "#FFFFFF" : "inherit";
  };

  useEffect(() => {
    setTimeout(() => setIsSectionsLoaded(true), 300);
  }, []);

  const services: Service[] = [
    {
      title: t("aboutUs.bureau"),
      description: t("aboutUs.bureau_description"),

      icon: <TranslationIcon fill={getIconColor()} />,
    },
    {
      title: t("aboutUs.visa_assistance"),
      points: [
        t("aboutUs.consultation"),
        t("aboutUs.document_preparation"),
        t("aboutUs.center_accompaniment"),
      ],
      icon: <PassportIcon fill={getIconColor()} />,
    },
    {
      title: t("services"),
      points: [
        t("aboutUs.document_notarization"),
        t("aboutUs.apostille"),
        t("aboutUs.legalization"),
      ],
      icon: <ServicesIcon fill={getIconColor()} />,
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
      <Typography variant="h1" style={aboutUsStyles.h1}>
        {t("aboutUs.title")}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            style={{ ...aboutUsStyles.content, fontSize: 28, marginBottom: 16 }}
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
        <Grid item xs={12}>
          <Paper style={aboutUsStyles.section}>
            <Typography variant="h6">{t("aboutUs.motto")}</Typography>
            <Typography variant="body1" style={aboutUsStyles.content}>
              {t("aboutUs.motto_description")}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={aboutUsStyles.section}>
            <Typography variant="h6"> {t("aboutUs.values")}</Typography>
            <Typography variant="body1" style={aboutUsStyles.content}>
              {t("aboutUs.values_description")}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={aboutUsStyles.section}>
            <Typography variant="h6"> {t("aboutUs.company")}</Typography>
            <Typography variant="body1" style={aboutUsStyles.content}>
              {t("aboutUs.company_description")}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={aboutUsStyles.section}>
            <Typography variant="h6">{t("aboutUs.portfolio")}</Typography>
            <Typography variant="body1" style={aboutUsStyles.content}>
              {t("aboutUs.portfolio_description")}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={aboutUsStyles.section}>
            <Typography variant="h6">{t("aboutUs.props")}</Typography>
            <Typography variant="body1" style={aboutUsStyles.content}>
              - Рахунок IBAN: UA433052990000026009033605744 - Одержувач: ФОП
              Мудренок Оксана Анатоліївна - ЄДРПОУ: 3087023062
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={aboutUsStyles.section}>
            <Typography variant="h6">{t("aboutUs.contacts")}</Typography>
            <Typography variant="body1" style={aboutUsStyles.content}>
              - Телефон: +380 (44) 234-56-78 - Email: info@extras.com.ua
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">{t("aboutUs.customer_reviews")}</Typography>
          <Typography
            variant="body1"
            style={aboutUsStyles.content}
          ></Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
