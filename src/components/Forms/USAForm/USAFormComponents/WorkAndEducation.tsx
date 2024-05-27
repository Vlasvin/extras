import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";
import { getErrorMessage } from "utils/formUtils";

interface WorkAndEducationProps {
  control: Control<any>;
  errors: FieldErrors<any>;
}

const WorkAndEducation: React.FC<WorkAndEducationProps> = ({
  control,
  errors,
}) => (
  <div>
    <h2>Робота та освіта</h2>
    <Controller
      name="workOrStudy"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="Робота або навчання"
          error={!!errors.workOrStudy}
          helperText={getErrorMessage(errors, "workOrStudy")}
        />
      )}
    />
    <Controller
      name="profession"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="Професія"
          error={!!errors.profession}
          helperText={getErrorMessage(errors, "profession")}
        />
      )}
    />
    <Controller
      name="organizationName"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="Назва організації"
          error={!!errors.organizationName}
          helperText={getErrorMessage(errors, "organizationName")}
        />
      )}
    />
    {/* Інші поля роботи та освіти */}
  </div>
);

export default WorkAndEducation;
