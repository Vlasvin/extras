import React from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Typography,
  List,
  ListItem,
  Button,
  Box,
} from "@mui/material";
import { SectionTitle } from "components/Translations/TranslationsStyles";
import { Intro } from "./HomeStyles";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const translationServices: string[] = t("homepage.translation.services", {
    returnObjects: true,
  }) as string[];
  const visaDescription: string = t("homepage.visas.description");
  const legalizationDescription: string = t(
    "homepage.legalization.description"
  );
  const legalizationApostille: string = t("homepage.legalization.apostille");

  return (
    <Container>
      <Intro variant="h4" gutterBottom>
        {t("homepage.intro")}
      </Intro>
      <Intro variant="h6" gutterBottom mb={4}>
        {t("homepage.services_intro")}
      </Intro>

      <Box mb={4}>
        <SectionTitle variant="h5" gutterBottom>
          {t("homepage.translation.title")}
        </SectionTitle>
        <List>
          {translationServices.map((service, index) => (
            <ListItem key={index}>• {service}</ListItem>
          ))}
        </List>
        <Button variant="outlined">{t("homepage.translation.more")}</Button>
      </Box>

      <Box mb={4}>
        <SectionTitle variant="h5" gutterBottom>
          {t("homepage.visas.title")}
        </SectionTitle>
        <Typography paragraph>{visaDescription}</Typography>
        <Button variant="outlined">{t("homepage.visas.more")}</Button>
      </Box>

      <Box mb={4}>
        <SectionTitle variant="h5" gutterBottom>
          {t("homepage.legalization.title")}
        </SectionTitle>
        <Typography paragraph>{legalizationDescription}</Typography>
        <Typography paragraph>{legalizationApostille}</Typography>
        <Button variant="outlined">{t("homepage.legalization.more")}</Button>
      </Box>
    </Container>
  );
};

export default Home;
