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
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import axios from "axios";
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

interface TranslationFormProps {
  onClose: () => void;
}

const TranslationForm: React.FC<TranslationFormProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<IFormInput>({
    resolver: yupResolver(translationSchema) as any,
  });

  const files = watch("file");

  const onSubmit = async (data: IFormInput) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("language", data.language);
      formData.append("message", data.message);
      if (data.file.length > 0) {
        formData.append("file", data.file[0]);
      }

      await axios.post("http://localhost:3001/api/send-email", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      onClose();
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mb: 6 }}>
        <Typography
          sx={{
            fontSize: "24px",
            textAlign: "center",
            marginBottom: "28px",
          }}
        >
          {t("form.title")}
        </Typography>
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
              <List>
                {files &&
                  Array.from(files).map((file, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={file.name} />
                    </ListItem>
                  ))}
              </List>
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
