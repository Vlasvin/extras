import * as yup from "yup";
import i18next from "i18next";

const personalInfoSchema = yup.object().shape({
  surname: yup.string().required(i18next.t("errors.required")),
  givenName: yup.string().required(i18next.t("errors.required")),
  patronymic: yup.string().required(i18next.t("errors.required")),
  birthDate: yup
    .date()
    .typeError(i18next.t("errors.invalidDate"))
    .required(i18next.t("errors.required")),
  photo: yup.mixed().required(i18next.t("errors.required")),
  passportCopy: yup.mixed().required(i18next.t("errors.required")),
  passportDetails: yup.string().required(i18next.t("errors.required")),
  passportOrInn: yup.string().required(i18next.t("errors.required")),
  otherNames: yup.string().required(i18next.t("errors.required")),
  birthPlaceAndDate: yup.string().required(i18next.t("errors.required")),
  passportLost: yup.boolean().required(i18next.t("errors.required")),
  passportLostDetails: yup.string().when("passportLost", {
    is: (val: boolean) => val === true,
    then: (schema) => schema.required(i18next.t("errors.required")),
    otherwise: (schema) => schema.notRequired(),
  }),
  otherCitizenship: yup.boolean().required(i18next.t("errors.required")),
  otherPassportDetails: yup.string().when("otherCitizenship", {
    is: (val: boolean) => val === true,
    then: (schema) => schema.required(i18next.t("errors.required")),
    otherwise: (schema) => schema.notRequired(),
  }),
  residenceAddress: yup.string().required(i18next.t("errors.required")),
  registeredAddress: yup.string().required(i18next.t("errors.required")),
  contactNumber: yup.string().required(i18next.t("errors.required")),
  contactNumbersLast5Years: yup.string().required(i18next.t("errors.required")),
  emailAddress: yup
    .string()
    .email(i18next.t("errors.invalidEmail"))
    .required(i18next.t("errors.required")),
  emailsLast5Years: yup.string().required(i18next.t("errors.required")),
  socialMedia: yup.array().of(
    yup.object().shape({
      name: yup.string().required(i18next.t("errors.required")),
      id: yup.string().required(i18next.t("errors.required")),
    })
  ),
  otherMediaResources: yup.boolean().required(i18next.t("errors.required")),
  otherMediaResourceDetails: yup.string().when("otherMediaResources", {
    is: (val: boolean) => val === true,
    then: (schema) => schema.required(i18next.t("errors.required")),
    otherwise: (schema) => schema.notRequired(),
  }),
});

const familyInfoSchema = yup.object().shape({
  maritalStatus: yup.string().required("Сімейний стан є обов'язковим"),
});

const purposeOfTravelSchema = yup.object().shape({
  stayDuration: yup.string().required("Це поле є обов'язковим"),
  tripFunding: yup.string().required("Це поле є обов'язковим"),
  intentToReturn: yup.string().required("Це поле є обов'язковим"),
});

const travelHistorySchema = yup.object().shape({
  visitedUSA: yup.string().required("Це поле є обов'язковим"),
});

const workAndEducationSchema = yup.object().shape({
  workOrStudy: yup.string().required("Це поле є обов'язковим"),
  profession: yup.string().required("Це поле є обов'язковим"),
  organizationName: yup.string().required("Це поле є обов'язковим"),
});

const schema = yup.object().shape({
  personalInfo: personalInfoSchema,
  familyInfo: familyInfoSchema,
  purposeOfTravel: purposeOfTravelSchema,
  travelHistory: travelHistorySchema,
  workAndEducation: workAndEducationSchema,
});

export default schema;
