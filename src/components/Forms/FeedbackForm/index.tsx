import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Slide,
  SlideProps,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { FormBtn } from "../FormStyles";

interface FeedbackFormInputs {
  name: string;
  feedback: string;
}

interface FeedbackFormProps {
  open: boolean;
  onClose: (submitted: boolean) => void;
}

const Transition = React.forwardRef<unknown, SlideProps>(function Transition(
  props,
  ref
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const FeedbackForm: React.FC<FeedbackFormProps> = ({ open, onClose }) => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FeedbackFormInputs>();

  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PRODUCTION
      : process.env.REACT_APP_API_URL_LOCAL;

  const onSubmit = async (data: FeedbackFormInputs) => {
    try {
      const response = await axios.post(`${apiUrl}/api/send-feedback`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status >= 200 && response.status < 300) {
        console.log("Feedback sent successfully");
        reset();
        onClose(true);
      } else {
        console.error("Failed to send feedback");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleClose = () => {
    onClose(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
      PaperProps={{
        sx: { borderRadius: 4 },
      }}
    >
      <DialogTitle
        sx={{ padding: "30px", fontSize: "24px", textAlign: "center" }}
      >
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
      <DialogContent sx={{ padding: "30px" }}>
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
              <FormBtn
                type="submit"
                variant="outlined"
                color="primary"
                sx={{ width: "100%", mb: 4 }}
              >
                {t("feedbackForm.submit")}
              </FormBtn>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackForm;
