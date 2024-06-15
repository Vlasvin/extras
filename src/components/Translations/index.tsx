import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Typography,
  ListItem,
  ListItemText,
  Grid,
  Button,
  IconButton,
  Box,
  useTheme,
} from "@mui/material";
import { useTransition, animated } from "@react-spring/web";
import TranslationForm from "components/Forms/TranslateForm";
import CloseIcon from "@mui/icons-material/Close";

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
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const services = useArrayTranslation("translation.services");
  const oralServices = useArrayTranslation(
    "translation.oralTranslation.services"
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const transitions = useTransition(open, {
    from: { transform: "translateY(-100%)", opacity: 0 },
    enter: { transform: "translateY(0%)", opacity: 1 },
    leave: { transform: "translateY(-100%)", opacity: 0 },
    config: { duration: 500 },
  });

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
        <Typography paragraph mb={6}>
          {t("translation.writtenTranslation.details")}
        </Typography>
        <Box display="flex" justifyContent="center" my={2} mb={6}>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            {t("form.calculate_title")}
          </Button>
        </Box>

        {transitions(
          (styles, item) =>
            item && (
              <animated.div
                style={{
                  ...styles,
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1300,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
                onClick={handleClose}
              >
                <Box
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    borderRadius: 4,
                    position: "relative",
                    width: "100%",
                    maxWidth: "600px",
                    padding: "16px",
                    boxShadow: theme.shadows[5],
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: (theme) => theme.palette.grey[500],
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <TranslationForm onClose={handleClose} />
                </Box>
              </animated.div>
            )
        )}

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
