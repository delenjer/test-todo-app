import { styled } from '@mui/material/styles';
import { CommonButtonStyled } from '../CommonButtonStyled';

export const AddButton = styled(CommonButtonStyled)({
  '&.MuiButtonBase-root': {
    minWidth: '120px',
    padding: '14px 20px',
    color: 'var(--primary-green)',
    borderColor: 'var(--primary-green)',
  },
});
