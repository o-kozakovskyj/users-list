import styled from 'styled-components';
import { Paper, Button, Box } from '@mui/material';

export const HomeBox = styled(Paper)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-image: url("/main.svg");
  width: 100%;
  height: calc(100vh);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Greetings = styled.h4`
width: 280px;
text-align: center;
  color: #fff;
  font-size: calc(1em + 1vw);
  margin: 0 0  32px 0;
`;
export const Text = styled(Box)`
display: flex;
flex-direction: column;
align-items: center;
 width: 280px;
 color: #fff;
font-size: calc(1em + 1vw);
`;
export const Btn = styled(props => <Button {...props} variant="contained" color="success" />)`
  margin-top: 32px!important;
`;