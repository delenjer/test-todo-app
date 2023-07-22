import { styled } from '@mui/material/styles';
import { CommonButtonStyled } from '../CommonButtonStyled';

export const DoneButton = styled(CommonButtonStyled)`
  &.MuiButtonBase-root {
    padding: 11px 7px;
    color: var(--primary-green);
    border-color: var(--neutral-gray-4);
  },

  .icon-btn {
    margin-right: 5px;
  }

  &:hover {
    border-color: var(--primary-green);
  }
  
  &.is-done {
    color: var(--neutral-white);
    background-color: var(--primary-green);
  }
`;
