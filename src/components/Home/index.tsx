import { Typography, Grid, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { homeStyles } from "./HomeStyles";
import goldenGate from "assets/pictures/jpg/golden-gate-bridge.jpg";
import canadaToronto from "assets/pictures/jpg/canada_toronto.jpg";
import australiaSydney from "assets/pictures/jpg/australia-sidney.jpg";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h1" style={homeStyles.title}>
        {t("home.visa_usa.title")}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <img src={goldenGate} alt="USA" style={homeStyles.img} />
        </Grid>
        <Grid item xs={12} md={8} style={{ paddingLeft: "32px" }}>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: t("home.visa_usa.description") }}
          />
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: t("home.visa_usa.joke") }}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/visas/usa"
              style={homeStyles.button}
            >
              {t("home.visa_usa.details")}
            </Button>
          </div>
        </Grid>
      </Grid>

      <Typography variant="h1" style={homeStyles.title}>
        {t("home.visa_canada.title")}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <img src={canadaToronto} alt="Canada" style={homeStyles.img} />
        </Grid>
        <Grid item xs={12} md={8} style={{ paddingLeft: "32px" }}>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: t("home.visa_canada.description"),
            }}
          ></Typography>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/visas/canada"
              style={homeStyles.button}
            >
              {t("home.visa_canada.details")}
            </Button>
          </div>
        </Grid>
      </Grid>

      <Typography variant="h1" style={homeStyles.title}>
        {t("home.visa_australia.title")}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <img src={australiaSydney} alt="Australia" style={homeStyles.img} />
        </Grid>
        <Grid item xs={12} md={8} style={{ paddingLeft: "32px" }}>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: t("home.visa_australia.description"),
            }}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/visas/australia"
              style={homeStyles.button}
            >
              {t("home.visa_australia.details")}
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
