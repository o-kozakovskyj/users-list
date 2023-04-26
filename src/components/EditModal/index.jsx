import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../gateway';
import { useNavigate } from "react-router-dom";
import FormPage from '../FormPage';
import * as Styled from './EditModal.styled';


const EditModal = ({ closeModal, isEditOpen, user }) => {
  const [open, setOpen] = useState(isEditOpen);
  const navigate = useNavigate();
  const handleClose = () => {
    closeModal();
    setOpen(false);
  };
  
  const dispatch = useDispatch();
  const formSubmit = (data) => {
    dispatch(updateUser({...data, edited: true}))
    handleClose();
    setOpen(false);
    navigate("/users")
  }
  return (
    <Styled.ModalBox open={open} onClose={handleClose}>
      <Styled.ModalTitle>
        Edit User
      </Styled.ModalTitle>
      <Styled.ModalContent>
        <FormPage formSubmit={formSubmit} user={user} />
      </Styled.ModalContent>
    </Styled.ModalBox>
  );
}
export default EditModal;