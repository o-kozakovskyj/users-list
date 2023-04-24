import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import * as Styled from './FormPage.styled';

const FormPage = ({formSubmit,user={}}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: user,
  })
  const onSubmit = (data) => {
    formSubmit(data)
    reset();
  }
  return (
    <Styled.FormBox onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('name', {
          required: 'Name is required field',
        })} 
        type='text'
        label="Name"
        name="name"
        error={!!errors.name}
        helperText={errors?.name?.message}
      />
      <TextField
        {...register('username', {
          required: 'User Name is required field',
        })}
        type='text'
        label="User Name"
        name="username"
        error={!!errors?.username}
        helperText={errors?.username?.message}
      />
      <TextField
        {...register('email', {
          required: 'E-mail is required field',
          pattern: {
            message: 'Please enter valid e-mail',
            value: /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
          }
        })}
        type='text'
        label="Email"
        name="email"
        error={!!errors.email}
        helperText={errors?.email?.message}
      />
      <TextField
        {...register('phone', {
          required: 'Phone is required field',
        })}
        type='text'
        label="Phone"
        name="phone"
        error={!!errors.phone}
        helperText={errors?.phone?.message}
      />
      <TextField
        {...register('address.city', {
          required: 'City is required field',        
        })}
        type='text'
        label="City"
        name="address.city"
        error={!!errors.address?.city}
        helperText={errors?.address?.city?.message}
      />
      <TextField
        {...register('address.suite', {
          required: 'Suite is required field',
        })}
        type='text'
        label="Suite"
        name="address.suite"
        error={!!errors.address?.suite}
        helperText={errors?.address?.suite?.message}
      />
      <TextField
        {...register('address.street', {
          required: 'Street is required field',
        })}
        type='text'
        label="Street"
        name="address.street"
        error={!!errors.address?.street}
        helperText={errors?.address?.street?.message}
      />
      <TextField
        {...register('address.zipcode', {
          required: 'Zip code is required field',
        })}
        type='text'
        label="Zip code"
        name="address.zipcode"
        error={!!errors.address?.zipcode}
        helperText={errors?.address?.zipcode?.message}
      />
      <TextField
        {...register('address.geo.lat', {
          required: 'Geo lat is required field',

        })}
        type='text'
        label="Geo Lat"
        name="address.geo.lat"
        error={!!errors.address?.geo?.lat}
        helperText={errors?.address?.geo?.lat?.message}
      />
      <TextField
        {...register('address.geo.lng', {
          required: 'Geo lng is required field',

        })}
        type='text'
        label="Geo Lng"
        name="address.geo.lng"
        error={!!errors.address?.geo.lng}
        helperText={errors?.address?.geo.lng?.message}
      />
      <TextField
        {...register('company.name', {
          required: 'Company Name is required field',

        })}
        type='text'
        label="Company"
        name="company.name"
        error={!!errors.name}
        helperText={errors?.company?.name.message}
      />
      <TextField
        {...register('company.catchPhrase', {
          required: 'Company catchPhrase is required field',

        })}
        type='text'
        label="Company catch Phrase"
        name="company.catchPhrase"
        error={!!errors?.company?.catchPhrase}
        helperText={errors?.company?.catchPhrase?.message}
      />
      <TextField
        {...register('company.bs', {
          required: 'Company bs is required field',

        })}
        type='text'
        label="Company bs"
        name="company.bs"
        error={!!errors?.company?.bs}
        helperText={errors?.company?.bs?.message}
      />
      <Styled.SubmitBtn>
        Submit
      </Styled.SubmitBtn>
    </Styled.FormBox>
  )
}
export default FormPage;