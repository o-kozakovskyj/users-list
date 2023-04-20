import { useNavigate } from "react-router-dom";
import { Box, Typography } from '@mui/material';
import * as Styled from './Home.styled';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Styled.HomeBox>
      <Box>
        <Styled.Greetings>
          Hello User!
        </Styled.Greetings>
        <Styled.Text>
          <Typography>This amazing app will help you to
            view users from your database in a
            list or in detail for each user by
            clicking on the user's row.
          </Typography>
          <Typography>You can
            add a new user by clicking on the Add
            button.
          </Typography>
          <Typography>
            Or you can delete a user
            by clicking on the icon in the table.
          </Typography>
          <Typography>
            You also can update a user
            by clicking on the edit button  on user`s page.
          </Typography>
          <Typography>
            We sincerely hope that our application
            will allow you to get the most out of your
            database.
          </Typography>
          <Styled.Btn onClick={() => navigate("/users")}>
            Users
          </Styled.Btn>
        </Styled.Text>
      </Box>
    </Styled.HomeBox>
  )
}
export default Home;