import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Typography,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
} from "@mui/material";
import { useSprings, animated, config, useSpring } from "@react-spring/web";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
// import { useNavigate } from "react-router-dom";

// import { useAuth } from "context/AuthContext";
import FlippingCard from "./VisaComponents/FlippingCard";
import {
  USATitle,
  CenteredCostCard,
  CustomBox,
  // VisaUsaBtn,
} from "./VisaStyles";
import { SectionTitle } from "components/Services/ServicesStyles";

interface VisaProps {
  titleKey: string;
  images: string[];
  stepsKey: string;
  costsKey: string;
  costTitleKey: string;
  documentsKey: string;
  applyButtonKey: string;
  descriptionKey: string;
  pageName: string;
}

const Visa: React.FC<VisaProps> = ({
  titleKey,
  images,
  stepsKey,
  costsKey,
  costTitleKey,
  documentsKey,
  applyButtonKey,
  descriptionKey,
  pageName,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const navigate = useNavigate();
  // const { user } = useAuth();
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
  }, [images.length]);

  useEffect(() => {
    api.start((i) => ({
      opacity: i === index ? 1 : 0,
    }));
  }, [index, api]);

  const steps: string[] = t(stepsKey, { returnObjects: true });
  const costs: string[] = t(costsKey, { returnObjects: true });
  const documents: string[] = t(documentsKey, { returnObjects: true });
  const costTitle = t(costTitleKey);
  const description = t(descriptionKey)
    .split("\n")
    .map((line, idx) => (
      <React.Fragment key={idx}>
        &emsp;{line}
        <br />
      </React.Fragment>
    ));

  // const handleApplyClick = () => {
  //   if (user) {
  //     navigate("/visas/usa/visa-form");
  //   } else {
  //     navigate("/auth");
  //   }
  // };

  return (
    <Container style={{ padding: 0 }}>
      <animated.div style={titleSpring}>
        <USATitle align="center">{t(titleKey)}</USATitle>
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
          style={{ marginBottom: "48px", textIndent: "1em" }}
        >
          {description}
        </Typography>
      </CardContent>

      <SectionTitle variant="h4" gutterBottom>
        {t(stepsKey + "_title")}
      </SectionTitle>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        direction={isMobile ? "column" : "row"}
      >
        {steps.map((step, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <FlippingCard stepNumber={index + 1} stepDescription={step} />
          </Grid>
        ))}
      </Grid>

      <SectionTitle variant="h4" gutterBottom sx={{ mt: 4 }}>
        {t(costTitle)}
      </SectionTitle>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
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
        {t(documentsKey + "_title")}
      </Typography>
      <List>
        {documents.map((doc, index) => (
          <ListItem key={index}>
            <ListItemText primary={doc} />
          </ListItem>
        ))}
      </List>
      {/* {pageName === "VisaUsa" && (
        <VisaUsaBtn
          variant="outlined"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleApplyClick}
        >
          {t(applyButtonKey)}
        </VisaUsaBtn>
      )} */}
    </Container>
  );
};

export default Visa;
