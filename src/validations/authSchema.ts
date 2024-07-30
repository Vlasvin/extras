import * as yup from "yup";
import i18next from "i18next";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email(i18next.t("email.invalid"))
    .required(i18next.t("email.required")),
  password: yup
    .string()
    .min(6, i18next.t("password.min"))
    .required(i18next.t("password.required")),
});
export const registerSchema = yup.object({
  firstName: yup.string().required(i18next.t("firstName")),
  lastName: yup.string().required(i18next.t("lastName")),
  email: yup
    .string()
    .email(i18next.t("email.invalid"))
    .required(i18next.t("email.required")),
  password: yup
    .string()
    .min(6, i18next.t("password.min"))
    .required(i18next.t("password.required")),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], i18next.t("password.confirm"))
    .required(i18next.t("confirmPassword")),
});
const SUPPORTED_FORMATS = [
  "application/pdf",
  "text/plain",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
export const translationSchema = yup.object().shape({
  name: yup.string().required(i18next.t("form.errors.name_required")),
  phone: yup.string().required(i18next.t("form.errors.phone_required")),
  email: yup
    .string()
    .email(i18next.t("form.errors.email_invalid"))
    .required(i18next.t("form.errors.email_required")),
  language: yup.string().required(i18next.t("form.errors.language_required")),
  message: yup.string().required(i18next.t("form.errors.message_required")),
  file: yup
    .mixed()
    .required(i18next.t("form.errors.file_required"))
    .test("fileSize", i18next.t("form.errors.file_size"), (value) => {
      if (!value || !(value instanceof FileList)) {
        return false;
      }
      return value[0]?.size <= 10485760;
    })
    .test("fileType", i18next.t("form.errors.file_type"), (value) => {
      if (!value || !(value instanceof FileList)) {
        return false;
      }
      return SUPPORTED_FORMATS.includes(value[0]?.type);
    }),
});
