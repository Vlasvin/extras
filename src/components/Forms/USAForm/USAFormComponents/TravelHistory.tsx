import React from "react";
import { useTranslation } from "react-i18next";
import {
  Controller,
  Control,
  FieldErrors,
  useFormContext,
} from "react-hook-form";
import { RadioGroup, FormControlLabel, Radio, Typography } from "@mui/material";
import { getErrorMessage } from "utils/formUtils";

import ControlledTextField from "./ControlledTextField";
interface TravelHistoryProps {
  control: Control<any>;
  errors: FieldErrors<any>;
}

const TravelHistory: React.FC<TravelHistoryProps> = ({ control, errors }) => {
  const { t } = useTranslation();
  const { watch } = useFormContext();

  const visitedUSA = watch("travelHistory.visitedUSA");
  const visaDenied = watch("travelHistory.visaDenied");
  const previousTravel = watch("travelHistory.previousTravel");
  const immigrationPetition = watch("travelHistory.immigrationPetition");
  const driverLicense = watch("travelHistory.driverLicense");
  const ssn = watch("travelHistory.ssn");

  return (
    <div>
      <h2>{t("travelHistory.title")}</h2>

      <Typography variant="h6">{t("travelHistory.visitedUSA")}</Typography>
      <Controller
        name="travelHistory.visitedUSA"
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label={t("yes")}
            />
            <FormControlLabel value="no" control={<Radio />} label={t("no")} />
          </RadioGroup>
        )}
      />
      {getErrorMessage(errors, "travelHistory.visitedUSA") && (
        <p>{getErrorMessage(errors, "travelHistory.visitedUSA") as string}</p>
      )}
      {visitedUSA === "yes" && (
        <>
          <ControlledTextField
            name="travelHistory.visaDates"
            control={control}
            errors={errors}
            label={t("travelHistory.visaDates")}
          />
          <ControlledTextField
            name="travelHistory.visaNumber"
            control={control}
            errors={errors}
            label={t("travelHistory.visaNumber")}
          />
        </>
      )}

      <Typography variant="h6">{t("travelHistory.visaDenied")}</Typography>
      <Controller
        name="travelHistory.visaDenied"
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label={t("yes")}
            />
            <FormControlLabel value="no" control={<Radio />} label={t("no")} />
          </RadioGroup>
        )}
      />
      {getErrorMessage(errors, "travelHistory.visaDenied") && (
        <p>{getErrorMessage(errors, "travelHistory.visaDenied") as string}</p>
      )}
      {visaDenied === "yes" && (
        <>
          <ControlledTextField
            name="travelHistory.denialDate"
            control={control}
            errors={errors}
            label={t("travelHistory.denialDate")}
          />
          <ControlledTextField
            name="travelHistory.denialPlace"
            control={control}
            errors={errors}
            label={t("travelHistory.denialPlace")}
          />
          <ControlledTextField
            name="travelHistory.denialType"
            control={control}
            errors={errors}
            label={t("travelHistory.denialType")}
          />
        </>
      )}

      <Typography variant="h6">{t("travelHistory.previousTravel")}</Typography>
      <Controller
        name="travelHistory.previousTravel"
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label={t("yes")}
            />
            <FormControlLabel value="no" control={<Radio />} label={t("no")} />
          </RadioGroup>
        )}
      />
      {getErrorMessage(errors, "travelHistory.previousTravel") && (
        <p>
          {getErrorMessage(errors, "travelHistory.previousTravel") as string}
        </p>
      )}
      {previousTravel === "yes" && (
        <>
          {[...Array(5)].map((_, index) => (
            <React.Fragment key={index}>
              <ControlledTextField
                name={`travelHistory.arrivalDate${index}`}
                control={control}
                errors={errors}
                label={t("travelHistory.arrivalDate")}
              />
              <ControlledTextField
                name={`travelHistory.stayDuration${index}`}
                control={control}
                errors={errors}
                label={t("travelHistory.stayDuration")}
              />
            </React.Fragment>
          ))}
        </>
      )}

      <Typography variant="h6">
        {t("travelHistory.immigrationPetition")}
      </Typography>
      <Controller
        name="travelHistory.immigrationPetition"
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label={t("yes")}
            />
            <FormControlLabel value="no" control={<Radio />} label={t("no")} />
          </RadioGroup>
        )}
      />
      {getErrorMessage(errors, "travelHistory.immigrationPetition") && (
        <p>
          {
            getErrorMessage(
              errors,
              "travelHistory.immigrationPetition"
            ) as string
          }
        </p>
      )}
      {immigrationPetition === "yes" && (
        <ControlledTextField
          name="travelHistory.petitionDetails"
          control={control}
          errors={errors}
          label={t("travelHistory.petitionDetails")}
        />
      )}

      <Typography variant="h6">{t("travelHistory.driverLicense")}</Typography>
      <Controller
        name="travelHistory.driverLicense"
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label={t("yes")}
            />
            <FormControlLabel value="no" control={<Radio />} label={t("no")} />
          </RadioGroup>
        )}
      />
      {getErrorMessage(errors, "travelHistory.driverLicense") && (
        <p>
          {getErrorMessage(errors, "travelHistory.driverLicense") as string}
        </p>
      )}
      {driverLicense === "yes" && (
        <ControlledTextField
          name="travelHistory.licenseDetails"
          control={control}
          errors={errors}
          label={t("travelHistory.licenseDetails")}
        />
      )}

      <Typography variant="h6">{t("travelHistory.ssn")}</Typography>
      <Controller
        name="travelHistory.ssn"
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label={t("yes")}
            />
            <FormControlLabel value="no" control={<Radio />} label={t("no")} />
          </RadioGroup>
        )}
      />
      {getErrorMessage(errors, "travelHistory.ssn") && (
        <p>{getErrorMessage(errors, "travelHistory.ssn") as string}</p>
      )}
      {ssn === "yes" && (
        <ControlledTextField
          name="travelHistory.ssnDetails"
          control={control}
          errors={errors}
          label={t("travelHistory.ssnDetails")}
        />
      )}

      <ControlledTextField
        name="travelHistory.countriesVisited"
        control={control}
        errors={errors}
        label={t("travelHistory.countriesVisited")}
      />
    </div>
  );
};

export default TravelHistory;
