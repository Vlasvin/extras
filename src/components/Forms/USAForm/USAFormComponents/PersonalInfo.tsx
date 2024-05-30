import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Control, FieldErrors, useWatch } from "react-hook-form";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import ControlledTextField from "./ControlledTextField";
import InfoDialog from "./InfoDialog";
import { CustomBox } from "../USAFormStyles";

interface PersonalInfoProps {
  control: Control<any>;
  errors: FieldErrors<any>;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ control, errors }) => {
  const { t } = useTranslation();
  const passportLost = useWatch({
    control,
    name: "personalInfo.passportLost",
  });
  const otherCitizenship = useWatch({
    control,
    name: "personalInfo.otherCitizenship",
  });
  const otherMediaResources = useWatch({
    control,
    name: "personalInfo.otherMediaResources",
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
        <Grid item xs={12}>
          <CustomBox>
            <ControlledTextField
              name="personalInfo.surname"
              control={control}
              errors={errors}
              label={t("personalInfo.surname")}
              showInfoIcon={true}
              onInfoIconClick={() =>
                handleOpenDialog(
                  t("personalInfo.surnameInfoTitle"),
                  t("personalInfo.passportDetails")
                )
              }
            />
          </CustomBox>
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
          {" "}
          <CustomBox>
            <ControlledTextField
              name="personalInfo.photo"
              control={control}
              errors={errors}
              label={t("personalInfo.photo")}
              type="file"
              inputLabelProps={{ shrink: true }}
              showInfoIcon={true}
              onInfoIconClick={() =>
                handleOpenDialog(
                  t("personalInfo.photoInfoTitle"),
                  t("personalInfo.photoInfoText")
                )
              }
            />{" "}
          </CustomBox>
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
          {" "}
          <CustomBox>
            <ControlledTextField
              name="personalInfo.otherNames"
              control={control}
              errors={errors}
              label={t("personalInfo.otherNames")}
              showInfoIcon={true}
              onInfoIconClick={() =>
                handleOpenDialog(
                  t("personalInfo.otherNamesInfoTitle"),
                  t("personalInfo.otherNamesInfoText")
                )
              }
            />{" "}
          </CustomBox>
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
          {" "}
          <CustomBox>
            <ControlledTextField
              name="personalInfo.residenceAddress"
              control={control}
              errors={errors}
              label={t("personalInfo.residenceAddress")}
              showInfoIcon={true}
              onInfoIconClick={() =>
                handleOpenDialog(
                  t("personalInfo.addressInfoTitle"),
                  t("personalInfo.actualInfoAddress")
                )
              }
            />{" "}
          </CustomBox>
        </Grid>
        <Grid item xs={12}>
          {" "}
          <CustomBox>
            <ControlledTextField
              name="personalInfo.registeredAddress"
              control={control}
              errors={errors}
              label={t("personalInfo.registeredAddress")}
              showInfoIcon={true}
              onInfoIconClick={() =>
                handleOpenDialog(
                  t("personalInfo.addressInfoTitle"),
                  t("personalInfo.addressInfoText")
                )
              }
            />{" "}
          </CustomBox>
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
          {" "}
          <CustomBox>
            <ControlledTextField
              name="personalInfo.socialMedia"
              control={control}
              errors={errors}
              label={t("personalInfo.socialMedia")}
              showInfoIcon={true}
              onInfoIconClick={() =>
                handleOpenDialog(
                  t("personalInfo.socialInfoTitle"),
                  t("personalInfo.socialInfo")
                )
              }
            />{" "}
          </CustomBox>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              {t("personalInfo.otherMediaResources")}
            </FormLabel>
            <RadioGroup
              row
              name="personalInfo.otherMediaResources"
              defaultValue="no"
            >
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    {...control.register("personalInfo.otherMediaResources")}
                  />
                }
                label={t("yes")}
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    {...control.register("personalInfo.otherMediaResources")}
                  />
                }
                label={t("no")}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        {otherMediaResources === "yes" && (
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
