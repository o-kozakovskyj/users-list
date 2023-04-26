import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../gateway';
import FormPage from '../FormPage';
import * as Styled from './AddModal.styled';

const AddModal = ({ closeModal, isAddOpen }) => {
  const [open, setOpen] = useState(isAddOpen);
  const handleClose = () => {
    closeModal();
    setOpen(false);
  };
  const formSubmit = (data) => {
    dispatch(addUser(data))
    handleClose();
  }
  const dispatch = useDispatch();
  return (
    <>
      <Styled.ModalBox open={open} onClose={handleClose}>
        <Styled.ModalTitle>
          Add new User
        </Styled.ModalTitle>
        <Styled.ModalContent> 
          <FormPage formSubmit={formSubmit} />  
        </Styled.ModalContent>
      </Styled.ModalBox>
    </>
  );
}
export default AddModal;