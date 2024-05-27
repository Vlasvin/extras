// components/VisaForm.tsx
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import schema from "validations/validationSchema";
import PersonalInfo from "./USAFormComponents/PersonalInfo";
import FamilyInfo from "./USAFormComponents/FamilyInfo";
import PurposeOfTravel from "./USAFormComponents/PurposeOfTravel";
import TravelHistory from "./USAFormComponents/TravelHistory";
import WorkAndEducation from "./USAFormComponents/WorkAndEducation";

const VisaForm = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      personalInfo: {},
      familyInfo: {},
      purposeOfTravel: {},
      travelHistory: {},
      workAndEducation: {},
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <PersonalInfo
          control={methods.control}
          errors={methods.formState.errors}
        />
        <FamilyInfo
          control={methods.control}
          errors={methods.formState.errors}
        />
        <PurposeOfTravel
          control={methods.control}
          errors={methods.formState.errors}
        />
        <TravelHistory
          control={methods.control}
          errors={methods.formState.errors}
        />
        <WorkAndEducation
          control={methods.control}
          errors={methods.formState.errors}
        />
        <Button type="submit" variant="contained" color="primary">
          Надіслати
        </Button>
      </form>
    </FormProvider>
  );
};

export default VisaForm;
