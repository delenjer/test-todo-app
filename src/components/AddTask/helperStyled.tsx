import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const AddTextField = styled(TextField)`
  &.MuiTextField-root {
    position: relative;
    width: 100%;

    .MuiFormHelperText-root {
      position: absolute;
      bottom: -21px;
      left: 0;
      color: var(--warning-red-1);
      margin: 0;
    }
  }

  & label {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: var(--neutral-gray-2);
    transform: translate(14px, 11px) scale(1);
  }

  & label.Mui-focused {
    color: ${props => currentColor(props.error, 'var(--warning-red-1)', 'var(--primary-green)')};
    transform: translate(14px, -9px) scale(0.75);
  }

  & .MuiInput-underline:after {
    border-bottom-color: #B2BAC2;
  }

  & .MuiOutlinedInput-root {
    border-radius: 5px;

    & fieldset {
      border: 1px solid ${props => currentColor(props.error, 'var(--warning-red-1)', 'var(--neutral-gray-3)')};
    }

    &:hover fieldset {
      border-color: ${props => currentColor(props.error, 'var(--warning-red-1)', 'var(--neutral-gray-3)')}
    }

    &.Mui-focused fieldset {
      border: 1px solid ${props => currentColor(props.error, 'var(--warning-red-1)', 'var(--primary-green)')};
    }

    & .MuiOutlinedInput-input {
      padding: 11px 8px;

      &::placeholder {
        color: #000;
        opacity: 1;
      }
    }
  }
`;

function currentColor(err:unknown, errColor:string, defaultColor:string):string {
  return err ? errColor : defaultColor;
}
