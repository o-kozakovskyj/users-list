import {
  Avatar,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CircularProgress
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { ArrowBackIosNewRounded, ArrowForwardIosRounded } from '@mui/icons-material'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getUserById, currentUser } from '../../features/UsersList/UsersSlice';
import EditModal from '../EditModal';
import { yellow } from '@mui/material/colors';
import * as Styled from './UserPage.styled';

const UserPage = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const handleEditClose = () => {
    setIsEditOpen(false)
  }
  const user = useSelector(currentUser) || {}
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      dispatch(getUserById(id))
    }
  }, [dispatch, id])
  if (user) {
    return (
      <div style={{ display: "flex" }}>
        {id > 1 && <IconButton onClick={() => navigate({
          pathname: `/users/${user.id - 1}`
        })}>
          <ArrowBackIosNewRounded />
        </IconButton>}
        <Card sx={{ maxWidth: 345, margin: "10vh auto" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: yellow[500] }} aria-label="recipe">
                {user.name && user.name[0]}
              </Avatar>
            }
            title={user.name}
            subheader={user.username}
          />
          <CardContent>
            <Styled.Text>company: {user?.company?.name}</Styled.Text>
            <Styled.Text> catchPhrase: {user?.company?.catchPhrase}</Styled.Text>
            <Styled.Text>bs: {user?.company?.bs}</Styled.Text>
            <Styled.Text>e-mail: {user?.email}</Styled.Text>
            <Styled.Text> web: {user?.website}</Styled.Text>
            <Styled.Text>phone: {user?.phone}</Styled.Text>
            <Styled.Text>city:{user?.address?.city}</Styled.Text>
            <Styled.Text>street: {user?.address?.street}</Styled.Text>
            <Styled.Text>suite: {user?.address?.suite}</Styled.Text>
            <Styled.Text> zipcode: {user?.address?.zipcode}</Styled.Text>
            <Styled.Text>geo lat: {user?.address?.geo?.lat}
            </Styled.Text>geo lng: {user?.address?.geo?.lng}Styled.
          </CardContent>
          <CardActions disableSpacing>
            <Styled.Edit onClick={() => setIsEditOpen(true)}>
              Edit
            </Styled.Edit>
          </CardActions>
        </Card >
        {
          id < 10 && <IconButton onClick={() => navigate({
            pathname: `/users/${user.id + 1}`
          })}>
            <ArrowForwardIosRounded />
          </IconButton>
        }
        {isEditOpen && <EditModal user={user} closeModal={handleEditClose} isEditOpen={isEditOpen} />}
      </div >
    );
  }
  return (<CircularProgress />)
}
export default UserPage;