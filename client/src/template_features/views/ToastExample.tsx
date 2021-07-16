import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { toast, ToastOptions, ToastPosition, TypeOptions } from 'react-toastify';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const ToastExample = () => {
  const [position, setPosition] = useState<ToastPosition>('bottom-center');
  const [type, setType] = useState<TypeOptions>('default');

  function handleToastPositionGuard(value: string): value is ToastPosition {
    return true;
  }

  const handlePositionChange = (event: ChangeEvent) => {
    const element = event.target as HTMLInputElement;
    const value = element.value;

    if (handleToastPositionGuard(value)) {
      setPosition(value);
    }
  };

  function handleToastTypeGuard(value: string): value is TypeOptions {
    return true;
  }

  const handleTypeChange = (event: ChangeEvent) => {
    const element = event.target as HTMLInputElement;
    const value = element.value;

    if (handleToastTypeGuard(value)) {
      setType(value);
    }
  };

  const notify = (type: TypeOptions) => {
    switch (type) {
      case 'info':
        toast.info('Info toast', {
          position: position,
        });
        break;
      case 'success':
        toast.success('Success toast', {
          position: position,
        });
        break;
      case 'warning':
        toast.warn('Warning toast', {
          position: position,
        });
        break;
      case 'error':
        toast.error('Error toast', {
          position: position,
        });
        break;
      case 'default':
        toast('Default toast', {
          position: position,
        });
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ maxWidth: 600 }}>
      <div>
        <h1>Toast Example</h1>
        <p>
          For the toast we are using{' '}
          <a href="https://www.npmjs.com/package/react-toastify">react-toastify</a> a very
          lightweight and easy to use library that let's us configure our toaster the way we want.
        </p>
        <p>
          For custom styles you will have to overwrite 'react-toastify/dist/ReactToastify.css' with
          'toast_styles.css' in the 'index.tsx'
        </p>
      </div>

      <FormControl style={{ width: 200 }}>
        <InputLabel>Position</InputLabel>
        <Select value={position} onChange={(e: any) => handlePositionChange(e)}>
          <MenuItem value="top-left">top-left</MenuItem>
          <MenuItem value="top-center">top-center</MenuItem>
          <MenuItem value="top-right">top-right</MenuItem>
          <MenuItem value="bottom-left">bottom-left</MenuItem>
          <MenuItem value="bottom-center">bottom-center</MenuItem>
          <MenuItem value="bottom-right">bottom-right</MenuItem>
        </Select>
      </FormControl>

      <FormControl style={{ width: 200, marginLeft: 20 }}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e: any) => handleTypeChange(e)}>
          <MenuItem value="info">info</MenuItem>
          <MenuItem value="success">success</MenuItem>
          <MenuItem value="warning">warning</MenuItem>
          <MenuItem value="error">error</MenuItem>
          <MenuItem value="default">default</MenuItem>
        </Select>
      </FormControl>
      <div style={{ marginTop: 20 }}>
        <Button
          variant="contained"
          onClick={() => {
            notify(type);
          }}
          color="primary"
        >
          Notify
        </Button>
      </div>
    </div>
  );
};

export default ToastExample;
