import React from "react";
import { useTranslation } from "react-i18next";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { schema } from "validations/validationSchema";
import PersonalInfo from "./USAFormComponents/PersonalInfo";
import FamilyInfo from "./USAFormComponents/FamilyInfo";
import PurposeOfTravel from "./USAFormComponents/PurposeOfTravel";
import TravelHistory from "./USAFormComponents/TravelHistory";
import WorkAndEducation from "./USAFormComponents/WorkAndEducation";
import { Container, FormWrapper, Spacer } from "./USAFormStyles";

const VisaForm = () => {
  const { t } = useTranslation();

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      personalInfo: {
        surname: "",
        givenName: "",
        patronymic: "",
        birthDate: undefined,
        photo: undefined,
        passportCopy: undefined,
        passportDetails: "",
        passportOrInn: "",
        otherNames: "",
        birthPlaceAndDate: "",
        passportLost: false,
        passportLostDetails: "",
        otherCitizenship: false,
        otherPassportDetails: "",
        residenceAddress: "",
        registeredAddress: "",
        contactNumber: "",
        contactNumbersLast5Years: "",
        emailAddress: "",
        emailsLast5Years: "",
        socialMedia: [],
        otherMediaResources: false,
        otherMediaResourceDetails: "",
      },
      familyInfo: {},
      purposeOfTravel: {},
      travelHistory: {},
      workAndEducation: {
        currentEmployer: {
          companyName: "",
          address: "",
          phone: "",
          startDate: undefined,
          position: "",
          duties: "",
        },
        averageMonthlyIncome: undefined,
        previousEmployer: [],
        highSchool: {
          name: "",
          address: "",
          startDate: undefined,
          endDate: undefined,
        },
        higherEducation: [],
        socialOrganizations: undefined,
        tribe: undefined,
        militaryService: undefined,
      },
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <FormWrapper>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <PersonalInfo
              control={methods.control}
              errors={methods.formState.errors}
            />
            <Spacer />
            <FamilyInfo
              control={methods.control}
              errors={methods.formState.errors}
            />
            <Spacer />
            <PurposeOfTravel
              control={methods.control}
              errors={methods.formState.errors}
            />
            <Spacer />
            <TravelHistory
              control={methods.control}
              errors={methods.formState.errors}
            />
            <Spacer />
            <WorkAndEducation
              control={methods.control}
              errors={methods.formState.errors}
            />
            <Spacer />
            <Button type="submit" variant="outlined" color="primary">
              {t("send")}
            </Button>
          </form>
        </FormProvider>
      </FormWrapper>
    </Container>
  );
};

export default VisaForm;
