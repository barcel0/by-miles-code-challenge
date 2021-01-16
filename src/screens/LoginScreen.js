import { useDispatch } from 'react-redux';
import { logIn } from '../store/actions/auth';
import LayoutMain from '../components/LayoutMain';
import WhiteBox from '../components/WhiteBox';
import ContentBlock from '../components/ContentBlock';
import LogInForm from '../components/LogInForm';


const LogInScreen = () => {
  const dispatch = useDispatch();

  const handleLogIn = (email, password) => {
    dispatch(logIn(email, password));
  }

  return (
    <LayoutMain>
      <WhiteBox>
        <ContentBlock title="Sign In">
          <LogInForm handleLogIn={handleLogIn} />
        </ContentBlock>
      </WhiteBox>
    </LayoutMain>
  );
}

export default LogInScreen;