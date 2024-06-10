import { useTranslation } from "react-i18next";
import useIconColor from "hooks/useIconColor";

import DocIcon from "assets/pictures/svg/DocIcon";
import TranslationIcon from "assets/pictures/svg/TranslationIcon";
import PassportIcon from "assets/pictures/svg/PassportIcon";

const useServicesData = () => {
  const { t } = useTranslation();
  const iconColor = useIconColor();
  const iconSize = 80;

  return [
    {
      title: t("aboutUs.bureau"),
      description: t("aboutUs.bureau_description"),
      icon: <TranslationIcon fill={iconColor} size={iconSize} />,
    },
    {
      title: t("aboutUs.visa_assistance"),
      points: [
        t("aboutUs.consultation"),
        t("aboutUs.document_preparation"),
        t("aboutUs.center_accompaniment"),
      ],
      icon: <PassportIcon fill={iconColor} size={iconSize} />,
    },
    {
      title: t("services"),
      points: [
        t("aboutUs.document_notarization"),
        t("aboutUs.apostille"),
        t("aboutUs.legalization"),
      ],
      icon: <DocIcon fill={iconColor} size={iconSize} />,
    },
  ];
};

export default useServicesData;
