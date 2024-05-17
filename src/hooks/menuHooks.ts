import { useTranslation } from "react-i18next";

export const useMenuItems = () => {
  const { t } = useTranslation();

  const menuItems = [
    { label: t("visas"), link: "/visas" },
    { label: t("translations"), link: "/translations" },
    { label: t("services"), link: "/services" },
    { label: t("about us"), link: "/about-us" },
  ];

  return menuItems;
};

export const useVisaMenuItems = () => {
  const { t } = useTranslation();

  const visaMenuItems = [
    { label: t("visas"), link: "/visas" },
    { label: t("visa to usa"), link: "/visas/usa" },
    { label: t("visa to canada"), link: "/visas/canada" },
    { label: t("visa to australia"), link: "/visas/australia" },
  ];

  return visaMenuItems;
};
