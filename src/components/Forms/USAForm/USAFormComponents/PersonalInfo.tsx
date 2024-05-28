import React from "react";
import { useTranslation } from "react-i18next";
import {
  Control,
  Controller,
  FieldErrors,
  useFormContext,
} from "react-hook-form";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import { getErrorMessage } from "utils/formUtils";

interface PersonalInfoProps {
  control: Control<any>;
  errors: FieldErrors<any>;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ control, errors }) => {
  const { t } = useTranslation();
  const { getValues } = useFormContext();

  return (
    <div>
      <h2>{t("personalInfo.title")}</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="personalInfo.surname"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("personalInfo.surname")}
                error={!!getErrorMessage(errors, "personalInfo.surname")}
                helperText={
                  (getErrorMessage(errors, "personalInfo.surname") as string) ||
                  ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="personalInfo.givenName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("personalInfo.givenName")}
                error={!!getErrorMessage(errors, "personalInfo.givenName")}
                helperText={
                  (getErrorMessage(
                    errors,
                    "personalInfo.givenName"
                  ) as string) || ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="personalInfo.patronymic"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("personalInfo.patronymic")}
                error={!!getErrorMessage(errors, "personalInfo.patronymic")}
                helperText={
                  (getErrorMessage(
                    errors,
                    "personalInfo.patronymic"
                  ) as string) || ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="personalInfo.birthDate"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("personalInfo.birthDate")}
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!getErrorMessage(errors, "personalInfo.birthDate")}
                helperText={
                  (getErrorMessage(
                    errors,
                    "personalInfo.birthDate"
                  ) as string) || ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="personalInfo.photo"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("personalInfo.photo")}
                type="file"
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!getErrorMessage(errors, "personalInfo.photo")}
                helperText={
                  (getErrorMessage(errors, "personalInfo.photo") as string) ||
                  ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="personalInfo.passportCopy"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("personalInfo.passportCopy")}
                type="file"
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!getErrorMessage(errors, "personalInfo.passportCopy")}
                helperText={
                  (getErrorMessage(
                    errors,
                    "personalInfo.passportCopy"
                  ) as string) || ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="personalInfo.passportDetails"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("personalInfo.passportDetails")}
                error={
                  !!getErrorMessage(errors, "personalInfo.passportDetails")
                }
                helperText={
                  (getErrorMessage(
                    errors,
                    "personalInfo.passportDetails"
                  ) as string) || ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="personalInfo.passportOrInn"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("personalInfo.passportOrInn")}
                error={!!getErrorMessage(errors, "personalInfo.passportOrInn")}
                helperText={
                  (getErrorMessage(
                    errors,
                    "personalInfo.passportOrInn"
                  ) as string) || ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="personalInfo.otherNames"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("personalInfo.otherNames")}
                error={!!getErrorMessage(errors, "personalInfo.otherNames")}
                helperText={
                  (getErrorMessage(
                    errors,
                    "personalInfo.otherNames"
                  ) as string) || ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="personalInfo.birthPlaceAndDate"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("personalInfo.birthPlaceAndDate")}
                error={
                  !!getErrorMessage(errors, "personalInfo.birthPlaceAndDate")
                }
                helperText={
                  (getErrorMessage(
                    errors,
                    "personalInfo.birthPlaceAndDate"
                  ) as string) || ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="personalInfo.passportLost"
            control={control}
            render={({ field }) => (
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox {...field} checked={field.value} />}
                  label={t("personalInfo.passportLost")}
                />
              </FormGroup>
            )}
          />
        </Grid>
        {getValues("personalInfo.passportLost") && (
          <Grid item xs={12}>
            <Controller
              name="personalInfo.passportLostDetails"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t("personalInfo.passportLostDetails")}
                  error={
                    !!getErrorMessage(
                      errors,
                      "personalInfo.passportLostDetails"
                    )
                  }
                  helperText={
                    (getErrorMessage(
                      errors,
                      "personalInfo.passportLostDetails"
                    ) as string) || ""
                  }
                />
              )}
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <Controller
            name="personalInfo.otherCitizenship"
            control={control}
            render={({ field }) => (
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox {...field} checked={field.value} />}
                  label={t("personalInfo.otherCitizenship")}
                />
              </FormGroup>
            )}
          />
        </Grid>
        {getValues("personalInfo.otherCitizenship") && (
          <Grid item xs={12}>
            <Controller
              name="personalInfo.otherPassportDetails"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t("personalInfo.otherPassportDetails")}
                  error={
                    !!getErrorMessage(
                      errors,
                      "personalInfo.otherPassportDetails"
                    )
                  }
                  helperText={
                    (getErrorMessage(
                      errors,
                      "personalInfo.otherPassportDetails"
                    ) as string) || ""
                  }
                />
              )}
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <Controller
            name="personalInfo.residenceAddress"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("personalInfo.residenceAddress")}
                error={
                  !!getErrorMessage(errors, "personalInfo.residenceAddress")
                }
                helperText={
                  (getErrorMessage(
                    errors,
                    "personalInfo.residenceAddress"
                  ) as string) || ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="personalInfo.registeredAddress"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("personalInfo.registeredAddress")}
                error={
                  !!getErrorMessage(errors, "personalInfo.registeredAddress")
                }
                helperText={
                  (getErrorMessage(
                    errors,
                    "personalInfo.registeredAddress"
                  ) as string) || ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="personalInfo.contactNumber"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("personalInfo.contactNumber")}
                error={!!getErrorMessage(errors, "personalInfo.contactNumber")}
                helperText={
                  (getErrorMessage(
                    errors,
                    "personalInfo.contactNumber"
                  ) as string) || ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="personalInfo.contactNumbersLast5Years"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("personalInfo.contactNumbersLast5Years")}
                error={
                  !!getErrorMessage(
                    errors,
                    "personalInfo.contactNumbersLast5Years"
                  )
                }
                helperText={
                  (getErrorMessage(
                    errors,
                    "personalInfo.contactNumbersLast5Years"
                  ) as string) || ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="personalInfo.emailAddress"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("personalInfo.emailAddress")}
                error={!!getErrorMessage(errors, "personalInfo.emailAddress")}
                helperText={
                  (getErrorMessage(
                    errors,
                    "personalInfo.emailAddress"
                  ) as string) || ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="personalInfo.emailsLast5Years"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("personalInfo.emailsLast5Years")}
                error={
                  !!getErrorMessage(errors, "personalInfo.emailsLast5Years")
                }
                helperText={
                  (getErrorMessage(
                    errors,
                    "personalInfo.emailsLast5Years"
                  ) as string) || ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="personalInfo.socialMedia"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("personalInfo.socialMedia")}
                error={!!getErrorMessage(errors, "personalInfo.socialMedia")}
                helperText={
                  (getErrorMessage(
                    errors,
                    "personalInfo.socialMedia"
                  ) as string) || ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="personalInfo.socialMediaDetails"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("personalInfo.socialMediaDetails")}
                error={
                  !!getErrorMessage(errors, "personalInfo.socialMediaDetails")
                }
                helperText={
                  (getErrorMessage(
                    errors,
                    "personalInfo.socialMediaDetails"
                  ) as string) || ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="personalInfo.otherMediaResources"
            control={control}
            render={({ field }) => (
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox {...field} checked={field.value} />}
                  label={t("personalInfo.otherMediaResources")}
                />
              </FormGroup>
            )}
          />
        </Grid>
        {getValues("personalInfo.otherMediaResources") && (
          <Grid item xs={12}>
            <Controller
              name="personalInfo.otherMediaResourceDetails"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t("personalInfo.otherMediaResourceDetails")}
                  error={
                    !!getErrorMessage(
                      errors,
                      "personalInfo.otherMediaResourceDetails"
                    )
                  }
                  helperText={
                    (getErrorMessage(
                      errors,
                      "personalInfo.otherMediaResourceDetails"
                    ) as string) || ""
                  }
                />
              )}
            />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default PersonalInfo;
