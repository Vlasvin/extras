import React from "react";
import { Typography } from "@mui/material";

import { aboutUsStyles } from "../AboutUsStyles";

interface ServiceItemProps {
  service: {
    title: string;
    description?: string;
    icon?: JSX.Element;
    points?: string[];
  };
}

const AnimatedServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
  return (
    <div style={{ ...aboutUsStyles.serviceItem, flexDirection: "column" }}>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        {service.icon}
      </div>
      <div>
        <Typography variant="h6" style={aboutUsStyles.serviceTitle}>
          {service.title}
        </Typography>

        <Typography variant="body2" style={aboutUsStyles.serviceDescription}>
          {service.description}
        </Typography>

        {service.points && (
          <ul>
            {service.points.map((point, index) => (
              <li key={index} style={aboutUsStyles.li}>
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AnimatedServiceItem;
