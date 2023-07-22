import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const CommonButtonStyled = styled(Button)`
  &.MuiButtonBase-root {
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    word-break: break-all;
    text-transform: none;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    transition: color 0.3s, background-color 0.3s;
  
    &:hover {
      color: var(--neutral-white);
      background-color: var(--primary-green);
    }
  },
`;
