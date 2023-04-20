import { useEffect, useState, useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { addUser } from '../../gateway';
import * as Styled from './AddModal.styled';

const AddModal = ({ closeModal, isAddOpen }) => {
  const [open, setOpen] = useState(isAddOpen);

  const handleClose = () => {
    closeModal();
    setOpen(false);
  };
  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const [main, setMain] = useState({});
  const [company, setCompany] = useState({});
  const [address, setAddress] = useState({})
  const [geo, setGeo] = useState({});
  const handleChangeGeo = (e) => {
    const { name, value } = e.target;
    setGeo({
      ...geo,
      [name]: value
    })
  }
  const handleChangeMain = (e) => {
    const { name, value } = e.target;
    setMain({
      ...main,
      [name]: value
    })
  }
  const handleChangeCompany = (e) => {
    const { name, value } = e.target;
    setCompany({
      ...company,
      [name]: value
    })
  }
  const handleChangeAddress = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value
    })
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...main,
      company: company,
      address: {
        ...address,
        geo,
      },
    };
    dispatch(addUser(newUser))
    handleClose();
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Add new User</DialogTitle>
        <DialogContent dividers={true}>      
            <Styled.FormBox onSubmit={handleSubmit}>
              <Styled.InputField
                label="Name"
                type="text"
                name="name"
                value={main.name}
                onChange={handleChangeMain}
              />
              <Styled.InputField
                label="User Name"
                type="text"
                name="username"
                value={main.username}
                onChange={handleChangeMain}
              />
              <Styled.InputField
                label="Email"
                type="email"
                value={main.email}
                onChange={handleChangeMain}
                name="email"
              />
              <Styled.InputField
                label="Phone"
                type="phone"
                value={main.phone}
                onChange={handleChangeMain}
                name="phone"
              />
              <Styled.InputField
                label="City"
                type="text"
                value={address.city}
                name="city"
                onChange={handleChangeAddress}
              />
              <Styled.InputField
                label="Suite"
                type="text"
                value={address.suite}
                name="suite"
                onChange={handleChangeAddress}
              />
              <Styled.InputField
                label="Street"
                type="text"
                value={address.street}
                name="street"
                onChange={handleChangeAddress}
              />
              <Styled.InputField
                label="Zip Code"
                type="text"
                value={address.zipcode}
                name="zipcode"
                onChange={handleChangeAddress}
              />
              <Styled.InputField
                label="Geo Lat"
                type="text"
                value={geo.lat}
                name="lat"
                onChange={handleChangeGeo}
              />
              <Styled.InputField
                label="Geo Lng"
                type="text"
                value={geo.lng}
                name="lng"
                onChange={handleChangeGeo}
              />
              <Styled.InputField
                label="Website"
                type="text"
                value={main.website}
                name="website"
                onChange={handleChangeMain}
              />
              <Styled.InputField
                label="Company"
                type="text"
                value={company.name}
                name="name"
                onChange={handleChangeCompany}
              />
              <Styled.InputField
                label="Company catch phrase"
                type="text"
                name="catchPhrase"
                value={company.catchPhrase}
                onChange={handleChangeCompany}
              />
              <Styled.InputField
                label="Company bs"
                type="text"
                name="bs"
                value={company.bs}
                onChange={handleChangeCompany}
              />
              <Styled.SubmitBtn>
                Submit
              </Styled.SubmitBtn>
            </Styled.FormBox>
        </DialogContent>
      </Dialog>
    </>
  );
}
export default AddModal;