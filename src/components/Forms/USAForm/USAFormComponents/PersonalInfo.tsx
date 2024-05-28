import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useFormContext, Control, FieldErrors } from "react-hook-form";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Tooltip,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ControlledTextField from "./ControlledTextField";
import InfoDialog from "./InfoDialog";

interface PersonalInfoProps {
  control: Control<any>;
  errors: FieldErrors<any>;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ control, errors }) => {
  const { t } = useTranslation();
  const { getValues } = useFormContext();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");

  const handleOpenDialog = (content: string) => {
    setDialogContent(content);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setDialogContent("");
  };

  return (
    <div>
      <h2>{t("personalInfo.title")}</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ position: "relative" }}>
          <ControlledTextField
            name="personalInfo.surname"
            control={control}
            errors={errors}
            label={t("personalInfo.surname")}
          />
          <IconButton
            aria-label="info"
            onClick={() => handleOpenDialog(t("personalInfo.passportDetails"))}
          >
            <InfoIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="personalInfo.givenName"
            control={control}
            errors={errors}
            label={t("personalInfo.givenName")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="personalInfo.patronymic"
            control={control}
            errors={errors}
            label={t("personalInfo.patronymic")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="personalInfo.birthDate"
            control={control}
            errors={errors}
            label={t("personalInfo.birthDate")}
            type="date"
            inputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="personalInfo.photo"
            control={control}
            errors={errors}
            label={t("personalInfo.photo")}
            type="file"
            inputLabelProps={{ shrink: true }}
          />
          <Tooltip title={t("personalInfo.photoInfo")}>
            <IconButton
              aria-label="info"
              onClick={() => handleOpenDialog(t("personalInfo.photoInfoText"))}
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="personalInfo.passportCopy"
            control={control}
            errors={errors}
            label={t("personalInfo.passportCopy")}
            type="file"
            inputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="personalInfo.passportOrInn"
            control={control}
            errors={errors}
            label={t("personalInfo.passportOrInn")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="personalInfo.otherNames"
            control={control}
            errors={errors}
            label={t("personalInfo.otherNames")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="personalInfo.birthPlaceAndDate"
            control={control}
            errors={errors}
            label={t("personalInfo.birthPlaceAndDate")}
          />
        </Grid>
        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  {...control.register("personalInfo.passportLost")}
                  checked={getValues("personalInfo.passportLost")}
                />
              }
              label={t("personalInfo.passportLost")}
            />
          </FormGroup>
        </Grid>
        {getValues("personalInfo.passportLost") && (
          <Grid item xs={12}>
            <ControlledTextField
              name="personalInfo.passportLostDetails"
              control={control}
              errors={errors}
              label={t("personalInfo.passportLostDetails")}
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  {...control.register("personalInfo.otherCitizenship")}
                  checked={getValues("personalInfo.otherCitizenship")}
                />
              }
              label={t("personalInfo.otherCitizenship")}
            />
          </FormGroup>
        </Grid>
        {getValues("personalInfo.otherCitizenship") && (
          <Grid item xs={12}>
            <ControlledTextField
              name="personalInfo.otherPassportDetails"
              control={control}
              errors={errors}
              label={t("personalInfo.otherPassportDetails")}
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <ControlledTextField
            name="personalInfo.residenceAddress"
            control={control}
            errors={errors}
            label={t("personalInfo.residenceAddress")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="personalInfo.registeredAddress"
            control={control}
            errors={errors}
            label={t("personalInfo.registeredAddress")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="personalInfo.contactNumber"
            control={control}
            errors={errors}
            label={t("personalInfo.contactNumber")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="personalInfo.contactNumbersLast5Years"
            control={control}
            errors={errors}
            label={t("personalInfo.contactNumbersLast5Years")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="personalInfo.emailAddress"
            control={control}
            errors={errors}
            label={t("personalInfo.emailAddress")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="personalInfo.emailsLast5Years"
            control={control}
            errors={errors}
            label={t("personalInfo.emailsLast5Years")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="personalInfo.socialMedia"
            control={control}
            errors={errors}
            label={t("personalInfo.socialMedia")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="personalInfo.socialMediaDetails"
            control={control}
            errors={errors}
            label={t("personalInfo.socialMediaDetails")}
          />
        </Grid>
        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  {...control.register("personalInfo.otherMediaResources")}
                  checked={getValues("personalInfo.otherMediaResources")}
                />
              }
              label={t("personalInfo.otherMediaResources")}
            />
          </FormGroup>
        </Grid>
        {getValues("personalInfo.otherMediaResources") && (
          <Grid item xs={12}>
            <ControlledTextField
              name="personalInfo.otherMediaResourceDetails"
              control={control}
              errors={errors}
              label={t("personalInfo.otherMediaResourceDetails")}
            />
          </Grid>
        )}
      </Grid>
      <InfoDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        title={t("personalInfo.infoTitle")}
        content={dialogContent}
      />
    </div>
  );
};

export default PersonalInfo;
