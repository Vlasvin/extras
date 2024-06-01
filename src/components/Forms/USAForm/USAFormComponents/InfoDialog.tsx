import React from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

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
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          variant="outlined"
          color="primary"
          sx={{ fontSize: "0.8rem", padding: "2px 10px" }}
        >
          {t("close")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoDialog;
