import { Typography, Grid, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from "react";
import homeData from "services/homeData";

import {
  Title,
  VisaButton,
  VisaImage,
  SvgUsa,
  SvgCanada,
} from "./VisasCardsStyles";
import USAMapIcon from "assets/pictures/svg/UsaMap";
import CanadaMapIcon from "assets/pictures/svg/CanadaMap";
import AustraliaMapIcon from "assets/pictures/svg/AustraliaMap";

const VisasCards = () => {
  const { t } = useTranslation();
  const [visas] = useState(homeData);

  const iconSize = 100;

  return (
    <Container style={{ padding: 0 }}>
      {visas.map((visa, index) => (
        <div key={index}>
          <Title variant="h1">{t(visa.title)}</Title>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <div style={{ position: "relative" }}>
                <VisaImage src={visa.image} alt={visa.title} />
                <div>
                  {visa.country === "USA" && (
                    <SvgUsa>
                      <USAMapIcon size={iconSize} />
                    </SvgUsa>
                  )}
                  {visa.country === "Canada" && (
                    <SvgCanada>
                      <CanadaMapIcon size={iconSize} />
                    </SvgCanada>
                  )}
                  {visa.country === "Australia" && (
                    <SvgUsa>
                      <AustraliaMapIcon size={iconSize} />
                    </SvgUsa>
                  )}
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={8} style={{ paddingLeft: "32px" }}>
              <Typography
                variant="body1"
                style={{ marginBottom: "16px" }}
                dangerouslySetInnerHTML={{ __html: t(visa.description) }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Link to={`/visas/${visa.country.toLowerCase()}`}>
                  <VisaButton variant="outlined" color="primary">
                    {t(visa.details)}
                  </VisaButton>
                </Link>
              </div>
            </Grid>
          </Grid>
        </div>
      ))}
    </Container>
  );
};

export default VisasCards;
