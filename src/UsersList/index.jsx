import { TableBody, TableHead, TableRow, IconButton } from '@mui/material';
import { EditRounded, DeleteForeverRounded } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import ModalForm from '../ModalForm';
import { fetchUsers, deleteUser } from '../gateway';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsersError, getUsersStatus, selectUsersBySearch, searchUsers } from './UsersSlice';
import * as Styled from './UserList.styled';

const UsersList = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate();
  const handleModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(!isModalOpen)
  }
  const handleDelete = (e, id) => {
    e.stopPropagation();
    dispatch(deleteUser(id));
  }
  const dispatch = useDispatch()
  const users = useSelector(selectUsersBySearch) || []
  const usersStatus = useSelector(getUsersStatus)
  const error = useSelector(getUsersError)
  const [isModalOpen, setIsModalOpen] = useState(false)
  useEffect(() => {
    dispatch(searchUsers(search))
    if (usersStatus === 'idle') {
      dispatch(fetchUsers())
    }
  }, [dispatch, search, usersStatus])

  if (usersStatus === "loading") {
    return <div>Loading...</div>;
  }
  if (usersStatus === "failed") {
    return <div>{error}</div>;
  }
  return (
    <Styled.ListContainer>
      <Styled.Title>
        Users List
      </Styled.Title>
      <Styled.TopActions>
        <Styled.SearchField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Styled.Btn onClick={handleModal}>Add User</Styled.Btn>
      </Styled.TopActions>
      <Styled.TableBox>
        <Styled.UsersTable>
          <TableHead >
            <TableRow >
              <Styled.TableHeader>
                Id
              </Styled.TableHeader>
              <Styled.TableHeader>
                Name
              </Styled.TableHeader>
              <Styled.TableHeader>
                User Name
              </Styled.TableHeader>
              <Styled.TableHeader>
                Actions
              </Styled.TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <Styled.Row
                key={user.id}
                onClick={() => navigate({ pathname: `/users/${user.id}` })}
              >
                <Styled.Cell>
                  {user.id}
                </Styled.Cell>
                <Styled.Cell>
                  {user.name}
                </Styled.Cell>
                <Styled.Cell>
                  {user.username}
                </Styled.Cell>
                <Styled.Cell>
                  <IconButton onClick={handleModal}>
                    <EditRounded />
                  </IconButton>
                  <IconButton onClick={(e) => handleDelete(e, user.id)}>
                    <DeleteForeverRounded />
                  </IconButton>
                </Styled.Cell>
              </Styled.Row>
            ))}
          </TableBody>
        </Styled.UsersTable>
      </Styled.TableBox>
      {isModalOpen && <ModalForm />}
    </Styled.ListContainer>
  );
}
export default UsersList;