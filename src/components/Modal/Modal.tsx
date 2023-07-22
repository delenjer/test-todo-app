import React, { FC } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ModalButton } from '../ButtonComponents/ModalButton/ModalButton';

type ModalProps = {
  open: boolean,
  setOpen: (arg: boolean) => void;
  handleRemove: () => void;
};

export const Modal:FC<ModalProps> = ({ open, setOpen, handleRemove }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        Are you sure you want to delete it?
      </DialogTitle>

      <DialogActions>
        <ModalButton
          autoFocus
          onClick={() => {
            handleClose()
            handleRemove()
          }}
        >
          Yes
        </ModalButton>

        <ModalButton onClick={handleClose} autoFocus>
          No
        </ModalButton>
      </DialogActions>
    </Dialog>
  )
};
