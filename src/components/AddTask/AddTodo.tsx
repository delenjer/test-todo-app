import React from 'react';

import Box from "@mui/material/Box";
import { AddTextField } from './helperStyled';
import { AddButton } from '../ButtonComponents/AddButton/AddButton';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import uuid4 from 'uuid4';
import { useDispatch } from 'react-redux';
import { getTodos } from '../../store/feature/todosSlice';

interface IFormInput {
  text: string,
}

export const AddTodo = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      text: '',
    }
  });
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const { text } = data;

    if (text.length) {
      dispatch(getTodos({
        id: uuid4(),
        text,
        completed: false,
      }));
    }

    reset({ text: '' });
  };

  return (
    <form
      action="#"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '0 10px',
        }}
      >
        <Controller
          name="text"
          control={control}
          rules={{ minLength: 3 }}
          render={({ field }) =>
            <AddTextField
              id="outlined-text"
              label="Your task"
              placeholder="Write your checklist text here"
              { ...field }
              variant="outlined"
              error={!!errors.text}
              helperText={errors.text && 'At least 2 characters'}
            />
          }
        />

        <AddButton type="submit">Add</AddButton>
      </Box>
    </form>
  )
};
