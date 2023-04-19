import styled from 'styled-components';
import { TextField, Box } from '@mui/material';

export const ModalBox = styled(props => <Box {...props} bgcolor='background.paper' />)`
display: flex;
flex-wrap: wrap;
justify-content: center;
flex:1 1;
gap: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 320px;
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 8px;
`;
export const InputField = styled(props => <TextField color='success'{...props} required/>)`
`;