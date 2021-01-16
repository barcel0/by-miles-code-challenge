import { Provider } from 'react-redux';
import store from './store/store';
import LogInScreen from './screens/LogInScreen';

function App() {
  return (
    <Provider store={store}>
      <LogInScreen />
    </Provider >
  );
}

export default App;
