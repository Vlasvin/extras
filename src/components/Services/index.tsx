import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Typography } from "@mui/material";

import useIconColor from "hooks/useIconColor";
import ServiceListItem from "./ServicesComponents/ServiceListItem";

import DesignIcon from "assets/pictures/svg/Design";
import NewspaperIcon from "assets/pictures/svg/Newspaper";
import BookIcon from "assets/pictures/svg/Book";
import TechIcon from "assets/pictures/svg/Tech";
import {
  CustomList,
  DescriptionBox,
  SectionTitle,
  Title,
} from "./ServicesStyles";

const Services: React.FC = () => {
  const { t } = useTranslation();
  const iconColor = useIconColor();

  const additionalServices = [
    { icon: NewspaperIcon, text: t("servicesPage.items.0") },
    { icon: TechIcon, text: t("servicesPage.items.1") },
    { icon: BookIcon, text: t("servicesPage.items.2") },
    { icon: DesignIcon, text: t("servicesPage.items.3") },
  ];

  const policeClearanceDescription = t(
    "servicesPage.policeClearanceDescription",
    { returnObjects: true }
  ) as string | string[];

  const apostilleDescription = t("servicesPage.apostilleDescription", {
    returnObjects: true,
  }) as string | string[];

  return (
    <Container style={{ padding: 0 }}>
      <Title variant="h4" gutterBottom>
        {t("servicesPage.title")}
      </Title>
      <Typography paragraph>{t("servicesPage.description")}</Typography>
      <CustomList>
        {additionalServices.map((service, index) => (
          <ServiceListItem
            key={index}
            icon={service.icon}
            text={service.text}
            fill={iconColor}
          />
        ))}
      </CustomList>
      <DescriptionBox>
        <SectionTitle variant="h5" gutterBottom>
          {t("servicesPage.apostille")}
        </SectionTitle>
        {Array.isArray(apostilleDescription) ? (
          apostilleDescription.map((text, index) => (
            <Typography key={index} paragraph>
              {text}
            </Typography>
          ))
        ) : (
          <Typography paragraph>{apostilleDescription}</Typography>
        )}
      </DescriptionBox>
      <DescriptionBox>
        <SectionTitle variant="h5" gutterBottom>
          {t("servicesPage.legalization")}
        </SectionTitle>
        <Typography paragraph>
          {t("servicesPage.legalizationDescription")}
        </Typography>
      </DescriptionBox>

      <DescriptionBox>
        <SectionTitle variant="h5" gutterBottom>
          {t("servicesPage.policeClearance")}
        </SectionTitle>
        {Array.isArray(policeClearanceDescription) ? (
          policeClearanceDescription.map((text, index) => (
            <Typography key={index} paragraph>
              {text}
            </Typography>
          ))
        ) : (
          <Typography paragraph>{policeClearanceDescription}</Typography>
        )}
      </DescriptionBox>
    </Container>
  );
};

export default Services;
