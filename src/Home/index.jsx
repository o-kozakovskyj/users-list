import { useNavigate } from "react-router-dom";
import { Box } from '@mui/material';
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
          <p>This amazing app will help you to
            view users from your database in a
            list or in detail for each user by
            clicking on the user's row.
          </p>
          <p>You can
            add a new user by clicking on the Add
            button.
          </p>
          <p>
            Or you can delete a user
            by clicking on the icon in the table.
          </p>
          <p>
            You also can update a user
            by clicking on the edit button  on user`s page.
          </p>
          <p>
            We sincerely hope that our application
            will allow you to get the most out of your
            database.
          </p>

        </Styled.Text>
      </Box>

      <Styled.Btn onClick={() => navigate("/users")}>
        Users
      </Styled.Btn>
    </Styled.HomeBox>
  )
}
export default Home;