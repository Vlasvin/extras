import React from "react";
import {
  Control,
  Controller,
  FieldErrors,
  useFormContext,
} from "react-hook-form";
import { TextField, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { getErrorMessage } from "utils/formUtils";

interface TravelHistoryProps {
  control: Control<any>;
  errors: FieldErrors<any>;
}

const TravelHistory: React.FC<TravelHistoryProps> = ({ control, errors }) => {
  const { getValues } = useFormContext();

  return (
    <div>
      <h2>Історія подорожей</h2>
      <Controller
        name="travelHistory.visitedUSA"
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            <FormControlLabel value="yes" control={<Radio />} label="Так" />
            <FormControlLabel value="no" control={<Radio />} label="Ні" />
          </RadioGroup>
        )}
      />
      {getErrorMessage(errors, "travelHistory.visitedUSA") && (
        <p>{getErrorMessage(errors, "travelHistory.visitedUSA") as string}</p>
      )}
      {getValues("travelHistory.visitedUSA") === "yes" && (
        <>
          <Controller
            name="travelHistory.usaVisitDates"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Коли Ви відвідували США?"
                error={!!getErrorMessage(errors, "travelHistory.usaVisitDates")}
                helperText={
                  (getErrorMessage(
                    errors,
                    "travelHistory.usaVisitDates"
                  ) as string) || ""
                }
              />
            )}
          />
          <Controller
            name="travelHistory.usaVisitPurpose"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Яка була мета Вашого візиту?"
                error={
                  !!getErrorMessage(errors, "travelHistory.usaVisitPurpose")
                }
                helperText={
                  (getErrorMessage(
                    errors,
                    "travelHistory.usaVisitPurpose"
                  ) as string) || ""
                }
              />
            )}
          />
        </>
      )}
      <Controller
        name="travelHistory.otherTravels"
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            <FormControlLabel value="yes" control={<Radio />} label="Так" />
            <FormControlLabel value="no" control={<Radio />} label="Ні" />
          </RadioGroup>
        )}
      />
      {getErrorMessage(errors, "travelHistory.otherTravels") && (
        <p>{getErrorMessage(errors, "travelHistory.otherTravels") as string}</p>
      )}
      {getValues("travelHistory.otherTravels") === "yes" && (
        <Controller
          name="travelHistory.travelCountries"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Перелік країн"
              error={!!getErrorMessage(errors, "travelHistory.travelCountries")}
              helperText={
                (getErrorMessage(
                  errors,
                  "travelHistory.travelCountries"
                ) as string) || ""
              }
            />
          )}
        />
      )}
    </div>
  );
};

export default TravelHistory;
