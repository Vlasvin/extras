import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import PersonalInfo from "./USAFormComponents/PersonalInfo";
import FamilyInfo from "./USAFormComponents/FamilyInfo";
import PurposeOfTravel from "./USAFormComponents/PurposeOfTravel";
import TravelHistory from "./USAFormComponents/TravelHistory";
import WorkAndEducation from "./USAFormComponents/WorkAndEducation";
import { Container, FormWrapper, Spacer } from "./USAFormStyles";
import QuestionsSection from "./USAFormComponents/QuestionSection";
// import { validationSchema } from "validations/validationSchema";

const VisaForm: React.FC = () => {
  const { t } = useTranslation();
  const methods = useForm({
    // resolver: yupResolver(validationSchema),
    defaultValues: JSON.parse(localStorage.getItem("visaForm") || "{}"),
  });

  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PRODUCTION
      : process.env.REACT_APP_API_URL_LOCAL;

  const { handleSubmit, watch } = methods;

  useEffect(() => {
    const subscription = watch((data) => {
      localStorage.setItem("visaForm", JSON.stringify(data));
      console.log("Form data updated in localStorage:", data);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = async (data: any) => {
    console.log("Inside onSubmit function");
    console.log("Form submitted with data:", data);
    try {
      console.log("Validating data");
      // await validationSchema.validate(data, { abortEarly: false });
      console.log("Validation passed");
      await axios.post(`${apiUrl}/api/visa-form`, data);
      console.log("Form data sent to API");
      alert(t("formSubmitted"));
      localStorage.removeItem("visaForm");
    } catch (error: unknown) {
      console.log("Inside catch block");
      if (error instanceof yup.ValidationError) {
        console.error("Validation errors:", error.inner);
        alert(t("validationError"));
      } else {
        console.error("Submission error:", error);
        alert(t("submissionError"));
      }
    }
  };

  return (
    <Container>
      <FormWrapper>
        <FormProvider {...methods}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Form submit event triggered");
              handleSubmit(onSubmit)(e);
              console.log("After handleSubmit call");
            }}
          >
            <Spacer />
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
            <QuestionsSection />
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
