import styled from "styled-components";
import { Box, AppBar, Toolbar, IconButton, Button } from '@mui/material';

export const Header = styled(Box)`
  flex-grow: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;
export const Nav = styled(props => < AppBar position="static" {...props} color="success" />)`
display: flex;
`;
export const NavMenu = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;
export const MenuButton = styled(props => <IconButton
  {...props}
  size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
/>)`
  margin-right: 8px
`;
export const NavButton = styled(props => <Button color='inherit' {...props} />)``;