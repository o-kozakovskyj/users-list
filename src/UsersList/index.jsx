import * as React from 'react';
import { Table,Button, InputBase, Box, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton } from '@mui/material';
import { EditRounded, DeleteForeverRounded } from '@mui/icons-material';
import { useState } from 'react';
import ModalForm from '../ModalForm';
import { fetchUsersList } from '../gateway';
import * as Styled from './UserList.styled';
import { useNavigate } from "react-router-dom";



const UsersList = () => {
  const [list, setList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false)
  React.useEffect(() => {
    fetchUsersList.then(data=>setList(data))
  }, [])
  let navigate = useNavigate();
  const handleModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(!isModalOpen)
  }
  return (
    <Styled.ListContainer>
      <Box sx={{ }}>
        <Typography variant='h4'>Users List</Typography>
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
              <TableCell align="right">
                <IconButton onClick={handleModal}><EditRounded/></IconButton>
                <IconButton onClick={handleModal}><DeleteForeverRounded/></IconButton>
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