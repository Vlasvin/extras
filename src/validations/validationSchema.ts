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
  socialMedia: yup.array().of(
    yup.object().shape({
      name: yup.string().required(i18next.t("errors.required")),
      id: yup.string().required(i18next.t("errors.required")),
    })
  ),
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
  previousSpouses: yup.string().required(i18next.t("errors.required")),
  previousSpouseDOB: yup
    .date()
    .typeError(i18next.t("errors.invalidDate"))
    .required(i18next.t("errors.required")),
  marriageStartDate: yup
    .date()
    .typeError(i18next.t("errors.invalidDate"))
    .required(i18next.t("errors.required")),
  marriageEndDate: yup
    .date()
    .typeError(i18next.t("errors.invalidDate"))
    .required(i18next.t("errors.required")),
  previousSpouseBirthPlace: yup.string().required(i18next.t("errors.required")),
  previousSpouseNationality: yup
    .string()
    .required(i18next.t("errors.required")),
  relativesInUSA: yup.string().required(i18next.t("errors.required")),
  relativeNames: yup.string().when("relativesInUSA", {
    is: "yes",
    then: (schema) => schema.required(i18next.t("errors.required")),
  }),
  relativeStatus: yup.string().when("relativesInUSA", {
    is: "yes",
    then: (schema) => schema.required(i18next.t("errors.required")),
  }),
  otherRelativesInUSA: yup.string().required(i18next.t("errors.required")),
});

const purposeOfTravelSchema = yup.object().shape({
  travelPlans: yup.object().shape({
    arrivalDate: yup
      .date()
      .typeError(i18next.t("errors.invalidDate"))
      .required(i18next.t("errors.required")),
    arrivalCity: yup.string().required(i18next.t("errors.required")),
    placesToVisit: yup.string().required(i18next.t("errors.required")),
  }),
  addressInUSA: yup.string().required(i18next.t("errors.required")),
  invitingParty: yup.object().shape({
    name: yup.string().required(i18next.t("errors.required")),
    phone: yup
      .string()
      .required(i18next.t("errors.required"))
      .matches(/^[0-9]+$/, i18next.t("errors.invalidPhone")),
    email: yup
      .string()
      .email(i18next.t("errors.invalidEmail"))
      .required(i18next.t("errors.required")),
    relationship: yup.string().required(i18next.t("errors.required")),
  }),
  durationOfStay: yup.string().required(i18next.t("errors.required")),
  tripFunding: yup.string().required(i18next.t("errors.required")),
  travelPurpose: yup.string().required(i18next.t("errors.required")),
  travelCompanions: yup.string().required(i18next.t("errors.required")),
  tripSponsor: yup.string().required(i18next.t("errors.required")),
  sponsorInfo: yup.object().when("tripSponsor", {
    is: "otherPersonOrCompany",
    then: (schema) =>
      schema.shape({
        surname: yup.string().required(i18next.t("errors.required")),
        name: yup.string().required(i18next.t("errors.required")),
        address: yup.string().required(i18next.t("errors.required")),
        phone: yup
          .string()
          .required(i18next.t("errors.required"))
          .matches(/^[0-9]+$/, i18next.t("errors.invalidPhone")),
        email: yup
          .string()
          .email(i18next.t("errors.invalidEmail"))
          .required(i18next.t("errors.required")),
        relationship: yup.string().required(i18next.t("errors.required")),
      }),
    otherwise: (schema) =>
      schema.shape({
        surname: yup.string().notRequired(),
        name: yup.string().notRequired(),
        address: yup.string().notRequired(),
        phone: yup.string().notRequired(),
        email: yup.string().notRequired(),
        relationship: yup.string().notRequired(),
      }),
  }),
});

