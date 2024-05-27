import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";
import { getErrorMessage } from "utils/formUtils";

interface PersonalInfoProps {
  control: Control<any>;
  errors: FieldErrors<any>;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ control, errors }) => (
  <div>
    <h2>Особиста інформація</h2>
    <Controller
      name="personalInfo.surname"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="Прізвище"
          error={!!getErrorMessage(errors, "personalInfo.surname")}
          helperText={
            (getErrorMessage(errors, "personalInfo.surname") as string) || ""
          }
        />
      )}
    />
    <Controller
      name="personalInfo.givenName"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="Ім'я"
          error={!!getErrorMessage(errors, "personalInfo.givenName")}
          helperText={
            (getErrorMessage(errors, "personalInfo.givenName") as string) || ""
          }
        />
      )}
    />
    <Controller
      name="personalInfo.patronymic"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="По батькові"
          error={!!getErrorMessage(errors, "personalInfo.patronymic")}
          helperText={
            (getErrorMessage(errors, "personalInfo.patronymic") as string) || ""
          }
        />
      )}
    />
    <Controller
      name="personalInfo.birthDate"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="Дата народження"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!getErrorMessage(errors, "personalInfo.birthDate")}
          helperText={
            (getErrorMessage(errors, "personalInfo.birthDate") as string) || ""
          }
        />
      )}
    />
    {/* Інші поля особистої інформації */}
  </div>
);

export default PersonalInfo;
