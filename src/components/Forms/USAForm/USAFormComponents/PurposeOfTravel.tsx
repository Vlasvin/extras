import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { TextField, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { getErrorMessage } from "utils/formUtils";

interface PurposeOfTravelProps {
  control: Control<any>;
  errors: FieldErrors<any>;
}

const PurposeOfTravel: React.FC<PurposeOfTravelProps> = ({
  control,
  errors,
}) => (
  <div>
    <h2>Мета поїздки</h2>
    <Controller
      name="purposeOfTravel.stayDuration"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="Скільки плануєте перебувати у США?"
          error={!!getErrorMessage(errors, "purposeOfTravel.stayDuration")}
          helperText={
            (getErrorMessage(
              errors,
              "purposeOfTravel.stayDuration"
            ) as string) || ""
          }
        />
      )}
    />
    <Controller
      name="purposeOfTravel.tripFunding"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="Як Ви плануєте фінансувати свою подорож?"
          error={!!getErrorMessage(errors, "purposeOfTravel.tripFunding")}
          helperText={
            (getErrorMessage(
              errors,
              "purposeOfTravel.tripFunding"
            ) as string) || ""
          }
        />
      )}
    />
    <Controller
      name="purposeOfTravel.intentToReturn"
      control={control}
      render={({ field }) => (
        <RadioGroup {...field}>
          <FormControlLabel value="yes" control={<Radio />} label="Так" />
          <FormControlLabel value="no" control={<Radio />} label="Ні" />
        </RadioGroup>
      )}
    />
    {getErrorMessage(errors, "purposeOfTravel.intentToReturn") && (
      <p>
        {getErrorMessage(errors, "purposeOfTravel.intentToReturn") as string}
      </p>
    )}
    {/* Інші поля мети поїздки */}
  </div>
);

export default PurposeOfTravel;
