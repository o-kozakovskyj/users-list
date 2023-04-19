import styled from 'styled-components';
import {
  Box,
  Table,
  TableRow,
  TableCell,
  Typography,
  InputBase,
  Button,
  TableContainer,
  Paper
} from '@mui/material';

export const ListContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(props => <Typography variant="h5" {...props} />)`
  display: block;
  margin: 16px 0!important;
`;
export const TopActions = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const SearchField = styled(props => <InputBase {...props} placeholder="Search User" />)`
  margin: 16px;
  padding: 0 9px;
  border: 1px solid #2e7d32;
  border-top-left-radius: 16px;
`;
export const Btn = styled(props => <Button {...props} variant="outlined" color="success" />)`
border-top-right-radius: 16px!important;
padding: 4px 8px!important;
`;
export const TableBox = styled(props => <TableContainer {...props} component={Paper} />)`
  max-width: 600px;
`;
export const UsersTable = styled(props => <Table {...props} aria-label="a dense table" />)`
  min-width: 300px;
`;
export const TableHeader = styled(props => <TableCell {...props} align="right" />)`
  font-weight: 600;
`;
export const Cell = styled(props => <TableCell {...props} align="right" />)`

`;
export const Row = styled(TableRow)`
  cursor: pointer;
  &:last-child td,
  &:last-child th {
    border: 0
  };
`;