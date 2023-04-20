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
      <Styled.CardContainer>
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
            <Styled.Text><b>company: </b> {user?.company?.name}</Styled.Text>
            <Styled.Text><b>catchPhrase: </b> {user?.company?.catchPhrase}</Styled.Text>
            <Styled.Text><b>bs: </b> {user?.company?.bs}</Styled.Text>
            <Styled.Text><b>e-mail: </b> {user?.email}</Styled.Text>
            <Styled.Text><b>web: </b>  {user?.website}</Styled.Text>
            <Styled.Text><b>phone: </b> {user?.phone}</Styled.Text>
            <Styled.Text><b>city: </b>{user?.address?.city}</Styled.Text>
            <Styled.Text><b>street: </b> {user?.address?.street}</Styled.Text>
            <Styled.Text><b>suite: </b> {user?.address?.suite}</Styled.Text>
            <Styled.Text><b>zipcode: </b>  {user?.address?.zipcode}</Styled.Text>
            <Styled.Text><b>geo lat: </b> {user?.address?.geo?.lat}
            </Styled.Text><b>geo lng: </b> {user?.address?.geo?.lng}Styled.
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
      </Styled.CardContainer >
    );
  }
  return (<CircularProgress />)
}
export default UserPage;