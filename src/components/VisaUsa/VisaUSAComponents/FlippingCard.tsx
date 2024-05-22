import React from "react";
import { useTranslation } from "react-i18next";
import { animated, useSpring } from "@react-spring/web";
import { Card, CardContent, Typography } from "@mui/material";
import { CenteredCard } from "../VisaUSAStyles";

interface FlippingCardProps {
  stepNumber: number;
  stepDescription: string;
}

const FlippingCard: React.FC<FlippingCardProps> = ({
  stepNumber,
  stepDescription,
}) => {
  const { t } = useTranslation();
  const [flipped, setFlipped] = React.useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      onClick={handleCardClick}
      style={{
        width: 300,
        height: 240,
        cursor: "pointer",
        position: "relative",
      }}
    >
      <animated.div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          backfaceVisibility: "hidden",
          opacity: opacity.to((o) => 1 - o),
          transform,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CenteredCard style={{ width: "100%", height: "100%" }}>
          <CardContent style={{ textAlign: "center" }}>
            <Typography variant="h6">{`${t(
              "visa_usa.step_number"
            )}  ${stepNumber}`}</Typography>
          </CardContent>
        </CenteredCard>
      </animated.div>
      <animated.div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          backfaceVisibility: "hidden",
          opacity,
          transform: transform.to((t) => `${t} rotateX(180deg)`),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CenteredCard style={{ width: "100%", height: "100%" }}>
          <CardContent style={{ textAlign: "center" }}>
            <Typography variant="body2">{stepDescription}</Typography>
          </CardContent>
        </CenteredCard>
      </animated.div>
    </div>
  );
};

export default FlippingCard;
