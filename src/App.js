import { Provider, connect } from 'react-redux';
import store from './store/store';
import LogInScreen from './screens/LogInScreen';

function App({ api, auth }) {
  const { loading } = api;
  const { authenticated } = auth;
  return (
    // <Provider store={store}>
    <LogInScreen />
    // </Provider >
  );
}

// export default App;
export default connect(state => state)(App)
