import { connect } from 'react-redux';
import { getTestApiData } from '../../state/app.slice';
import { RootState } from '../../state/root.reducer';
import { AppDispatch } from '../../state/store';
import { ReduxExampleActionProps, ReduxExampleProps, ReduxStateExample } from './ReduxStateExample';

const mapStateToProps = (state: RootState): ReduxExampleProps => ({
  testApiValues: state.app.testApi,
});

const mapDispatchToProps = (dispatch: AppDispatch): ReduxExampleActionProps => ({
  onGetTestApi: (name: string) => dispatch(getTestApiData(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxStateExample);
