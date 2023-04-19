import styled from 'styled-components';
import { Box, Card, Typography, CardContent } from '@mui/material';

export const CardContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  min-width: 40vw
`;
export const CardInfo = styled(props => <Card variant="outlined" {...props} />)`
  display: flex;
  align-items: center;
 padding: 0 16px;
`;
export const Name = styled(props=><Typography  variant="h5" {...props}/>)`
  display: block;
  margin-right: 16px!important;
`
export const Content = styled(CardContent)`
  .MuiTypography-root {
    display: flex;
    justify-content: space-between;
  }

`
  
