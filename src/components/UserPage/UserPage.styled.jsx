import styled from 'styled-components';
import { Card, Typography, CardContent, Button } from '@mui/material';
import { EditRounded } from '@mui/icons-material';

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const CardInfo = styled(props => <Card variant="outlined" {...props} />)`
  display: flex;
  align-items: center;
 padding: 0 16px;
`;
export const Name = styled(props => <Typography variant="h5" {...props} />)`
  display: block;
  margin-right: 16px!important;
`
export const Content = styled(CardContent)`
  
`;
export const Text = styled(Typography)`
    display: flex;
    font-weight: 500;
`
export const Edit = styled(props => <Button {...props} variant="outlined" startIcon={<EditRounded />} color="success" />)`
  width:100%;
`

