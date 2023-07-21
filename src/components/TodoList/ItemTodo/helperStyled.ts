import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

interface StyledListItemTextProps {
  completed?: string;
}

export const StyledListItem = styled(ListItem)`
  &.MuiListItem-root {
    padding: 14px 20px;
    border-radius: 4px;
    
    &:hover {
      background-color: var(--neutral-gray-4);
    }
  }
`;

export const StyledListItemButton = styled(ListItemButton)`
  &.MuiListItemButton-root {
    align-items: flex-start;
    gap: 0 5px;
    padding: 0;
    
    &:hover {
      background-color: initial;
    }
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  &.MuiCheckbox-colorPrimary {
    color: var(--neutral-gray-2);
    padding: 2px 0 0 0;
    
    .MuiSvgIcon-root {
      width: 16px;
      height: 16px;
    }
  }
  
  &.MuiCheckbox-colorPrimary.Mui-checked {
    color: var(--primary-green);
  }
`;

export const StyledListItemText = styled(ListItemText)<StyledListItemTextProps>`
  &.MuiListItemText-root {
    margin: 0;
    
    .MuiTypography-root {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      color: var(--neutral-black);
      text-decoration: ${props => props.completed === 'true' ? 'line-through' : 'none'};
    }
  }
`;
