import React from "react";
import { useTranslation } from "react-i18next";
import { List, ListItemIcon, ListItemText, Typography } from "@mui/material";
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
import {
  VisaContainer,
  VisaTitle,
  VisaBanner as StyledVisaBanner,
  VisaTitleList,
  CountryContainer,
  CountryBox,
  VisaListItem,
} from "./VisaStyles";

const Visa: React.FC = () => {
  const { t } = useTranslation();
  const iconSize = window.innerWidth <= 600 ? 240 : 400;
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
    delay: 600,
  });

  const documentIcons = [
    <PassportIcon fill={iconColor} size={60} />,
    <AccountBoxIcon />,
    <WorkIcon />,
    <NotInterestedIcon />,
    <AccountBalanceIcon />,
    <DescriptionIcon />,
    <PhotoIcon />,
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
    <VisaContainer>
      <animated.div style={titleSpring}>
        <VisaTitle align="center">{t("visa.visa_title")}</VisaTitle>
      </animated.div>
      <StyledVisaBanner src={VisaBanner} alt="Visa banner" />
      <Typography
        paragraph
        dangerouslySetInnerHTML={{ __html: t("visa.visa_description") }}
        marginBottom={6}
      />
      <VisaTitleList
        dangerouslySetInnerHTML={{ __html: t("visa.documents_required") }}
      />
      <animated.div style={listSpring}>
        <List style={{ marginBottom: 48 }}>
          {documentKeys.map((doc, index) => (
            <VisaListItem key={index}>
              <ListItemIcon>
                {React.cloneElement(documentIcons[index], {
                  style: { color: iconColor, fontSize: 60 },
                })}
              </ListItemIcon>
              <ListItemText
                primary={t(`visa.document_list.${doc}`)}
                style={{ marginLeft: 20 }}
              />
            </VisaListItem>
          ))}
        </List>
      </animated.div>
      <Typography
        paragraph
        dangerouslySetInnerHTML={{ __html: t("visa.additional_info") }}
        marginBottom={6}
      />
      <CountryContainer ref={countryRef}>
        <animated.div style={countrySpring}>
          <CountryBox onClick={() => handleCountryClick("usa")}>
            <USAMapIcon size={iconSize} />
            <Typography>{t("visa.countries.country1")}</Typography>
          </CountryBox>
        </animated.div>
        <animated.div style={countrySpring}>
          <CountryBox onClick={() => handleCountryClick("canada")}>
            <CanadaMapIcon size={iconSize} />
            <Typography>{t("visa.countries.country2")}</Typography>
          </CountryBox>
        </animated.div>
        <animated.div style={countrySpring}>
          <CountryBox onClick={() => handleCountryClick("australia")}>
            <AustraliaMapIcon size={iconSize} />
            <Typography>{t("visa.countries.country3")}</Typography>
          </CountryBox>
        </animated.div>
      </CountryContainer>
    </VisaContainer>
  );
};

export default Visa;
