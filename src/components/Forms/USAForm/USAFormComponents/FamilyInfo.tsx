import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";
import { getErrorMessage } from "utils/formUtils";

interface FamilyInfoProps {
  control: Control<any>;
  errors: FieldErrors<any>;
}

const FamilyInfo: React.FC<FamilyInfoProps> = ({ control, errors }) => (
  <div>
    <h2>Дані про сім’ю</h2>
    <Controller
      name="familyInfo.maritalStatus"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="Сімейний стан"
          error={!!getErrorMessage(errors, "familyInfo.maritalStatus")}
          helperText={
            (getErrorMessage(errors, "familyInfo.maritalStatus") as string) ||
            ""
          }
        />
      )}
    />
    {/* Інші поля даних про сім’ю */}
  </div>
);

export default FamilyInfo;
