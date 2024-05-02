import React, { useEffect, useState } from "react";
import { Typography, Grid, Container, Paper } from "@mui/material";

// import AnimatedServiceItem from "./AboutUsComponents/ServiceItem";

import PassportIcon from "assets/pictures/svg/PassportIcon";
import TranslationIcon from "assets/pictures/svg/TranslationIcon";
import ServicesIcon from "assets/pictures/svg/ServicesIcon";
import { aboutUsStyles } from "./AboutUsStyles";

const AboutUs: React.FC = () => {
  const [isSectionsLoaded, setIsSectionsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsSectionsLoaded(true), 300);
  }, []);

  const services = [
    {
      title: "Бюро перекладів",
      description:
        "Професійний переклад будь-яких документів: юридичні, медичні, технічні, особисті тощо.",
      icon: <TranslationIcon />,
    },
    {
      title: "Допомога в оформленні віз",
      description:
        "Консультації, підготовка документів, супровід у візових центрах.",
      icon: <PassportIcon />,
    },

    {
      title: "Супутні послуги",
      description:
        "Нотаризація документів, апостиль, легалізація, лексикографічні дослідження.",
      icon: <ServicesIcon />,
    },
  ];

  return (
    <Container style={aboutUsStyles.root}>
      <Typography variant="h1" style={aboutUsStyles.root}>
        Про нас
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper style={aboutUsStyles.section}>
            <Typography variant="body1" style={aboutUsStyles.content}>
              Extras - приватна українська компанія, що спеціалізується на
              послугах з перекладу та оформленні віз.
            </Typography>
          </Paper>
        </Grid>
        <Grid container spacing={2} direction="row">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper style={aboutUsStyles.section}>
                <div
                  style={{
                    ...aboutUsStyles.serviceItem,
                    flexDirection: "column",
                  }}
                >
                  <div style={aboutUsStyles.serviceIcon}>{service.icon}</div>
                  <div>
                    <Typography variant="h6" style={aboutUsStyles.serviceTitle}>
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      style={aboutUsStyles.serviceDescription}
                    >
                      {service.description}
                    </Typography>
                  </div>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Paper style={aboutUsStyles.section}>
            <Typography variant="h6">Наш девіз</Typography>
            <Typography variant="body1" style={aboutUsStyles.content}>
              Підхід, «закроєний» саме для Вас.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={aboutUsStyles.section}>
            <Typography variant="h6">Наші цінності</Typography>
            <Typography variant="body1" style={aboutUsStyles.content}>
              Чесність, якість та повага до кожного.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={aboutUsStyles.section}>
            <Typography variant="h6">Про компанію</Typography>
            <Typography variant="body1" style={aboutUsStyles.content}>
              Компанія зареєстрована в 2008 році у м. Києві. Ми не обмежуємося
              офісом чи адресою. Наші послуги доступні для українців вдома та
              закордоном. Засновник та керівник Оксана Мудренок
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={aboutUsStyles.section}>
            <Typography variant="h6">Реквізити</Typography>
            <Typography variant="body1" style={aboutUsStyles.content}>
              - Рахунок IBAN: UA433052990000026009033605744 - Одержувач: ФОП
              Мудренок Оксана Анатоліївна - ЄДРПОУ: 3087023062
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={aboutUsStyles.section}>
            <Typography variant="h6">Наше портфоліо</Typography>
            <Typography variant="body1" style={aboutUsStyles.content}>
              - Тисячі перекладених документів - Понад 10 років досвіду -
              Професійна команда перекладачів - Конфіденційність та безпека -
              Доступні ціни
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={aboutUsStyles.section}>
            <Typography variant="h6">Відгуки клієнтів</Typography>
            <Typography variant="body1" style={aboutUsStyles.content}>
              "[Відгук клієнта 1]" - [Ім'я клієнта 1] "[Відгук клієнта 2]" -
              [Ім'я клієнта 2] "[Відгук клієнта 3]" - [Ім'я клієнта 3]
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={aboutUsStyles.section}>
            <Typography variant="h6">Зв'язатися з нами</Typography>
            <Typography variant="body1" style={aboutUsStyles.content}>
              - Телефон: +380 (44) 234-56-78 - Email: info@extras.com.ua -
            </Typography>
          </Paper>
        </Grid>{" "}
      </Grid>
    </Container>
  );
};

export default AboutUs;
