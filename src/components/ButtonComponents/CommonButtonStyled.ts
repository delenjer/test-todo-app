import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const CommonButtonStyled = styled(Button)({
  '&.MuiButtonBase-root': {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '14px',
    wordBreak: 'break-all',
    textTransform: 'none',
    borderRadius: '5px',
    borderWidth: '1px',
    borderStyle: 'solid',
    transition: 'color 0.3s, background-color 0.3s',

    '&:hover': {
      color: 'var(--neutral-white)',
      backgroundColor: 'var(--primary-green)',
    }
  },
});
