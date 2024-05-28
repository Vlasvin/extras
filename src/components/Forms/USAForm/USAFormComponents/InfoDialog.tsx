import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
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
}) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{content}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Закрити
      </Button>
    </DialogActions>
  </Dialog>
);

export default InfoDialog;
