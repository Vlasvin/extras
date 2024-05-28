import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";
import { getErrorMessage } from "utils/formUtils";
import { StyledTextField } from "../USAFormStyles";

interface ControlledTextFieldProps {
  name: string;
  control: Control<any>;
  errors: FieldErrors<any>;
  label: string;
  type?: string;
  inputLabelProps?: object;
}

const ControlledTextField: React.FC<ControlledTextFieldProps> = ({
  name,
  control,
  errors,
  label,
  type = "text",
  inputLabelProps = {},
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <StyledTextField
        {...field}
        label={label}
        type={type}
        InputLabelProps={inputLabelProps}
        error={!!getErrorMessage(errors, name)}
        helperText={(getErrorMessage(errors, name) as string) || ""}
        fullWidth
      />
    )}
  />
);

export default ControlledTextField;
