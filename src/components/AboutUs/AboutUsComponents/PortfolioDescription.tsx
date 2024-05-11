import React from "react";

interface PortfolioDescriptionProps {
  description: string[];
}

const PortfolioDescription: React.FC<PortfolioDescriptionProps> = ({
  description,
}) => {
  return (
    <ul>
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default PortfolioDescription;
