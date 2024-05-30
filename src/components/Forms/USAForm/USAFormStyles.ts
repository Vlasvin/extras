import styled from "@emotion/styled";
import { Box, IconButton, TextField } from "@mui/material";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 100px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media (max-width: 600px) {
    padding: 14px;
  }
`;

export const StyledTextField = styled(TextField)`
  max-width: 600px;
  word-wrap: break-word;
  white-space: normal;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

export const InfoIconButton = styled(IconButton)`
  position: absolute;
  bottom: 13px;
  right: 16px;
  transform: translate(50%, 50%);
`;

export const CustomBox = styled(Box)`
  max-width: 600px;
  width: 100%;
`;
