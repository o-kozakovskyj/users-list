import styled from "styled-components";
import { Box, AppBar, Toolbar, IconButton, Button } from '@mui/material';

export const Header = styled(Box)`
  flex-grow: 1;
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