import { connect } from 'react-redux';
import LogInScreen from './screens/LogInScreen';
import PolicyDetailsScreen from './screens/PolicyDetailsScreen';

function App({ api, auth }) {
  const { loading } = api;
  const { authenticated } = auth;

  if (loading) return 'Loading...';
  if (!authenticated) return <LogInScreen />
  return <PolicyDetailsScreen />
}

export default connect(state => state)(App)