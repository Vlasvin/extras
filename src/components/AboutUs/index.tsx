import React, { useContext, useEffect, useState } from "react";
import { Typography, Grid, Container, Paper } from "@mui/material";

import AnimatedServiceItem from "./AboutUsComponents/ServiceItem";

import PassportIcon from "assets/pictures/svg/PassportIcon";
import TranslationIcon from "assets/pictures/svg/TranslationIcon";
import ServicesIcon from "assets/pictures/svg/ServicesIcon";
import { aboutUsStyles } from "./AboutUsStyles";
import { useSpring, animated } from "@react-spring/web";
import { ThemeContext } from "redux/ThemeContext";
import { IThemeContext, IThemeMode } from "redux/ThemeContext/types";

interface Service {
  title: string;
  description?: string;
  points?: string[];
  icon: JSX.Element;
}

const AboutUs: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSectionsLoaded, setIsSectionsLoaded] = useState(false);
  const { themeMode } = useContext(ThemeContext) as IThemeContext;
  console.log(themeMode);

  const getIconColor = () => {
    return themeMode === IThemeMode.DARK ? "#FFFFFF" : "inherit";
  };

  useEffect(() => {
    setTimeout(() => setIsSectionsLoaded(true), 300);
  }, []);

  const services: Service[] = [
    {
      title: "Бюро перекладів",
      description:
        "Професійний переклад будь-яких документів: юридичні, медичні, технічні, особисті тощо.",
      icon: <TranslationIcon fill={getIconColor()} />,
    },
    {
      title: "Допомога в оформленні віз",
      points: [
        "Консультації",
        "Підготовка документів",
        "Супровід у візових центрах",
      ],
      icon: <PassportIcon fill={getIconColor()} />,
    },

    {
      title: "Супутні послуги",
      points: [
        "Нотаризація документів",
        "Aпостиль",
        "Легалізація",
        "Лексикографічні дослідження",
      ],
      icon: <ServicesIcon fill={getIconColor()} />,
    },
  ];

  const springConfig = {
    delay: 2,
    duration: 2,
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  };

  const animation = useSpring(springConfig);

  return (
    <Container style={aboutUsStyles.root}>
      <Typography variant="h1" style={aboutUsStyles.h1}>
        Про нас
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper style={aboutUsStyles.section}>
            <Typography variant="body1" style={{ ...aboutUsStyles.content }}>
              Extras - приватна українська компанія, що спеціалізується на
              послугах з перекладу та оформленні віз.
            </Typography>
          </Paper>
        </Grid>
        <Grid container spacing={2} direction="row">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                style={{
                  ...aboutUsStyles.section,
                  background: "rgb(11, 15, 21);",
                }}
              >
                <animated.div style={{ ...animation }}>
                  <AnimatedServiceItem service={service} />
                </animated.div>
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
        </Grid>{" "}
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
