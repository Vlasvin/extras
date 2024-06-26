import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Typography, List, ListItem, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { SectionTitle } from "components/Translations/TranslationsStyles";
import { HomeBtn, Intro } from "./HomeStyles";

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
        &nbsp;&nbsp;{t("homepage.intro")}
      </Intro>
      <Intro variant="h6" gutterBottom mb={4}>
        &nbsp;&nbsp;{t("homepage.services_intro")}
      </Intro>

      <Box mb={10}>
        <SectionTitle variant="h5" gutterBottom>
          {t("homepage.translation.title")}
        </SectionTitle>
        <List>
          {translationServices.map((service, index) => (
            <ListItem key={index} sx={{ fontSize: "20px" }}>
              • {service}
            </ListItem>
          ))}
        </List>
        <Link to="/translations" style={{ textDecoration: "none" }}>
          <HomeBtn variant="outlined">{t("homepage.translation.more")}</HomeBtn>
        </Link>
      </Box>

      <Box mb={10}>
        <SectionTitle variant="h5" gutterBottom>
          {t("homepage.visas.title")}
        </SectionTitle>
        <Typography paragraph> &nbsp;&nbsp;{visaDescription}</Typography>
        <Link to="/visas" style={{ textDecoration: "none" }}>
          <HomeBtn variant="outlined">{t("homepage.visas.more")}</HomeBtn>
        </Link>
      </Box>

      <Box mb={6}>
        <SectionTitle variant="h5" gutterBottom>
          {t("homepage.legalization.title")}
        </SectionTitle>
        <Typography paragraph>&nbsp;&nbsp;{legalizationDescription}</Typography>
        <Typography paragraph> &nbsp;&nbsp;{legalizationApostille}</Typography>
        <Link to="/services" style={{ textDecoration: "none" }}>
          <HomeBtn variant="outlined">
            {t("homepage.legalization.more")}
          </HomeBtn>
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
