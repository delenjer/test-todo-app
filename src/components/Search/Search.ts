import { styled } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';

export const StyledOutlinedInput = styled(OutlinedInput)`
  &.MuiOutlinedInput-root{
    width: 100%;
    border-radius: 5px;
    border: 1px solid var(--neutral-gray-3);

    &.Mui-focused {
      .MuiOutlinedInput-notchedOutline {
        border: none; 
      }
    }
    
    &:hover {
      border-color: var(--neutral-gray-3);
    }
  }
  
  & .MuiOutlinedInput-input {
    height: auto;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: var(--neutral-black);
    padding: 11px 8px;

    &::placeholder {
      color: var(--neutral-gray-2);
      opacity: 1;
    }
  }
  
  & .MuiOutlinedInput-notchedOutline {
    border-width: 0;
    border-color: var(--neutral-gray-3);
    
    &:focus-visible {
      outline: none;
    }
  }
`;
