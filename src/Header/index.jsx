import * as React from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import * as Styled from "./Header.Styled";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <Styled.Header>
      <Styled.Nav>
        <Styled.NavMenu>
          <Styled.MenuButton>
            <MenuIcon />
          </Styled.MenuButton>
          <Box>
            <Styled.NavButton onClick={() => navigate("/")}>
              Home
            </Styled.NavButton>
            <Styled.NavButton onClick={() => navigate("/users")}>
              Users
            </Styled.NavButton>
          </Box>
        </Styled.NavMenu>
      </Styled.Nav>
    </Styled.Header>

  );
}