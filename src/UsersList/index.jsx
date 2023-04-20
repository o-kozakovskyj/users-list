import { TableBody, TableHead, TableRow, IconButton, CircularProgress } from '@mui/material';
import { DeleteForeverRounded } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { fetchUsers, deleteUser } from '../gateway';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsersError, getUsersStatus, selectUsersBySearch, searchUsers } from './UsersSlice';
import AddModal from '../AddModal';
import * as Styled from './UserList.styled';

const UsersList = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const handleAddClose = () => {
    setIsAddOpen(false)
  }
  const handleAddOpen = () => {
    setIsAddOpen(true)
  }
  const handleDelete = (e, id) => {
    e.stopPropagation();
    dispatch(deleteUser(id));
  }
  const dispatch = useDispatch()
  const users = useSelector(selectUsersBySearch) || []
  const usersStatus = useSelector(getUsersStatus)
  const error = useSelector(getUsersError)
  useEffect(() => {
    dispatch(searchUsers(search))
    if (usersStatus === 'idle') {
      dispatch(fetchUsers())
    }
  }, [dispatch, search, usersStatus])

  if (usersStatus === "loading") {
    return <Styled.SpinnerBox>
      <CircularProgress color="success" />
    </Styled.SpinnerBox>;
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
        <Styled.Btn onClick={handleAddOpen}>Add User</Styled.Btn>
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
                {user.edited &&
                  <>
                    <Styled.EditedCell>{user.id}</Styled.EditedCell>
                    <Styled.EditedCell>{user.name}</Styled.EditedCell>
                    <Styled.EditedCell>{user.username}</Styled.EditedCell>
                    <Styled.EditedCell>
                      <IconButton onClick={(e) => handleDelete(e, user.id)}>
                        <DeleteForeverRounded />
                      </IconButton>
                    </Styled.EditedCell>
                  </>
                }
                {!user.edited &&
                  <>
                    <Styled.Cell>{user.id}</Styled.Cell>
                    <Styled.Cell>{user.name}</Styled.Cell>
                    <Styled.Cell>{user.username}</Styled.Cell>
                    <Styled.Cell>
                      <IconButton onClick={(e) => handleDelete(e, user.id)}>
                        <DeleteForeverRounded />
                      </IconButton>
                    </Styled.Cell>
                  </>
                }
              </Styled.Row>
            ))}
          </TableBody>
        </Styled.UsersTable>
      </Styled.TableBox>
      {isAddOpen && <AddModal closeModal={handleAddClose} isAddOpen={isAddOpen} />}
    </Styled.ListContainer>
  );
}
export default UsersList;