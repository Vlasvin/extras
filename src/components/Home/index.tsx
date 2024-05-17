import { Typography, Grid, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { homeStyles } from "./HomeStyles";
import { useState } from "react";
import homeData from "services/homeData";

import USAMapIcon from "assets/pictures/svg/UsaMap";
import CanadaMapIcon from "assets/pictures/svg/CanadaMap";
import AustraliaMapIcon from "assets/pictures/svg/AustraliaMap";

const Home = () => {
  const { t } = useTranslation();
  const [visas] = useState(homeData);

  const iconSize = 100;

  return (
    <div>
      {visas.map((visa, index) => (
        <div key={index}>
          <Typography variant="h1" style={homeStyles.title}>
            {t(visa.title)}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <div style={{ position: "relative" }}>
                <img src={visa.image} alt={visa.title} style={homeStyles.img} />
                <div
                  style={
                    visa.country === "USA"
                      ? homeStyles.svgUsa
                      : homeStyles.svgCanada
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
                  style={homeStyles.button}
                >
                  {t(visa.details)}
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default Home;
