import styled from 'styled-components';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

export const ModalBox = styled(props => <Dialog
  {...props}
  scroll={'paper'}
  aria-labelledby="scroll-dialog-title"
  aria-describedby="scroll-dialog-description"
/>)``;
export const ModalTitle = styled(props => <DialogTitle
  {...props}
  id="scroll-dialog-title"
/>)``;
export const ModalContent = styled(props => <DialogContent
  {...props}
  dividers={true}
/>)``;