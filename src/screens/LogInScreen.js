import { useDispatch, connect } from 'react-redux';
import { logIn } from '../store/actions/auth';
import LayoutMain from '../components/LayoutMain';
import WhiteBox from '../components/WhiteBox';
import ContentBlock from '../components/ContentBlock';
import LogInForm from '../components/LogInForm';
import Error from '../components/Error';
import LoadingSpinner from '../components/LoadingSpinner';

const LogInScreen = ({ loading }) => {
  const dispatch = useDispatch();

  const handleLogIn = (email, password) => {
    dispatch(logIn(email, password));
  }

  return (
    <LayoutMain>
      <Error />
      <WhiteBox>
        {loading ? <LoadingSpinner /> :
          <ContentBlock title="Sign In">
            <LogInForm handleLogIn={handleLogIn} />
          </ContentBlock>
        }
      </WhiteBox>
    </LayoutMain>
  );
}


export default connect(state => state.api)(LogInScreen);