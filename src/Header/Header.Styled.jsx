import styled from "styled-components";
import { Box, AppBar, Toolbar } from '@mui/material';

export const Header = styled(Box)`
  flex-grow: 1;
`;
export const Nav = styled(props => < AppBar position="static" {...props} color="success" />)`
display: flex;
`
export const NavMenu = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`