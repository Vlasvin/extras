// validationSchema.ts
import * as yup from "yup";

const personalInfoSchema = yup.object().shape({
  surname: yup.string().required("Прізвище є обов'язковим"),
  givenName: yup.string().required("Ім'я є обов'язковим"),
  patronymic: yup.string().required("По батькові є обов'язковим"),
  birthDate: yup.date().required("Дата народження є обов'язковою"),
  // інші поля особистої інформації
});

const familyInfoSchema = yup.object().shape({
  maritalStatus: yup.string().required("Сімейний стан є обов'язковим"),
  // інші поля даних про сім’ю
});

const purposeOfTravelSchema = yup.object().shape({
  stayDuration: yup.string().required("Це поле є обов'язковим"),
  tripFunding: yup.string().required("Це поле є обов'язковим"),
  intentToReturn: yup.string().required("Це поле є обов'язковим"),
  // інші поля мети поїздки
});

const travelHistorySchema = yup.object().shape({
  visitedUSA: yup.string().required("Це поле є обов'язковим"),
  // інші поля історії подорожей
});

const workAndEducationSchema = yup.object().shape({
  workOrStudy: yup.string().required("Це поле є обов'язковим"),
  profession: yup.string().required("Це поле є обов'язковим"),
  organizationName: yup.string().required("Це поле є обов'язковим"),
  // інші поля роботи та освіти
});

const schema = yup.object().shape({
  personalInfo: personalInfoSchema,
  familyInfo: familyInfoSchema,
  purposeOfTravel: purposeOfTravelSchema,
  travelHistory: travelHistorySchema,
  workAndEducation: workAndEducationSchema,
});

export default schema;
