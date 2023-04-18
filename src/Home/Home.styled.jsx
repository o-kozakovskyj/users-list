import styled from 'styled-components';
import { Paper, Typography } from '@mui/material';

export const HomeBox = styled(Paper)`
  display: flex;
  justify-content: center;
  background-image: url("/main.svg");
  width: 100%;
  height: calc(100vh - 64px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Greetings = styled(Typography)`
  width: 250px;
  color: #fff;
  margin-top: 40px!important;
`