import { FC, useCallback } from 'react';

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import { useDispatch } from 'react-redux';
import { getChecked } from '../../../store/feature/todosSlice';
import {StyledCheckbox, StyledListItem, StyledListItemButton, StyledListItemText} from './helperStyled';

type ItemTodoProps = {
  id: string,
  completed: boolean,
  text: string,
}

export const ItemTodo:FC<ItemTodoProps> = (
{
  id,
  completed,
  text,
}) => {
  const dispatch = useDispatch();

  const handleToggle = useCallback((val:string) => {
    dispatch(getChecked(val));

  }, [dispatch])

  return (
    <StyledListItem
      disablePadding
    >
      <StyledListItemButton
        onClick={(() => handleToggle(id))}
      >
        <StyledCheckbox
          edge="start"
          checked={completed}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': id }}
        />

        <StyledListItemText
          id={id}
          primary={text}
          completed={completed ? 'true' : 'false'}
        />
      </StyledListItemButton>

      <DeleteForeverOutlinedIcon
        sx={{ width: '16px', height: '16px', color: 'var(--warning-red-1)' }}
      />
    </StyledListItem>
  )
};
