import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Control, Controller, FieldErrors } from "react-hook-form";
import {
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import ControlledTextField from "./ControlledTextField";
import { SectionTitle } from "components/Services/ServicesStyles";
import { CustomBox } from "../USAFormStyles";
import InfoDialog from "./InfoDialog";

interface FamilyInfoProps {
  control: Control<any>;
  errors: FieldErrors<any>;
}

const FamilyInfo: React.FC<FamilyInfoProps> = ({ control, errors }) => {
  const { t } = useTranslation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogContent, setDialogContent] = useState("");
  const [relativesInUSA, setRelativesInUSA] = useState("no");

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

  const maritalStatusOptions = t("familyInfo.maritalInfoSubscribe", {
    returnObjects: true,
  }) as string[];

  return (
    <div>
      <SectionTitle>{t("familyInfo.title")}</SectionTitle>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ControlledTextField
            name="familyInfo.fatherName"
            control={control}
            errors={errors}
            label={t("familyInfo.fatherName")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="familyInfo.fatherDOB"
            control={control}
            errors={errors}
            label={t("familyInfo.fatherDOB")}
            type="date"
            inputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="familyInfo.motherName"
            control={control}
            errors={errors}
            label={t("familyInfo.motherName")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="familyInfo.motherDOB"
            control={control}
            errors={errors}
            label={t("familyInfo.motherDOB")}
            type="date"
            inputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              {t("familyInfo.parentsInUSA")}
            </FormLabel>
            <Controller
              name="familyInfo.parentsInUSA"
              control={control}
              defaultValue="no"
              render={({ field }) => (
                <RadioGroup row {...field}>
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
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <CustomBox>
            <ControlledTextField
              name="familyInfo.maritalStatus"
              control={control}
              errors={errors}
              label={t("familyInfo.maritalStatus")}
              showInfoIcon={true}
              onInfoIconClick={() =>
                handleOpenDialog(
                  t("familyInfo.maritalInfoTitle"),
                  maritalStatusOptions.join("<br/>")
                )
              }
            />
          </CustomBox>
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="familyInfo.spouseName"
            control={control}
            errors={errors}
            label={t("familyInfo.spouseName")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="familyInfo.spouseMaidenName"
            control={control}
            errors={errors}
            label={t("familyInfo.spouseMaidenName")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="familyInfo.spouseDOB"
            control={control}
            errors={errors}
            label={t("familyInfo.spouseDOB")}
            type="date"
            inputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="familyInfo.spouseBirthPlace"
            control={control}
            errors={errors}
            label={t("familyInfo.spouseBirthPlace")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="familyInfo.spouseNationality"
            control={control}
            errors={errors}
            label={t("familyInfo.spouseNationality")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="familyInfo.spouseAddress"
            control={control}
            errors={errors}
            label={t("familyInfo.spouseAddress")}
          />
        </Grid>

        <Grid item xs={12}>
          <CustomBox>
            <ControlledTextField
              name="familyInfo.previousMarriages"
              control={control}
              errors={errors}
              label={t("familyInfo.previousMarriages")}
              showInfoIcon={true}
              onInfoIconClick={() =>
                handleOpenDialog(
                  t("familyInfo.previousMarriageInfoTitle"),
                  t("familyInfo.previousMarriageInfoSubscribe")
                )
              }
            />
          </CustomBox>
        </Grid>

        <Grid item xs={12}>
          <ControlledTextField
            name="familyInfo.previousSpouses"
            control={control}
            errors={errors}
            label={t("familyInfo.previousSpouses")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="familyInfo.previousSpouseDOB"
            control={control}
            errors={errors}
            label={t("familyInfo.previousSpouseDOB")}
            type="date"
            inputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="familyInfo.marriageStartDate"
            control={control}
            errors={errors}
            label={t("familyInfo.marriageStartDate")}
            type="date"
            inputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="familyInfo.marriageEndDate"
            control={control}
            errors={errors}
            label={t("familyInfo.marriageEndDate")}
            type="date"
            inputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="familyInfo.previousSpouseBirthPlace"
            control={control}
            errors={errors}
            label={t("familyInfo.previousSpouseBirthPlace")}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="familyInfo.previousSpouseNationality"
            control={control}
            errors={errors}
            label={t("familyInfo.previousSpouseNationality")}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              {t("familyInfo.relativesInUSA")}
            </FormLabel>
            <Controller
              name="familyInfo.relativesInUSA"
              control={control}
              defaultValue="no"
              render={({ field }) => (
                <RadioGroup
                  row
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    setRelativesInUSA(e.target.value);
                  }}
                >
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
          </FormControl>
        </Grid>
        {relativesInUSA === "yes" && (
          <>
            <Grid item xs={12}>
              <ControlledTextField
                name="familyInfo.relativeNames"
                control={control}
                errors={errors}
                label={t("familyInfo.relativeNames")}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomBox>
                <ControlledTextField
                  name="familyInfo.relativeStatus"
                  control={control}
                  errors={errors}
                  label={t("familyInfo.relativeStatus")}
                  showInfoIcon={true}
                  onInfoIconClick={() =>
                    handleOpenDialog(
                      t("familyInfo.relativeStatusInfoTitle"),
                      t("familyInfo.relativeStatusInfoSubscribe")
                    )
                  }
                />
              </CustomBox>
            </Grid>
          </>
        )}
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              {t("familyInfo.otherRelativesInUSA")}
            </FormLabel>
            <Controller
              name="familyInfo.otherRelativesInUSA"
              control={control}
              defaultValue="no"
              render={({ field }) => (
                <RadioGroup row {...field}>
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
          </FormControl>
        </Grid>
      </Grid>{" "}
      <InfoDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        title={dialogTitle}
        content={dialogContent}
      />
    </div>
  );
};

export default FamilyInfo;
