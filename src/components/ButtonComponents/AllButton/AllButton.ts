import { styled } from '@mui/material/styles';
import { CommonButtonStyled } from '../CommonButtonStyled';

export const AllButton = styled(CommonButtonStyled)`
  &.MuiButtonBase-root {
    padding: 13px 20px;
    color: var(--primary-green);
    border-color: var(--primary-green);
  }

  &.is-all {
    color: var(--neutral-white);
    background-color: var(--primary-green);
  }
`;
