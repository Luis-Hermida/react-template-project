import { Button } from '@material-ui/core';
import { FC } from 'react';

export interface ReduxExampleProps {
  testApiValues: any;
}
export interface ReduxExampleActionProps {
  onGetTestApi: (name: string) => void;
}

export const ReduxStateExample: FC<ReduxExampleProps & ReduxExampleActionProps> = ({
  testApiValues,
  onGetTestApi,
}) => {
  return (
    <div style={{ maxWidth: 600 }}>
      <div>
        <h1>Redux State Example</h1>
        <p>
          For the state management we are using redux a very lightweight and easy to use library
          that let's us configure our store and reducers. We are also using Thunk that let's us
          handle Async logic with Redux. Everything regarding state manager is under{' '}
          <code>./state/*</code>.
        </p>
      </div>
      <div>
        <h2>Usage of Test Slice call</h2>
        <p>
          You will also want to delete everythung regarding the test api in the{' '}
          <code>app.slice.ts</code> and in <code>./api/main.ts</code>
        </p>
        <Button color="primary" onClick={() => onGetTestApi('Luis')}>
          Change State
        </Button>
      </div>
    </div>
  );
};
