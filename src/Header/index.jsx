import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import * as Styled from "./Header.Styled";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  let navigate = useNavigate();
  return (
    <Styled.Header>
      <Styled.Nav>
        <Styled.NavMenu>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Button color='inherit' onClick={() => navigate("/")}>Home</Button>
            <Button color='inherit' onClick={() => navigate("/users")}>Users</Button>
          </Box>
        </Styled.NavMenu>
      </Styled.Nav>
    </Styled.Header>

  );
}