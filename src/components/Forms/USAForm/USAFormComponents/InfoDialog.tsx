import React from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { CustomDialogTitle, FormBtn } from "components/Forms/FormStyles";

interface InfoDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const InfoDialog: React.FC<InfoDialogProps> = ({
  open,
  onClose,
  title,
  content,
}) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onClose={onClose}>
      <CustomDialogTitle>{title}</CustomDialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <FormBtn
          onClick={onClose}
          variant="outlined"
          color="primary"
          sx={{ fontSize: "0.8rem", padding: "2px 10px" }}
        >
          {t("close")}
        </FormBtn>
      </DialogActions>
    </Dialog>
  );
};

export default InfoDialog;
