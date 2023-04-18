import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const { id } = useParams()

  return (<Box>
   {id}
  </Box>)
}
export default UserPage;