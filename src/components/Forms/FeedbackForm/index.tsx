import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";

interface FeedbackFormInputs {
  name: string;
  feedback: string;
}

interface FeedbackFormProps {
  open: boolean;
  onClose: (submitted: boolean) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ open, onClose }) => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FeedbackFormInputs>();

  const onSubmit = (data: FeedbackFormInputs) => {
    console.log(data);
    reset();
    onClose(true);
  };

  const handleClose = () => {
    onClose(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {t("aboutUs.leave_review")}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: t("feedbackForm.required") as string }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t("feedbackForm.name")}
                    fullWidth
                    error={!!errors.name}
                    helperText={
                      errors.name ? t("feedbackForm.nameRequired") : ""
                    }
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="feedback"
                control={control}
                defaultValue=""
                rules={{ required: t("feedbackForm.required") as string }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t("feedbackForm.feedback")}
                    fullWidth
                    multiline
                    rows={4}
                    error={!!errors.feedback}
                    helperText={
                      errors.feedback ? t("feedbackForm.feedbackRequired") : ""
                    }
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="outlined" color="primary">
                {t("feedbackForm.submit")}
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackForm;