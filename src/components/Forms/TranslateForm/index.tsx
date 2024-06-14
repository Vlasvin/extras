import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { translationSchema } from "validations/validationSchema";
import { getErrorMessage } from "utils/formUtils";

export interface IFormInput {
  name: string;
  phone: string;
  email: string;
  language: string;
  message: string;
  file: FileList;
}

const TranslationForm: React.FC = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IFormInput>({
    resolver: yupResolver(translationSchema) as any,
  });

  const onSubmit = (data: IFormInput) => {
    console.log("Form Data:", data);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 6, mb: 6 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t("form.name")}
                    fullWidth
                    error={!!errors.name}
                    helperText={getErrorMessage(errors, "name")}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t("form.phone")}
                    fullWidth
                    error={!!errors.phone}
                    helperText={getErrorMessage(errors, "phone")}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t("form.email")}
                    fullWidth
                    error={!!errors.email}
                    helperText={getErrorMessage(errors, "email")}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="language"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t("form.language")}
                    fullWidth
                    error={!!errors.language}
                    helperText={getErrorMessage(errors, "language")}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t("form.message")}
                    fullWidth
                    multiline
                    rows={4}
                    error={!!errors.message}
                    helperText={getErrorMessage(errors, "message")}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" component="label" fullWidth>
                {t("form.upload_file")}
                <input
                  type="file"
                  hidden
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setValue("file", e.target.files);
                    }
                  }}
                />
              </Button>
              {errors.file && (
                <Typography color="error" variant="body2">
                  {getErrorMessage(errors, "file")}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                fullWidth
              >
                {t("form.submit")}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default TranslationForm;
