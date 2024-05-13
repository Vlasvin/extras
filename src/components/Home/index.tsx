import { Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h1">{t("home.visa_usa.title")}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src="/path/to/image_usa.jpg" alt="USA" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            {t("home.visa_usa.description")}
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h1">{t("home.visa_canada.title")}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src="/path/to/image_canada.jpg" alt="Canada" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            {t("home.visa_canada.description")}
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h1">{t("home.visa_australia.title")}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src="/path/to/image_australia.jpg" alt="Australia" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            {t("home.visa_australia.description")}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
