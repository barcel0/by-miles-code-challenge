import { connect, useDispatch } from 'react-redux';
import { setError } from '../store/actions/api';
import WhiteBox from './WhiteBox';
import ContentBlock from './ContentBlock';
import Button from './Button';

const Error = ({ error }) => {
  const dispatch = useDispatch();

  const handleDismissClick = () => {
    dispatch(setError(null))
  }

  if (!error) return null;
  return (
    <WhiteBox>
      <ContentBlock title="Error">
        <span className="error-message">{error}</span>
        <div className="w-24">
          <Button label="Dismiss" enabled={true} onClick={handleDismissClick} />
        </div>
      </ContentBlock>
    </WhiteBox>
  );
}

export default connect(state => state.api)(Error);