const travelHistorySchema = yup.object().shape({
  countriesVisited: yup.string().required(i18next.t("errors.required")),
  visitedUSA: yup.string().required(i18next.t("errors.required")),
  visaDates: yup.string().when("visitedUSA", {
    is: "yes",
    then: (schema) => schema.required(i18next.t("errors.required")),
    otherwise: (schema) => schema.notRequired(),
  }),
  visaNumber: yup.string().when("visitedUSA", {
    is: "yes",
    then: (schema) => schema.required(i18next.t("errors.required")),
    otherwise: (schema) => schema.notRequired(),
  }),
  visaDenied: yup.string().required(i18next.t("errors.required")),
  denialDate: yup.string().when("visaDenied", {
    is: "yes",
    then: (schema) => schema.required(i18next.t("errors.required")),
    otherwise: (schema) => schema.notRequired(),
  }),
  denialPlace: yup.string().when("visaDenied", {
    is: "yes",
    then: (schema) => schema.required(i18next.t("errors.required")),
    otherwise: (schema) => schema.notRequired(),
  }),
  denialType: yup.string().when("visaDenied", {
    is: "yes",
    then: (schema) => schema.required(i18next.t("errors.required")),
    otherwise: (schema) => schema.notRequired(),
  }),
  previousTravel: yup.string().required(i18next.t("errors.required")),
  arrivalDate0: yup.string().when("previousTravel", {
    is: "yes",
    then: (schema) => schema.required(i18next.t("errors.required")),
    otherwise: (schema) => schema.notRequired(),
  }),
  stayDuration0: yup.string().when("previousTravel", {
    is: "yes",
    then: (schema) => schema.required(i18next.t("errors.required")),
    otherwise: (schema) => schema.notRequired(),
  }),

  immigrationPetition: yup.string().required(i18next.t("errors.required")),
  petitionDetails: yup.string().when("immigrationPetition", {
    is: "yes",
    then: (schema) => schema.required(i18next.t("errors.required")),
    otherwise: (schema) => schema.notRequired(),
  }),
  driverLicense: yup.string().required(i18next.t("errors.required")),
  licenseDetails: yup.string().when("driverLicense", {
    is: "yes",
    then: (schema) => schema.required(i18next.t("errors.required")),
    otherwise: (schema) => schema.notRequired(),
  }),
  ssn: yup.string().required(i18next.t("errors.required")),
  ssnDetails: yup.string().when("ssn", {
    is: "yes",
    then: (schema) => schema.required(i18next.t("errors.required")),
    otherwise: (schema) => schema.notRequired(),
  }),
});

const workAndEducationSchema = yup.object().shape({
  currentEmployer: yup.object().shape({
    companyName: yup.string().required(i18next.t("errors.required")),
    address: yup.string().required(i18next.t("errors.required")),
    phone: yup.string().required(i18next.t("errors.required")),
    startDate: yup.date().required(i18next.t("errors.required")),
    position: yup.string().required(i18next.t("errors.required")),
    duties: yup.string().required(i18next.t("errors.required")),
  }),
  averageMonthlyIncome: yup.number().required(i18next.t("errors.required")),
  previousEmployer: yup.array().of(
    yup.object().shape({
      companyName: yup.string().required(i18next.t("errors.required")),
      address: yup.string().required(i18next.t("errors.required")),
      phone: yup.string().required(i18next.t("errors.required")),
      startDate: yup.date().required(i18next.t("errors.required")),
      position: yup.string().required(i18next.t("errors.required")),
      duties: yup.string().required(i18next.t("errors.required")),
    })
  ),
  highSchool: yup.object().shape({
    name: yup.string().required(i18next.t("errors.required")),
    address: yup.string().required(i18next.t("errors.required")),
    startDate: yup.date().required(i18next.t("errors.required")),
    endDate: yup.date().required(i18next.t("errors.required")),
  }),
  higherEducation: yup.array().of(
    yup.object().shape({
      name: yup.string().required(i18next.t("errors.required")),
      address: yup.string().required(i18next.t("errors.required")),
      startDate: yup.date().required(i18next.t("errors.required")),
      endDate: yup.date().required(i18next.t("errors.required")),
      faculty: yup.string().required(i18next.t("errors.required")),
    })
  ),
  socialOrganizations: yup
    .string()
    .oneOf(["yes", "no"])
    .required(i18next.t("errors.required")),
  tribe: yup
    .string()
    .oneOf(["yes", "no"])
    .required(i18next.t("errors.required")),
  militaryService: yup
    .string()
    .oneOf(["yes", "no"])
    .required(i18next.t("errors.required")),
});

const schema = yup.object().shape({
  personalInfo: personalInfoSchema,
  familyInfo: familyInfoSchema,
  purposeOfTravel: purposeOfTravelSchema,
  travelHistory: travelHistorySchema,
  workAndEducation: workAndEducationSchema,
});
export default schema;
