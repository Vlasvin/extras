import React, { useState } from "react";
import { Control, Controller, FieldErrors, useWatch } from "react-hook-form";
import { Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useTranslation } from "react-i18next";

import { getErrorMessage } from "utils/formUtils";
import ControlledTextField from "./ControlledTextField";
import InfoDialog from "./InfoDialog";
import { SectionTitle } from "components/Services/ServicesStyles";
import { SmallLabel } from "../USAFormStyles";
interface WorkAndEducationProps {
  control: Control<any>;
  errors: FieldErrors<any>;
}

const WorkAndEducation: React.FC<WorkAndEducationProps> = ({
  control,
  errors,
}) => {
  const { t } = useTranslation();
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = React.useState("");
  const [dialogContent, setDialogContent] = React.useState("");

  const handleOpenDialog = (title: string, content: string) => {
    setDialogTitle(title);
    setDialogContent(content);
    setInfoDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setInfoDialogOpen(false);
  };

  const socialOrganizations = useWatch({
    control,
    name: "socialOrganizations",
  });
  const tribe = useWatch({
    control,
    name: "tribe",
  });
  const militaryService = useWatch({
    control,
    name: "militaryService",
  });

  return (
    <div>
      <SectionTitle>{t("workAndEducation.title")}</SectionTitle>

      <h3>{t("workAndEducation.currentEmployer")}</h3>
      <ControlledTextField
        name="currentEmployer.companyName"
        control={control}
        errors={errors}
        label={t("workAndEducation.companyName")}
        showInfoIcon
        onInfoIconClick={() =>
          handleOpenDialog(
            t("workAndEducation.infoDialogTitle"),
            t("workAndEducation.infoDialogContent")
          )
        }
      />
      <ControlledTextField
        name="currentEmployer.address"
        control={control}
        errors={errors}
        label={t("workAndEducation.address")}
      />
      <ControlledTextField
        name="currentEmployer.phone"
        control={control}
        errors={errors}
        label={t("workAndEducation.phone")}
      />
      <ControlledTextField
        name="currentEmployer.startDate"
        control={control}
        errors={errors}
        label={t("workAndEducation.startDate")}
        type="date"
        inputLabelProps={{ shrink: true }}
      />
      <ControlledTextField
        name="currentEmployer.position"
        control={control}
        errors={errors}
        label={t("workAndEducation.position")}
      />
      <ControlledTextField
        name="currentEmployer.duties"
        control={control}
        errors={errors}
        label={t("workAndEducation.duties")}
      />

      <h3>{t("workAndEducation.averageMonthlyIncome")}</h3>
      <ControlledTextField
        name="averageMonthlyIncome"
        control={control}
        errors={errors}
        label={t("workAndEducation.averageMonthlyIncome")}
      />

      <h3>{t("workAndEducation.previousEmployer")}</h3>
      {[...Array(3)].map((_, index) => (
        <div key={index}>
          <ControlledTextField
            name={`previousEmployer[${index}].companyName`}
            control={control}
            errors={errors}
            label={t("workAndEducation.companyName")}
          />
          <ControlledTextField
            name={`previousEmployer[${index}].address`}
            control={control}
            errors={errors}
            label={t("workAndEducation.address")}
          />
          <ControlledTextField
            name={`previousEmployer[${index}].phone`}
            control={control}
            errors={errors}
            label={t("workAndEducation.phone")}
          />
          <ControlledTextField
            name={`previousEmployer[${index}].startDate`}
            control={control}
            errors={errors}
            label={t("workAndEducation.startDate")}
            type="date"
            inputLabelProps={{ shrink: true }}
          />
          <ControlledTextField
            name={`previousEmployer[${index}].position`}
            control={control}
            errors={errors}
            label={t("workAndEducation.position")}
          />
          <ControlledTextField
            name={`previousEmployer[${index}].duties`}
            control={control}
            errors={errors}
            label={t("workAndEducation.duties")}
          />
        </div>
      ))}

      <h3>{t("workAndEducation.highSchool")}</h3>
      <ControlledTextField
        name="highSchool.name"
        control={control}
        errors={errors}
        label={t("workAndEducation.schoolName")}
      />
      <ControlledTextField
        name="highSchool.address"
        control={control}
        errors={errors}
        label={t("workAndEducation.address")}
      />
      <ControlledTextField
        name="highSchool.startDate"
        control={control}
        errors={errors}
        label={t("workAndEducation.startDate")}
        type="date"
        inputLabelProps={{ shrink: true }}
      />
      <ControlledTextField
        name="highSchool.endDate"
        control={control}
        errors={errors}
        label={t("workAndEducation.endDate")}
        type="date"
        inputLabelProps={{ shrink: true }}
      />

      <h3>{t("workAndEducation.higherEducation")}</h3>
      {[...Array(3)].map((_, index) => (
        <div key={index}>
          <ControlledTextField
            name={`higherEducation[${index}].name`}
            control={control}
            errors={errors}
            label={t("workAndEducation.institutionName")}
          />
          <ControlledTextField
            name={`higherEducation[${index}].address`}
            control={control}
            errors={errors}
            label={t("workAndEducation.address")}
          />
          <ControlledTextField
            name={`higherEducation[${index}].startDate`}
            control={control}
            errors={errors}
            label={t("workAndEducation.startDate")}
            type="date"
            inputLabelProps={{ shrink: true }}
          />
          <ControlledTextField
            name={`higherEducation[${index}].endDate`}
            control={control}
            errors={errors}
            label={t("workAndEducation.endDate")}
            type="date"
            inputLabelProps={{ shrink: true }}
          />
          <ControlledTextField
            name={`higherEducation[${index}].faculty`}
            control={control}
            errors={errors}
            label={t("workAndEducation.faculty")}
          />
        </div>
      ))}

      <Typography variant="h6">
        {t("workAndEducation.socialOrganizations")}
      </Typography>
      <Controller
        name="socialOrganizations"
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label={<SmallLabel>{t("yes")}</SmallLabel>}
            />
            <FormControlLabel
              value="no"
              control={<Radio />}
              label={<SmallLabel>{t("no")}</SmallLabel>}
            />
          </RadioGroup>
        )}
      />
      {getErrorMessage(errors, "socialOrganizations") && (
        <p>{getErrorMessage(errors, "socialOrganizations") as string}</p>
      )}
      {socialOrganizations === "yes" && (
        <ControlledTextField
          name="socialOrganizations.details"
          control={control}
          errors={errors}
          label={t("workAndEducation.socialOrganizationsDetails")}
        />
      )}

      <Typography variant="h6">{t("workAndEducation.tribe")}</Typography>
      <Controller
        name="tribe"
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label={<SmallLabel>{t("yes")}</SmallLabel>}
            />
            <FormControlLabel
              value="no"
              control={<Radio />}
              label={<SmallLabel>{t("no")}</SmallLabel>}
            />
          </RadioGroup>
        )}
      />
      {getErrorMessage(errors, "tribe") && (
        <p>{getErrorMessage(errors, "tribe") as string}</p>
      )}
      {tribe === "yes" && (
        <ControlledTextField
          name="tribe.details"
          control={control}
          errors={errors}
          label={t("workAndEducation.tribeDetails")}
        />
      )}

      <Typography variant="h6">
        {t("workAndEducation.militaryService")}
      </Typography>
      <Controller
        name="militaryService"
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label={<SmallLabel>{t("yes")}</SmallLabel>}
            />
            <FormControlLabel
              value="no"
              control={<Radio />}
              label={<SmallLabel>{t("no")}</SmallLabel>}
            />
          </RadioGroup>
        )}
      />
      {getErrorMessage(errors, "militaryService") && (
        <p>{getErrorMessage(errors, "militaryService") as string}</p>
      )}
      {militaryService === "yes" && (
        <div>
          <ControlledTextField
            name="militaryService.country"
            control={control}
            errors={errors}
            label={t("workAndEducation.country")}
          />
          <ControlledTextField
            name="militaryService.serviceType"
            control={control}
            errors={errors}
            label={t("workAndEducation.serviceType")}
          />
          <ControlledTextField
            name="militaryService.rank"
            control={control}
            errors={errors}
            label={t("workAndEducation.militaryRank")}
          />
          <ControlledTextField
            name="militaryService.specialty"
            control={control}
            errors={errors}
            label={t("workAndEducation.militarySpecialty")}
          />
          <ControlledTextField
            name="militaryService.startDate"
            control={control}
            errors={errors}
            label={t("workAndEducation.militaryStartDate")}
            type="date"
            inputLabelProps={{ shrink: true }}
          />
          <ControlledTextField
            name="militaryService.endDate"
            control={control}
            errors={errors}
            label={t("workAndEducation.militaryEndDate")}
            type="date"
            inputLabelProps={{ shrink: true }}
          />
        </div>
      )}

      <InfoDialog
        open={infoDialogOpen}
        onClose={handleCloseDialog}
        title={dialogTitle}
        content={dialogContent}
      />
    </div>
  );
};

export default WorkAndEducation;
