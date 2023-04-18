import * as React from 'react';
import { Table,InputBase,Box,TableBody,TableCell,TableContainer,TableHead,TableRow, Paper, Typography} from '@mui/material';
import { useState } from 'react';
import { fetchUsersList } from '../gateway';
import * as Styled from './UserList.styled';
import { useNavigate } from "react-router-dom";



const UsersList = () => {
  const [list, setList] = useState([]);
  React.useEffect(() => {
    fetchUsersList.then(data=>setList(data))
  }, [])
  let navigate = useNavigate();
  return (
    <Styled.ListContainer>
      <Box>
        <Typography variant='h4'>Users List</Typography>
        <InputBase
          sx={{ ml: 1, padding: 1, flex: 1, border: '1px solid #000' }}
          placeholder="Search User"
          
        />
      </Box>
      
      <TableContainer component={Paper} sx={{ maxWidth: '600px' }}>
      <Table sx={{ minWidth: 300 }} aria-label="a dense table">
        <TableHead >
          <TableRow >
            <TableCell sx={{fontWeight: '600'}}>Id</TableCell>
              <TableCell sx={{ fontWeight: '600' }} align="right">Name</TableCell>
              <TableCell sx={{ fontWeight: '600' }} align="right">UserName</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: "pointer"}}
              onClick={() => navigate({
                pathname:`/users/${user.id}`
              })}
            >
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.username}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </Styled.ListContainer>
  );
}
export default UsersList;