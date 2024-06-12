import * as yup from "yup";
import i18next from "i18next";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email(i18next.t("errors.invalidEmail"))
    .required(i18next.t("errors.required")),
  password: yup.string().required(i18next.t("errors.required")),
});

const registerSchema = yup.object().shape({
  firstName: yup.string().required(i18next.t("errors.required")),
  lastName: yup.string().required(i18next.t("errors.required")),
  email: yup
    .string()
    .email(i18next.t("errors.invalidEmail"))
    .required(i18next.t("errors.required")),
  password: yup.string().required(i18next.t("errors.required")),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), undefined],
      i18next.t("errors.passwordsDoNotMatch")
    )
    .required(i18next.t("errors.required")),
});

export { loginSchema, registerSchema };
