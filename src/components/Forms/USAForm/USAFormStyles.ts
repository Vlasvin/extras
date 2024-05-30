import styled from "@emotion/styled";
import { Box, IconButton, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)`
  max-width: 600px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

export const InfoIconButton = styled(IconButton)`
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: translate(50%, 50%);
`;

export const CustomBox = styled(Box)`
  max-width: 600px;
  width: 100%;
`;
