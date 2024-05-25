import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import CheckIcon from "assets/pictures/svg/CheckIcon";
import { aboutUsStyles } from "../AboutUsStyles";

interface Section {
  title: string;
  description?: string;
  component?: JSX.Element;
}

interface SectionsProps {
  sections: Section[];
  iconColor: string;
}

const Sections: React.FC<SectionsProps> = ({ sections, iconColor }) => (
  <Grid container spacing={2} style={{ marginBottom: "48px" }}>
    {sections.map((section, index) => (
      <Grid item xs={12} sm={6} key={index} marginBottom={4}>
        <Box style={aboutUsStyles.root} display="flex" alignItems="center">
          <CheckIcon fill={iconColor} />
          <Typography variant="h6" style={aboutUsStyles.titleWhyUs}>
            {section.title}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          style={{ ...aboutUsStyles.content, maxWidth: "480px" }}
        >
          {section.description}
          {section.component && section.component}
        </Typography>
      </Grid>
    ))}
  </Grid>
);

export default Sections;
