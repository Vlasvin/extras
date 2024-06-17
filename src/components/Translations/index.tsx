import React, { useState, forwardRef, ReactElement, Ref } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Typography,
  ListItem,
  ListItemText,
  Grid,
  Button,
  Box,
  Dialog,
  IconButton,
  Slide,
  DialogTitle,
  DialogContent,
  SlideProps,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TranslationForm from "components/Forms/TranslateForm";

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

const Transition = forwardRef(function Transition(
  props: SlideProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Translations: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

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

        <Dialog
          open={open}
          TransitionComponent={Transition}
          onClose={handleClose}
          PaperProps={{
            sx: { borderRadius: 4 },
          }}
        >
          <DialogTitle
            sx={{ padding: "30px", fontSize: "24px", textAlign: "center" }}
          >
            {t("form.calculate_title")}
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
          </DialogTitle>
          <DialogContent sx={{ padding: "30px" }}>
            <TranslationForm onClose={handleClose} />
          </DialogContent>
        </Dialog>

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
