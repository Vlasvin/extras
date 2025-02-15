import React from "react";
import { Grid, Paper } from "@mui/material";
import { animated, SpringValue } from "@react-spring/web";
import AnimatedServiceItem from "./ServiceItem";
import { aboutUsStyles } from "../AboutUsStyles";

interface Service {
  title: string;
  description?: string;
  points?: string[];
  icon: JSX.Element;
}

interface ServicesSectionProps {
  services: Service[];
  animation: { opacity: SpringValue<number>; transform: SpringValue<string> };
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  animation,
}) => (
  <Grid container spacing={2} direction="row">
    {services.map((service, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Paper
          style={{
            ...aboutUsStyles.section,
            margin: "10px",
          }}
        >
          <animated.div style={{ ...animation }}>
            <AnimatedServiceItem service={service} />
          </animated.div>
        </Paper>
      </Grid>
    ))}
  </Grid>
);

export default ServicesSection;
