import { useTranslation } from "react-i18next";
import PortfolioDescription from "components/AboutUs/AboutUsComponents/PortfolioDescription";

export const GetSections = () => {
  const { t } = useTranslation();
  return [
    {
      title: t("aboutUs.company"),
      description: t("aboutUs.company_description"),
    },
    {
      title: t("aboutUs.portfolio"),
      component: (
        <PortfolioDescription
          description={[
            t("aboutUs.portfolio_description"),
            t("aboutUs.portfolio_description_1"),
            t("aboutUs.portfolio_description_2"),
            t("aboutUs.portfolio_description_3"),
            t("aboutUs.portfolio_description_4"),
          ]}
        />
      ),
    },
    {
      title: t("aboutUs.motto"),
      description: t("aboutUs.motto_description"),
    },
    {
      title: t("aboutUs.values"),
      description: t("aboutUs.values_description"),
    },
  ];
};
