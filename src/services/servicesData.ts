import { useTranslation } from "react-i18next";

export const GetSections = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("aboutUs.company"),
      description: t("aboutUs.company_description"),
    },
    {
      title: t("aboutUs.portfolio"),
      description: t("aboutUs.portfolio_description"),
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
