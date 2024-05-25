import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Typography, Button, Grid } from "@mui/material";
import { useSpring } from "@react-spring/web";

import HeaderSection from "./AboutUsComponents/HeaderSection";
import ServicesSection from "./AboutUsComponents/ServicesSection";
import Sections from "./AboutUsComponents/Sections";

import { GetSections } from "services/servicesData";
import useIconColor from "hooks/useIconColor";
import { aboutUsStyles } from "./AboutUsStyles";

import PassportIcon from "assets/pictures/svg/PassportIcon";
import TranslationIcon from "assets/pictures/svg/TranslationIcon";
import DocIcon from "assets/pictures/svg/DocIcon";
import ContactsSection from "./AboutUsComponents/ContactsSection";

interface Section {
  title: string;
  description?: string;
  component?: JSX.Element;
}

interface Service {
  title: string;
  description?: string;
  points?: string[];
  icon: JSX.Element;
}

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  // eslint-disable-next-line
  const [isSectionsLoaded, setIsSectionsLoaded] = useState(false);
  const sections: Section[] = GetSections();
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
      <HeaderSection />
      <ServicesSection services={services} animation={animation} />
      <Typography variant="h2" style={aboutUsStyles.h2}>
        {t("aboutUs.why_us")}
      </Typography>
      <Sections sections={sections} iconColor={iconColor} />
      <ContactsSection />
      <Grid item xs={12}>
        <Button variant="outlined" color="primary">
          {t("aboutUs.leave_review")}
        </Button>
      </Grid>
    </Container>
  );
};

export default AboutUs;
