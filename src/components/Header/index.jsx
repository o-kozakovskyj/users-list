import Box from '@mui/material/Box';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { useNavigate } from "react-router-dom";
import * as Styled from "./Header.styled";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Styled.Header>
      <Styled.Nav>
        <Styled.NavMenu>
          <Styled.MenuButton onClick={() => navigate("/")}>
            <Diversity2Icon />
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
export default Header;