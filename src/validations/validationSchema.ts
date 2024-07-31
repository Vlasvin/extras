import * as yup from "yup";
import i18next from "i18next";

const personalInfoSchema = yup.object().shape({
  surname: yup.string().required(i18next.t("errors.required")),
  givenName: yup.string().required(i18next.t("errors.required")),
  patronymic: yup.string().required(i18next.t("errors.required")),
  photo: yup.mixed().required(i18next.t("errors.required")),
  passportCopy: yup.mixed().required(i18next.t("errors.required")),
  passportDetails: yup.string(),
  passportOrInn: yup.string().required(i18next.t("errors.required")),
  otherNames: yup.string().required(i18next.t("errors.required")),
  birthPlaceAndDate: yup.string().required(i18next.t("errors.required")),
  passportLost: yup.boolean().required(i18next.t("errors.required")),
  passportLostDetails: yup.string().when("passportLost", {
    is: true,
    then: (schema) => schema.required(i18next.t("errors.required")),
    otherwise: (schema) => schema.notRequired(),
  }),
  otherCitizenship: yup.boolean().required(i18next.t("errors.required")),
  otherPassportDetails: yup.string().when("otherCitizenship", {
    is: true,
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
  socialMedia: yup.string().required(i18next.t("errors.required")),
  socialMediaFile: yup.mixed().required(i18next.t("errors.required")),
  otherMediaResources: yup.boolean().required(i18next.t("errors.required")),
  otherMediaResourceDetails: yup.string().when("otherMediaResources", {
    is: true,
    then: (schema) => schema.required(i18next.t("errors.required")),
    otherwise: (schema) => schema.notRequired(),
  }),
});

const familyInfoSchema = yup.object().shape({
  fatherName: yup.string().required(i18next.t("errors.required")),
  fatherDOB: yup
    .date()
    .typeError(i18next.t("errors.invalidDate"))
    .required(i18next.t("errors.required")),
  motherName: yup.string().required(i18next.t("errors.required")),
  motherDOB: yup
    .date()
    .typeError(i18next.t("errors.invalidDate"))
    .required(i18next.t("errors.required")),
  parentsInUSA: yup.string().required(i18next.t("errors.required")),
  maritalStatus: yup.string().required(i18next.t("errors.required")),
  spouseName: yup.string().required(i18next.t("errors.required")),
  spouseMaidenName: yup.string().required(i18next.t("errors.required")),
  spouseDOB: yup
    .date()
    .typeError(i18next.t("errors.invalidDate"))
    .required(i18next.t("errors.required")),
  spouseBirthPlace: yup.string().required(i18next.t("errors.required")),
  spouseNationality: yup.string().required(i18next.t("errors.required")),
  spouseAddress: yup.string().required(i18next.t("errors.required")),
  previousMarriages: yup.string().required(i18next.t("errors.required")),
  previousSpouses: yup.string(),
  previousSpouseDOB: yup.date().typeError(i18next.t("errors.invalidDate")),
  marriageStartDate: yup.date().typeError(i18next.t("errors.invalidDate")),
  marriageEndDate: yup.date().typeError(i18next.t("errors.invalidDate")),
  previousSpouseBirthPlace: yup.string(),
  previousSpouseNationality: yup.string(),
  relativesInUSA: yup.string().required(i18next.t("errors.required")),
  relativeNames: yup.string().when("relativesInUSA", {
    is: "yes",
    then: (schema) => schema.required(i18next.t("errors.required")),
  }),
  relativeStatus: yup.string().when("relativesInUSA", {
    is: "yes",
    then: (schema) => schema.required(i18next.t("errors.required")),
  }),
  otherRelativesInUSA: yup.string().when("relativesInUSA", {
    is: "yes",
    then: (schema) => schema.required(i18next.t("errors.required")),
  }),
  emergencyContact: yup.string(),
});

const purposeOfTravelSchema = yup.object().shape({
  mainPurpose: yup.string().required(i18next.t("errors.required")),
  details: yup.string().required(i18next.t("errors.required")),
  arrivalDate: yup
    .string()
    .typeError(i18next.t("errors.invalidDate"))
    .required(i18next.t("errors.required")),
  departureDate: yup
    .date()
    .typeError(i18next.t("errors.invalidDate"))
    .required(i18next.t("errors.required")),
  travelFunds: yup.string().required(i18next.t("errors.required")),
  personPaying: yup.string().required(i18next.t("errors.required")),
  personPayingRelationship: yup.string().required(i18next.t("errors.required")),
  contactsInUSA: yup.string().required(i18next.t("errors.required")),
  contactAddress: yup.string().required(i18next.t("errors.required")),
  contactPhone: yup.string().required(i18next.t("errors.required")),
  contactEmail: yup
    .string()
    .email(i18next.t("errors.invalidEmail"))
    .required(i18next.t("errors.required")),
});

const travelHistorySchema = yup.object().shape({
  countriesVisited: yup.string().required(i18next.t("errors.required")),
  lastVisit: yup.string().required(i18next.t("errors.required")),
  usaVisits: yup.string().required(i18next.t("errors.required")),
  visaDenials: yup.string().required(i18next.t("errors.required")),
  denialDetails: yup.string().when("visaDenials", {
    is: "yes",
    then: (schema) => schema.required(i18next.t("errors.required")),
  }),
});

const workAndEducationSchema = yup.object().shape({
  currentEmployer: yup.object().shape({
    companyName: yup.string().required(i18next.t("errors.required")),
    address: yup.string().required(i18next.t("errors.required")),
    phone: yup.string().required(i18next.t("errors.required")),
    startDate: yup
      .date()
      .typeError(i18next.t("errors.invalidDate"))
      .required(i18next.t("errors.required")),
    position: yup.string().required(i18next.t("errors.required")),
    duties: yup.string().required(i18next.t("errors.required")),
  }),
  averageMonthlyIncome: yup
    .number()
    .typeError(i18next.t("errors.invalidNumber"))
    .required(i18next.t("errors.required")),
  previousEmployer: yup.array().of(
    yup.object().shape({
      companyName: yup.string().required(i18next.t("errors.required")),
      address: yup.string().required(i18next.t("errors.required")),
      phone: yup.string().required(i18next.t("errors.required")),
      startDate: yup
        .date()
        .typeError(i18next.t("errors.invalidDate"))
        .required(i18next.t("errors.required")),
      endDate: yup
        .date()
        .typeError(i18next.t("errors.invalidDate"))
        .required(i18next.t("errors.required")),
      position: yup.string().required(i18next.t("errors.required")),
      duties: yup.string().required(i18next.t("errors.required")),
    })
  ),
  highSchool: yup.object().shape({
    name: yup.string().required(i18next.t("errors.required")),
    address: yup.string().required(i18next.t("errors.required")),
    startDate: yup
      .date()
      .typeError(i18next.t("errors.invalidDate"))
      .required(i18next.t("errors.required")),
    endDate: yup
      .date()
      .typeError(i18next.t("errors.invalidDate"))
      .required(i18next.t("errors.required")),
  }),
  higherEducation: yup.array().of(
    yup.object().shape({
      institution: yup.string().required(i18next.t("errors.required")),
      address: yup.string().required(i18next.t("errors.required")),
      startDate: yup
        .date()
        .typeError(i18next.t("errors.invalidDate"))
        .required(i18next.t("errors.required")),
      endDate: yup
        .date()
        .typeError(i18next.t("errors.invalidDate"))
        .required(i18next.t("errors.required")),
      degree: yup.string().required(i18next.t("errors.required")),
    })
  ),
  socialOrganizations: yup.string().required(i18next.t("errors.required")),
  tribe: yup.string().required(i18next.t("errors.required")),
  militaryService: yup.string().required(i18next.t("errors.required")),
});

export const validationSchema = yup.object().shape({
  personalInfo: personalInfoSchema,
  familyInfo: familyInfoSchema,
  purposeOfTravel: purposeOfTravelSchema,
  travelHistory: travelHistorySchema,
  workAndEducation: workAndEducationSchema,
});
