import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Grid, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import ControlledTextField from "./ControlledTextField";
import InfoDialog from "./InfoDialog";
import { getErrorMessage } from "utils/formUtils";

interface PurposeOfTravelProps {
  control: Control<any>;
  errors: FieldErrors<any>;
}

const PurposeOfTravel: React.FC<PurposeOfTravelProps> = ({
  control,
  errors,
}) => {
  const { t } = useTranslation();
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogTitle, setDialogTitle] = React.useState("");
  const [dialogContent, setDialogContent] = React.useState("");

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
      <h2>{t("purposeOfTravel.title")}</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ControlledTextField
            name="purposeOfTravel.travelPlans.arrivalDate"
            control={control}
            errors={errors}
            label={t("purposeOfTravel.travelPlans.arrivalDate")}
            showInfoIcon={true}
            onInfoIconClick={() =>
              handleOpenDialog(
                t("purposeOfTravel.travelPlans.arrivalDate"),
                t("purposeOfTravel.travelPlans.note")
              )
            }
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="purposeOfTravel.travelPlans.arrivalCity"
            control={control}
            errors={errors}
            label={t("purposeOfTravel.travelPlans.arrivalCity")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="purposeOfTravel.travelPlans.placesToVisit"
            control={control}
            errors={errors}
            label={t("purposeOfTravel.travelPlans.placesToVisit")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="purposeOfTravel.addressInUSA"
            control={control}
            errors={errors}
            label={t("purposeOfTravel.addressInUSA")}
          />
        </Grid>
        <Grid item xs={12}>
          <h3>{t("purposeOfTravel.invitingPartyInfo")}</h3>
          <ControlledTextField
            name="purposeOfTravel.invitingParty.name"
            control={control}
            errors={errors}
            label={t("purposeOfTravel.invitingParty.name")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="purposeOfTravel.invitingParty.phone"
            control={control}
            errors={errors}
            label={t("purposeOfTravel.invitingParty.phone")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="purposeOfTravel.invitingParty.email"
            control={control}
            errors={errors}
            label={t("purposeOfTravel.invitingParty.email")}
          />
        </Grid>
        <Grid item xs={12}>
          <h3>{t("purposeOfTravel.invitingParty.relationship")}</h3>
          <Controller
            name="purposeOfTravel.invitingParty.relationship"
            control={control}
            render={({ field }) => (
              <RadioGroup {...field}>
                <FormControlLabel
                  value="relative"
                  control={<Radio />}
                  label={t("purposeOfTravel.invitingParty.relative")}
                />
                <FormControlLabel
                  value="friend"
                  control={<Radio />}
                  label={t("purposeOfTravel.invitingParty.friend")}
                />
                <FormControlLabel
                  value="businessPartner"
                  control={<Radio />}
                  label={t("purposeOfTravel.invitingParty.businessPartner")}
                />
                <FormControlLabel
                  value="employer"
                  control={<Radio />}
                  label={t("purposeOfTravel.invitingParty.employer")}
                />
                <FormControlLabel
                  value="educationalInstitution"
                  control={<Radio />}
                  label={t(
                    "purposeOfTravel.invitingParty.educationalInstitution"
                  )}
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label={t("purposeOfTravel.invitingParty.other")}
                />
              </RadioGroup>
            )}
          />
          {getErrorMessage(
            errors,
            "purposeOfTravel.invitingParty.relationship"
          ) && (
            <p>
              {
                getErrorMessage(
                  errors,
                  "purposeOfTravel.invitingParty.relationship"
                ) as string
              }
            </p>
          )}
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="purposeOfTravel.durationOfStay"
            control={control}
            errors={errors}
            label={t("purposeOfTravel.durationOfStay")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="purposeOfTravel.tripFunding"
            control={control}
            errors={errors}
            label={t("purposeOfTravel.tripFunding")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="purposeOfTravel.travelPurpose"
            control={control}
            errors={errors}
            label={t("purposeOfTravel.travelPurpose")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="purposeOfTravel.travelCompanions"
            control={control}
            errors={errors}
            label={t("purposeOfTravel.travelCompanions")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="purposeOfTravel.tripSponsor"
            control={control}
            errors={errors}
            label={t("purposeOfTravel.tripSponsor")}
            showInfoIcon={true}
            onInfoIconClick={() =>
              handleOpenDialog(
                t("purposeOfTravel.tripInfoSponsor"),
                t("purposeOfTravel.sponsorInfo")
              )
            }
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="purposeOfTravel.intentToReturn"
            control={control}
            render={({ field }) => (
              <RadioGroup {...field}>
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label={t("yes")}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label={t("no")}
                />
              </RadioGroup>
            )}
          />
          {getErrorMessage(errors, "purposeOfTravel.intentToReturn") && (
            <p>
              {
                getErrorMessage(
                  errors,
                  "purposeOfTravel.intentToReturn"
                ) as string
              }
            </p>
          )}
        </Grid>
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

export default PurposeOfTravel;
