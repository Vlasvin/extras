import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { getErrorMessage } from "utils/formUtils";
import {
  StyledTextField,
  InputWrapper,
  InfoIconButton,
} from "../USAFormStyles";
import InfoIcon from "@mui/icons-material/Info";

interface ControlledTextFieldProps {
  name: string;
  control: Control<any>;
  errors: FieldErrors<any>;
  label: string;
  type?: string;
  inputLabelProps?: object;
  showInfoIcon?: boolean;
  onInfoIconClick?: () => void;
}

const ControlledTextField: React.FC<ControlledTextFieldProps> = ({
  name,
  control,
  errors,
  label,
  type = "text",
  inputLabelProps = {},
  showInfoIcon = false,
  onInfoIconClick,
}) => (
  <InputWrapper>
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
    {showInfoIcon && (
      <InfoIconButton aria-label="info" onClick={onInfoIconClick}>
        <InfoIcon />
      </InfoIconButton>
    )}
  </InputWrapper>
);

export default ControlledTextField;
