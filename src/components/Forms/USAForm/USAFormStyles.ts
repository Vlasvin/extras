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
  padding: 40px 100px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media (max-width: 600px) {
    padding: 0;
    box-shadow: none;
  }
`;

export const StyledTextField = styled(TextField)`
  max-width: 600px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const InfoIconButton = styled(IconButton)`
  position: absolute;
  top: 4%;
  right: 13px;
  transform: translate(50%, 50%);
`;

export const FileInputButton = styled(IconButton)`
  position: absolute;
  bottom: 70%;
  transform: translateY(50%);
  right: -7px;
`;

export const CustomBox = styled(Box)`
  max-width: 600px;
  width: 100%;
`;

export const Spacer = styled.div`
  margin-bottom: 48px;
`;
