import styled from "styled-components";
import { Button } from '@mui/material';

export const SubmitBtn = styled(props => <Button {...props} variant="outlined" type="submit" color="success" />)`
  width:100%;
`;
export const FormBox = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex:1 1;
  gap: 8px;
`;