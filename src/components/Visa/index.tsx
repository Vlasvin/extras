import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import useIconColor from "hooks/useIconColor";

import PassportIcon from "assets/pictures/svg/PassportIcon";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import WorkIcon from "@mui/icons-material/Work";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DescriptionIcon from "@mui/icons-material/Description";
import PhotoIcon from "@mui/icons-material/Photo";

import USAMapIcon from "assets/pictures/svg/UsaMap";
import CanadaMapIcon from "assets/pictures/svg/CanadaMap";
import AustraliaMapIcon from "assets/pictures/svg/AustraliaMap";
import VisaBanner from "assets/pictures/jpg/travel.jpg";
import { visaStyles } from "./VisaStyles";

const Visa: React.FC = () => {
  const { t } = useTranslation();
  const sizeIcon = 400;
  const iconColor = useIconColor();

  const handleCountryClick = (country: string) => {
    window.location.href = `/extras/visas/${country}`;
  };

  const titleSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-70px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });

  const listSpring = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 200,
  });

  const { ref: countryRef, inView: countryInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const countrySpring = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: {
      opacity: countryInView ? 1 : 0,
      transform: countryInView ? "scale(1)" : "scale(0.8)",
    },
    delay: 400,
  });

  const documentIcons = [
    <PassportIcon fill={iconColor} size={60} />,
    <AccountBoxIcon style={{ color: iconColor, fontSize: 60 }} />,
    <WorkIcon style={{ color: iconColor, fontSize: 60 }} />,
    <NotInterestedIcon style={{ color: iconColor, fontSize: 60 }} />,
    <AccountBalanceIcon style={{ color: iconColor, fontSize: 60 }} />,
    <DescriptionIcon style={{ color: iconColor, fontSize: 60 }} />,
    <PhotoIcon style={{ color: iconColor, fontSize: 60 }} />,
  ];

  const documentKeys = [
    "passport",
    "id_copy",
    "job_certificate",
    "unemployed_certificate",
    "bank_certificate",
    "application_form",
    "photos",
  ];

  return (
    <Box padding={2}>
      <animated.div style={titleSpring}>
        <Typography variant="h1" style={visaStyles.h1} align="center">
          {t("visa.visa_title")}
        </Typography>
      </animated.div>
      <Box
        component="img"
        src={VisaBanner}
        alt="Visa banner"
        style={visaStyles.banner}
        marginY={2}
      />
      <Typography
        paragraph
        dangerouslySetInnerHTML={{ __html: t("visa.visa_description") }}
        marginBottom={6}
      />
      <Typography
        variant="h2"
        dangerouslySetInnerHTML={{ __html: t("visa.documents_required") }}
        style={visaStyles.titleList}
      />
      <animated.div style={listSpring}>
        <List style={{ marginBottom: 48 }}>
          {documentKeys.map((doc, index) => (
            <ListItem key={index}>
              <ListItemIcon>{documentIcons[index]}</ListItemIcon>
              <ListItemText primary={t(`visa.document_list.${doc}`)} />
            </ListItem>
          ))}
        </List>
      </animated.div>
      <Typography
        paragraph
        dangerouslySetInnerHTML={{ __html: t("visa.additional_info") }}
        marginBottom={6}
      />
      <Box
        display="flex"
        justifyContent="space-around"
        marginTop={2}
        ref={countryRef}
      >
        <animated.div style={countrySpring}>
          <Box
            textAlign="center"
            onClick={() => handleCountryClick("usa")}
            style={{ cursor: "pointer" }}
          >
            <USAMapIcon size={sizeIcon} />
            <Typography>{t("visa.countries.country1")}</Typography>
          </Box>
        </animated.div>
        <animated.div style={countrySpring}>
          <Box
            textAlign="center"
            onClick={() => handleCountryClick("canada")}
            style={{ cursor: "pointer" }}
          >
            <CanadaMapIcon size={sizeIcon} />
            <Typography>{t("visa.countries.country2")}</Typography>
          </Box>
        </animated.div>
        <animated.div style={countrySpring}>
          <Box
            textAlign="center"
            onClick={() => handleCountryClick("australia")}
            style={{ cursor: "pointer" }}
          >
            <AustraliaMapIcon size={sizeIcon} />
            <Typography>{t("visa.countries.country3")}</Typography>
          </Box>
        </animated.div>
      </Box>
    </Box>
  );
};

export default Visa;
