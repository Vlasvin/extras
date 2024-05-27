import React from "react";
import {
  Container,
  Typography,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import {
  SectionTitle,
  DescriptionBox,
  CustomList,
  CustomImage,
  Title,
} from "./TranslationsStyles";
import TranslationsImg from "assets/pictures/jpg/translate.jpg";

const useArrayTranslation = (key: string): string[] => {
  const { t } = useTranslation();
  return t(key, { returnObjects: true }) as unknown as string[];
};

const Translations: React.FC = () => {
  const { t } = useTranslation();

  const services = useArrayTranslation("translation.services");
  const oralServices = useArrayTranslation(
    "translation.oralTranslation.services"
  );

  return (
    <Container>
      <Title variant="h2" gutterBottom>
        {t("translation.title")}
      </Title>

      <SectionTitle variant="h6" gutterBottom>
        {t("translation.subtitle")}
      </SectionTitle>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} style={{ maxWidth: 720 }}>
          <CustomList>
            {services.map((service, index) => (
              <ListItem key={index}>
                <ListItemText primary={`• ${service}`} />
              </ListItem>
            ))}
          </CustomList>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomImage src={TranslationsImg} alt="Translation Services" />
        </Grid>
      </Grid>

      <DescriptionBox>
        <SectionTitle variant="h5" gutterBottom>
          {t("translation.writtenTranslation.title")}
        </SectionTitle>
        <Typography paragraph>
          {t("translation.writtenTranslation.description")}
        </Typography>
        <Typography paragraph>
          {t("translation.writtenTranslation.details")}
        </Typography>

        <SectionTitle variant="h6" gutterBottom>
          {t("translation.certificationTypes.title")}
        </SectionTitle>
        <Typography paragraph>
          {t("translation.certificationTypes.agencySeal")}
        </Typography>
        <Typography paragraph>
          {t("translation.certificationTypes.notarySeal")}
        </Typography>
      </DescriptionBox>

      <DescriptionBox>
        <SectionTitle variant="h5" gutterBottom>
          {t("translation.oralTranslation.title")}
        </SectionTitle>
        <Typography paragraph>
          {t("translation.oralTranslation.description")}
        </Typography>
        <CustomList>
          {oralServices.map((service, index) => (
            <ListItem key={index}>
              <ListItemText primary={`• ${service}`} />
            </ListItem>
          ))}
        </CustomList>
      </DescriptionBox>

      <DescriptionBox>
        <SectionTitle variant="h6" gutterBottom>
          {t("translation.voiceOver.title")}
        </SectionTitle>
        <Typography paragraph>
          {t("translation.voiceOver.description")}
        </Typography>
      </DescriptionBox>
    </Container>
  );
};

export default Translations;
