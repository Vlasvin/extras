import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";

import { getErrorMessage } from "utils/formUtils";
import {
  StyledTextField,
  InputWrapper,
  InfoIconButton,
} from "../USAFormStyles";
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
}) => {
  const { t } = useTranslation();

  return (
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
        <Tooltip title={t("personalInfo.pushToInfo")}>
          <InfoIconButton aria-label="info" onClick={onInfoIconClick}>
            <InfoIcon />
          </InfoIconButton>
        </Tooltip>
      )}
    </InputWrapper>
  );
};

export default ControlledTextField;
