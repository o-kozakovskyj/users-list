import { useNavigate } from "react-router-dom";
import * as Styled from './Home.styled';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Styled.HomeBox>
      <Styled.Greetings>
        Hello User!
      </Styled.Greetings>
      <Styled.Text>
        This amazing app will help you to
        view users from your database in a
        list or in detail for each user by
        clicking on the user's row. You can
        add a new user by clicking on the Add
        button or you can edit or delete a user
        by clicking on the icon in the table.
        We sincerely hope that our application
        will allow you to get the most out of your
        database.
      </Styled.Text>
      <Styled.Btn onClick={() => navigate("/users")}>
        Users
      </Styled.Btn>
    </Styled.HomeBox>
  )
}
export default Home;