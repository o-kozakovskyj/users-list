import { Divider, Typography, Box, IconButton } from '@mui/material';
import { useParams } from 'react-router-dom';
import { AlternateEmail, WebRounded, ArrowBackIosNewRounded, ArrowForwardIosRounded, PersonOutlineRounded, LocationCity, LocationOn, Phone } from '@mui/icons-material'
import { useState, useEffect } from 'react';
import { fetchUserById } from '../gateway';
import { useNavigate } from "react-router-dom";
import * as Styled from './UserPage.styled';

const UserPage = () => {
  const [user, setUser] = useState({})
  const { id } = useParams()
  useEffect(() => {
    fetchUserById(id).then(data => setUser(data))
  }, [id])
  const navigate = useNavigate();
  return (
    <Styled.CardContainer>
      {id>1 && <IconButton>
        <ArrowBackIosNewRounded onClick={() => navigate({
          pathname: `/users/${user.id - 1}`
        })}  />
      </IconButton>}
     
      <Styled.CardInfo>
        <Styled.Name>
          {user.name}
        </Styled.Name>
        <Divider orientation="vertical" flexItem />
        <Styled.Content >
          <Typography>
            {user?.company?.name}
          </Typography>
          <Typography>
            {user?.company?.catchPhrase}
          </Typography>
          <Typography>
            {user?.company?.bs}
          </Typography>
          <Typography>
            <PersonOutlineRounded />
            {user.username}
          </Typography>
          <Typography>
            <AlternateEmail />
            {user.email}
          </Typography>
          <Typography>
            <WebRounded />
            {user.website}
          </Typography>
          <Typography>
            <Phone />
            {user.phone}
          </Typography>
          <Typography>
            <LocationCity />
            {user?.address?.city}
          </Typography>
          <Typography>
            <LocationOn />
            <Box>
              <Typography>
                {`str: ${user?.address?.street} `}
              </Typography>
              <Typography>
                {`suite: ${user?.address?.suite} `}
              </Typography>
              <Typography>
                {`zipcode: ${user?.address?.zipcode} `}
              </Typography>
              <Typography>
                {`geo: lat ${user?.address?.geo?.lat} 
                lng${user?.address?.geo?.lng}`}
              </Typography>
            </Box>
          </Typography>
        </Styled.Content>
      </Styled.CardInfo>
      {id<10 && <IconButton>
        <ArrowForwardIosRounded onClick={() => navigate({
          pathname: `/users/${user.id + 1}`
        })} />
      </IconButton>}
     
    </Styled.CardContainer>
  )
}
export default UserPage;