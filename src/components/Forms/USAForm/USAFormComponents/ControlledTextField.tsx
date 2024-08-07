import React, { useRef } from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { TextField } from "@mui/material";

import { getErrorMessage } from "utils/formUtils";
import {
  InputWrapper,
  InfoIconButton,
  FileInputButton,
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
  showFileUpload?: boolean;
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
  showFileUpload = false,
}) => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    onChange: (file: File | null) => void
  ) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      console.log(`Selected file - ${file.name}`);
      onChange(file);
    }
  };

  return (
    <InputWrapper>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <TextField
              {...field}
              label={label}
              type={type}
              InputLabelProps={inputLabelProps}
              error={!!getErrorMessage(errors, name)}
              helperText={getErrorMessage(errors, name) || ""}
              fullWidth
            />
            {showInfoIcon && (
              <Tooltip title={t("pushToInfo")}>
                <InfoIconButton aria-label="info" onClick={onInfoIconClick}>
                  <InfoIcon />
                </InfoIconButton>
              </Tooltip>
            )}
            {showFileUpload && (
              <>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={(e) =>
                    handleFileChange(e, (file) => field.onChange(file))
                  }
                />
                <Tooltip title={t("pushToUpload")}>
                  <FileInputButton
                    aria-label="upload file"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <UploadFileIcon />
                  </FileInputButton>
                </Tooltip>
              </>
            )}
          </>
        )}
      />
    </InputWrapper>
  );
};

export default ControlledTextField;
