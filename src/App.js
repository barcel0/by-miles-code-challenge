import { connect } from 'react-redux';
import LogInScreen from './screens/LogInScreen';
import PolicyDetailsScreen from './screens/PolicyDetailsScreen';

function App({ api, auth }) {
  const { loading } = api;
  const { authenticated } = auth;

  if (!authenticated) return <LogInScreen />
  if (authenticated && !loading) return <PolicyDetailsScreen />
  return null;
}

export default connect(state => state)(App)