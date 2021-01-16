import { Provider } from 'react-redux';
import store from './store/store';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider >
  );
}

export default App;
