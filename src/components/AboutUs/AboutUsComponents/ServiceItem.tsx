import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { Grid, IconButton, Typography } from "@mui/material";

import { aboutUsStyles } from "../AboutUsStyles";

interface ServiceItemProps {
  service: {
    title: string;
    description: string;
    icon?: JSX.Element;
  };
}

const AnimatedServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
  const springConfig = {
    delay: 0.2,
    duration: 0.8,
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  };

  const animation = useSpring(springConfig);

  return (
    <animated.div style={animation}>
      <div style={{ ...aboutUsStyles.serviceItem, flexDirection: "column" }}>
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          {service.icon}
        </div>
        <div>
          <Typography variant="h6">{service.title}</Typography>
          <Typography variant="body2" style={aboutUsStyles.serviceDescription}>
            {service.description}
          </Typography>
        </div>
      </div>
    </animated.div>
  );
};

export default AnimatedServiceItem;
