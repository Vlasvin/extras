// import React, { useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { useForm, FormProvider } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Button } from "@mui/material";
// import { schema } from "validations/validationSchema";
// import PersonalInfo from "./USAFormComponents/PersonalInfo";
// import FamilyInfo from "./USAFormComponents/FamilyInfo";
// import PurposeOfTravel from "./USAFormComponents/PurposeOfTravel";
// import TravelHistory from "./USAFormComponents/TravelHistory";
// import WorkAndEducation from "./USAFormComponents/WorkAndEducation";
// import { Container, FormWrapper, Spacer } from "./USAFormStyles";

// const LOCAL_STORAGE_KEY = "visaForm";

// const VisaForm = () => {
//   const { t } = useTranslation();

//   const methods = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       personalInfo: {
//         surname: "",
//         givenName: "",
//         patronymic: "",
//         photo: undefined,
//         passportCopy: undefined,
//         passportDetails: "",
//         passportOrInn: "",
//         otherNames: "",
//         birthPlaceAndDate: "",
//         passportLost: false,
//         passportLostDetails: "",
//         otherCitizenship: false,
//         otherPassportDetails: "",
//         residenceAddress: "",
//         registeredAddress: "",
//         contactNumber: "",
//         contactNumbersLast5Years: "",
//         emailAddress: "",
//         emailsLast5Years: "",
//         socialMedia: "",
//         socialMediaFile: undefined,
//         otherMediaResources: false,
//         otherMediaResourceDetails: "",
//       },
//       familyInfo: {},
//       purposeOfTravel: {},
//       travelHistory: {},
//       workAndEducation: {
//         currentEmployer: {
//           companyName: "",
//           address: "",
//           phone: "",
//           startDate: undefined,
//           position: "",
//           duties: "",
//         },
//         averageMonthlyIncome: undefined,
//         previousEmployer: [],
//         highSchool: {
//           name: "",
//           address: "",
//           startDate: undefined,
//           endDate: undefined,
//         },
//         higherEducation: [],
//         socialOrganizations: undefined,
//         tribe: undefined,
//         militaryService: undefined,
//       },
//     },
//   });

//   useEffect(() => {
//     const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
//     if (savedData) {
//       methods.reset(JSON.parse(savedData));
//     }
//   }, [methods]);

//   useEffect(() => {
//     const subscription = methods.watch((value) => {
//       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value));
//     });
//     return () => subscription.unsubscribe();
//   }, [methods]);

//   const onSubmit = async (data: any) => {
//     console.log("Form Data:", data);
//     try {
//       const response = await fetch("/api/visa-form", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         console.log("Form submitted successfully");
//         localStorage.removeItem(LOCAL_STORAGE_KEY);
//       } else {
//         console.error("Error submitting form");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleSubmit = methods.handleSubmit(
//     (data) => {
//       onSubmit(data);
//     },
//     (errors) => {
//       console.error("Form validation errors:", errors);
//     }
//   );

//   return (
//     <Container>
//       <FormWrapper>
//         <FormProvider {...methods}>
//           <form onSubmit={handleSubmit}>
//             <PersonalInfo
//               control={methods.control}
//               errors={methods.formState.errors}
//             />
//             <Spacer />
//             <FamilyInfo
//               control={methods.control}
//               errors={methods.formState.errors}
//             />
//             <Spacer />
//             <PurposeOfTravel
//               control={methods.control}
//               errors={methods.formState.errors}
//             />
//             <Spacer />
//             <TravelHistory
//               control={methods.control}
//               errors={methods.formState.errors}
//             />
//             <Spacer />
//             <WorkAndEducation
//               control={methods.control}
//               errors={methods.formState.errors}
//             />
//             <Spacer />
//             <Button type="submit" variant="outlined" color="primary">
//               {t("send")}
//             </Button>
//           </form>
//         </FormProvider>
//       </FormWrapper>
//     </Container>
//   );
// };

// export default VisaForm;

import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
// import { validationSchema } from "validations/validationSchema";
import PersonalInfo from "./USAFormComponents/PersonalInfo";
import FamilyInfo from "./USAFormComponents/FamilyInfo";
import PurposeOfTravel from "./USAFormComponents/PurposeOfTravel";
import TravelHistory from "./USAFormComponents/TravelHistory";
import WorkAndEducation from "./USAFormComponents/WorkAndEducation";
import { Container, FormWrapper } from "./USAFormStyles";

const VisaForm: React.FC = () => {
  const { t } = useTranslation();
  const methods = useForm({
    defaultValues: JSON.parse(localStorage.getItem("visaForm") || "{}"),
  });

  const { handleSubmit, watch } = methods;

  useEffect(() => {
    const subscription = watch((data) => {
      localStorage.setItem("visaForm", JSON.stringify(data));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = async (data: any) => {
    try {
      await axios.post("/api/visa-form", data);
      alert(t("formSubmitted"));
      localStorage.removeItem("visaForm");
    } catch (error) {
      alert(t("submissionError"));
    }
  };

  return (
    <Container>
      <FormWrapper>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
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
