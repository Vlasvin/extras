import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Typography,
  Button,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import { useSpring } from "@react-spring/web";

import HeaderSection from "./AboutUsComponents/HeaderSection";
import ServicesSection from "./AboutUsComponents/ServicesSection";
import Sections from "./AboutUsComponents/Sections";
import ContactsSection from "./AboutUsComponents/ContactsSection";
import FeedbackForm from "components/Forms/FeedbackForm";

import useServicesData from "hooks/useServicesData";
import useIconColor from "hooks/useIconColor";
import { GetSections } from "services/servicesData";
import { aboutUsStyles } from "./AboutUsStyles";

interface Section {
  title: string;
  description?: string;
  component?: JSX.Element;
}

const AboutUs: React.FC = () => {
  const services = useServicesData();
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSectionsLoaded, setIsSectionsLoaded] = useState(false);
  const [isFeedbackFormOpen, setIsFeedbackFormOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const sections: Section[] = GetSections();
  const iconColor = useIconColor();

  useEffect(() => {
    setTimeout(() => setIsSectionsLoaded(true), 300);
  }, []);

  const springConfig = {
    delay: 2,
    duration: 2,
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  };

  const animation = useSpring(springConfig);

  const handleFeedbackFormClose = (submitted: boolean) => {
    setIsFeedbackFormOpen(false);
    if (submitted) {
      setIsSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSnackbarOpen(false);
  };

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
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setIsFeedbackFormOpen(true)}
        >
          {t("aboutUs.leave_review")}
        </Button>
      </Grid>
      <FeedbackForm
        open={isFeedbackFormOpen}
        onClose={handleFeedbackFormClose}
      />
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {t("aboutUs.feedback_thank_you")}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AboutUs;
