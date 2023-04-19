import { Table,Button, InputBase, Box, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton } from '@mui/material';
import { EditRounded, DeleteForeverRounded } from '@mui/icons-material';
import { useState,useEffect } from 'react';
import ModalForm from '../ModalForm';
import { fetchUsers, deleteUser } from '../gateway';
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getUsers, getUsersError, getUsersStatus } from './UsersSlice';
import * as Styled from './UserList.styled';

const UsersList = () => {
  const navigate = useNavigate();
  const handleModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(!isModalOpen)
  }
  const handleDelete = (e,id)=>{
    e.stopPropagation();
    dispatch(deleteUser(id));
  }
  const dispatch = useDispatch()
  const users = useSelector(getUsers)|| []
  const usersStatus = useSelector(getUsersStatus)
  const error = useSelector(getUsersError)
  const [isModalOpen, setIsModalOpen] = useState(false)
  useEffect(() => {
    if (usersStatus === 'idle') {
     dispatch(fetchUsers())
   }
  }, [dispatch, usersStatus])

  if (usersStatus === "loading") {
    return <div>Loading...</div>;
  }
  if (usersStatus === "failed") {
    return <div>{error}</div>;
  }
  return (
    <Styled.ListContainer>
      <Typography variant='h4'>Users List</Typography>
      <Box sx={{ }}> 
        <InputBase
          sx={{ ml: 1, padding: '4px', borderRadius: '16px', flex: 1, border: '1px solid #000', width:"100%", maxWidth: '600px' }}
          placeholder="Search User"      
        />
        <Button onClick={handleModal}>Add User</Button>
      </Box>     
      <TableContainer component={Paper} sx={{ maxWidth: '600px' }}>
      <Table sx={{ minWidth: 300 }} aria-label="a dense table">
        <TableHead >
          <TableRow >
            <TableCell sx={{fontWeight: '600'}}>Id</TableCell>
              <TableCell sx={{ fontWeight: '600' }} align="right">Name</TableCell>
              <TableCell sx={{ fontWeight: '600' }} align="right">UserName</TableCell>
              <TableCell sx={{ fontWeight: '600' }} align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
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
              <TableCell align="right">
                <IconButton onClick={handleModal}><EditRounded/></IconButton>
                <IconButton onClick={(e)=>handleDelete(e,user.id)}><DeleteForeverRounded/></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      {isModalOpen && <ModalForm />}
    </Styled.ListContainer>
  );
}
export default UsersList;