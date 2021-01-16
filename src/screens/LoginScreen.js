import LayoutMain from '../components/LayoutMain';
import WhiteBox from '../components/WhiteBox';
import ContentBlock from '../components/ContentBlock';
import LoginForm from '../components/LoginForm';

const LoginScreen = () => {
  return (
    <LayoutMain>
      <WhiteBox>
        <ContentBlock title="Sign In">
          <LoginForm />
        </ContentBlock>
      </WhiteBox>
    </LayoutMain>
  );
}

export default LoginScreen;