import { connect } from 'react-redux';
import { carStringFormatter } from '../helpers/carStringFormatter';
import LayoutMain from '../components/LayoutMain';
import WhiteBox from '../components/WhiteBox';
import ContentBlock from '../components/ContentBlock';
import PolicyDetailsRow from '../components/PolicyDetailsRow';
import LoadingSpinner from '../components/LoadingSpinner';

const PolicyDetailsScreen = ({ policy, vehicle }) => {
  const { make, model, colour, reg } = vehicle;
  const { policy_ref, cover } = policy;
  const { line_1, line_2, postcode } = policy.address;
  const formattedReference = policy_ref.replace(/-/g, " ");
  const formattedAddress = `${line_1}, ${line_2}, ${postcode}`;
  return (
    <LayoutMain>
      <WhiteBox>
        <ContentBlock title="My Policy">
          <PolicyDetailsRow title="Policy Reference" content={formattedReference} />
          <PolicyDetailsRow title="Cover Type" content={cover} />
          <PolicyDetailsRow title="Car" content={carStringFormatter(make, model, colour, reg)} />
          <PolicyDetailsRow title="Address" content={formattedAddress} />
        </ContentBlock>
      </WhiteBox>
    </LayoutMain>
  );
}

export default connect(state => state.user.policyDetails)(PolicyDetailsScreen);