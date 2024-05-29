import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useFormContext,
  Control,
  FieldErrors,
  useWatch,
} from "react-hook-form";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
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
  const passportLost = useWatch({
    control,
    name: "personalInfo.passportLost",
  });
  const otherCitizenship = useWatch({
    control,
    name: "personalInfo.otherCitizenship",
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogContent, setDialogContent] = useState("");

  const handleOpenDialog = (title: string, content: string) => {
    setDialogTitle(title);
    setDialogContent(content);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setDialogTitle("");
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
          <Tooltip title={t("personalInfo.pushToInfo")}>
            <IconButton
              aria-label="info"
              onClick={() =>
                handleOpenDialog(
                  t("personalInfo.surnameInfoTitle"),
                  t("personalInfo.passportDetails")
                )
              }
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
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
          <Tooltip title={t("personalInfo.pushToInfo")}>
            <IconButton
              aria-label="info"
              onClick={() =>
                handleOpenDialog(
                  t("personalInfo.photoInfoTitle"),
                  t("personalInfo.photoInfoText")
                )
              }
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
        <Grid item xs={12} style={{ position: "relative" }}>
          <ControlledTextField
            name="personalInfo.otherNames"
            control={control}
            errors={errors}
            label={t("personalInfo.otherNames")}
          />
          <Tooltip title={t("personalInfo.pushToInfo")}>
            <IconButton
              aria-label="info"
              onClick={() =>
                handleOpenDialog(
                  t("personalInfo.otherNamesInfoTitle"),
                  t("personalInfo.otherNamesInfoText")
                )
              }
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
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
          <FormControl component="fieldset">
            <FormLabel component="legend">
              {t("personalInfo.passportLost")}
            </FormLabel>
            <RadioGroup row name="personalInfo.passportLost" defaultValue="no">
              <FormControlLabel
                value="yes"
                control={
                  <Radio {...control.register("personalInfo.passportLost")} />
                }
                label={t("yes")}
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio {...control.register("personalInfo.passportLost")} />
                }
                label={t("no")}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        {passportLost === "yes" && (
          <Grid item xs={12}>
            <ControlledTextField
              name="personalInfo.passportLostNumber"
              control={control}
              errors={errors}
              label={t("personalInfo.passportLostDetails")}
            />
          </Grid>
        )}

        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              {t("personalInfo.otherCitizenship")}
            </FormLabel>
            <RadioGroup
              row
              name="personalInfo.otherCitizenship"
              defaultValue="no"
            >
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    {...control.register("personalInfo.otherCitizenship")}
                  />
                }
                label={t("yes")}
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    {...control.register("personalInfo.otherCitizenship")}
                  />
                }
                label={t("no")}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        {otherCitizenship === "yes" && (
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
          <Tooltip title={t("personalInfo.pushToInfo")}>
            <IconButton
              aria-label="info"
              onClick={() =>
                handleOpenDialog(
                  t("personalInfo.otherNamesInfoTitle"),
                  t("personalInfo.otherNamesInfoText")
                )
              }
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="personalInfo.registeredAddress"
            control={control}
            errors={errors}
            label={t("personalInfo.registeredAddress")}
          />
          <Tooltip title={t("personalInfo.pushToInfo")}>
            <IconButton
              aria-label="info"
              onClick={() =>
                handleOpenDialog(
                  t("personalInfo.otherNamesInfoTitle"),
                  t("personalInfo.otherNamesInfoText")
                )
              }
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
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
        title={dialogTitle}
        content={dialogContent}
      />
    </div>
  );
};

export default PersonalInfo;
