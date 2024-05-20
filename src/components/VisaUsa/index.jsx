import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Typography,
  CardContent,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { useSprings, animated, config, useSpring } from "@react-spring/web";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Liberty from "assets/pictures/jpg/statue-of-liberty.jpg";
import GrandCanyon from "assets/pictures/jpg/grand-canyon.jpg";
import NY from "assets/pictures/jpg/new-york.jpg";
import PrismaticSpring from "assets/pictures/jpg/grand-prismatic-spring.jpg";
import Miami from "assets/pictures/jpg/miami.jpg";
import LasVegas from "assets/pictures/jpg/las-vegas.jpg";
import Church from "assets/pictures/jpg/church.jpg";
import Jeep from "assets/pictures/jpg/jeep.jpg";
import Hawaii from "assets/pictures/jpg/hawaii.jpg";
import MiamiBeach from "assets/pictures/jpg/miami-beach.jpg";
import {
  USATitle,
  CenteredCard,
  CenteredCostCard,
  CustomBox,
  CustomDivider,
  CustomTypography,
  CostsTitle,
} from "./VisaUSAStyles";

const images = [
  Liberty,
  GrandCanyon,
  NY,
  PrismaticSpring,
  Miami,
  LasVegas,
  Church,
  Jeep,
  Hawaii,
  MiamiBeach,
];

const VisaUsa = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [index, setIndex] = useState(0);

  const [springs, api] = useSprings(images.length, (i) => ({
    opacity: i === index ? 1 : 0,
    config: config.molasses,
  }));

  const titleSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-70px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    api.start((i) => ({
      opacity: i === index ? 1 : 0,
    }));
  }, [index, api]);

  const steps = t("visa_usa.steps", { returnObjects: true });
  const costs = t("visa_usa.costs", { returnObjects: true });
  const documents = t("visa_usa.documents", { returnObjects: true });

  return (
    <Box sx={{ p: 3 }}>
      <animated.div style={titleSpring}>
        <USATitle align="center">{t("visa_usa.title")}</USATitle>
      </animated.div>

      <CustomBox>
        {springs.map((style, i) => (
          <animated.img
            key={i}
            src={images[i]}
            style={{
              ...style,
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ))}
      </CustomBox>

      <CardContent>
        <Typography
          variant="body1"
          gutterBottom
          style={{ marginBottom: "48px" }}
        >
          {t("visa_usa.description")}
        </Typography>
      </CardContent>

      <CustomTypography variant="h4" gutterBottom>
        {t("visa_usa.steps_title")}
      </CustomTypography>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        direction={isMobile ? "column" : "row"}
      >
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} sm={3}>
              <CenteredCard>
                <CardContent>
                  <Typography variant="h6">{`${t("visa_usa.step_number")} ${
                    index + 1
                  }`}</Typography>
                  <Typography variant="body2">{step}</Typography>
                </CardContent>
              </CenteredCard>
            </Grid>
            {index < steps.length - 1 && (
              <CustomDivider
                key={`divider-${index}`}
                orientation={isMobile ? "horizontal" : "vertical"}
                flexItem
              />
            )}
          </React.Fragment>
        ))}
      </Grid>

      <CostsTitle variant="h4" gutterBottom sx={{ mt: 4 }}>
        {t("visa_usa.cost_title")}
      </CostsTitle>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {costs.map((cost, index) => (
          <CenteredCostCard key={index}>
            <CardContent>
              <Typography variant="body1">
                {cost.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </Typography>
            </CardContent>
          </CenteredCostCard>
        ))}
      </Box>

      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        {t("visa_usa.documents_title")}
      </Typography>
      <List>
        {documents.map((doc, index) => (
          <ListItem key={index}>
            <ListItemText primary={doc} />
          </ListItem>
        ))}
      </List>
      <Button
        variant="outlined"
        color="primary"
        sx={{ mt: 2 }}
        onClick={() => {
          window.location.href = "/apply";
        }}
      >
        {t("visa_usa.apply_button")}
      </Button>
    </Box>
  );
};

export default VisaUsa;
