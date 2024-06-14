import { Typography, Grid, Button, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { visasCardsStyles } from "./VisasCardsStyles";
import { useState } from "react";
import homeData from "services/homeData";

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
          <Typography variant="h1" style={visasCardsStyles.title}>
            {t(visa.title)}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <div style={{ position: "relative" }}>
                <img
                  src={visa.image}
                  alt={visa.title}
                  style={visasCardsStyles.img}
                />
                <div
                  style={
                    visa.country === "USA"
                      ? visasCardsStyles.svgUsa
                      : visasCardsStyles.svgCanada
                  }
                >
                  {visa.country === "USA" && <USAMapIcon size={iconSize} />}
                  {visa.country === "Canada" && (
                    <CanadaMapIcon size={iconSize} />
                  )}
                  {visa.country === "Australia" && (
                    <AustraliaMapIcon size={iconSize} />
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
                <Button
                  variant="outlined"
                  color="primary"
                  component={Link}
                  to={`/visas/${visa.country.toLowerCase()}`}
                  style={visasCardsStyles.button}
                >
                  {t(visa.details)}
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      ))}
    </Container>
  );
};

export default VisasCards;
