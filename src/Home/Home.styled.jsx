import styled from 'styled-components';
import { Paper, Typography, Button } from '@mui/material';

export const HomeBox = styled(Paper)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-image: url("/main.svg");
  width: 100%;
  height: calc(100vh - 60px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Greetings = styled.h4`
  color: #fff;
  font-size: calc(1em + 1vw);
  margin: 0 0  32px 0;
`;
export const Text = styled(Typography)`

 width: 280px;
 color: #fff;
font-size: calc(1em + 1vw);
`;
export const Btn = styled(props => <Button {...props} variant="contained" color="success" />)`
`;