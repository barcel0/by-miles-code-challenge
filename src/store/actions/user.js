export const SET_USER_POLICY_DETAILS = 'SET_USER_POLICY_DETAILS';

export const getUserPolicy = token => async dispatch => {
  try {
    const fetchResponse = await fetch('https://api.bybits.co.uk/policys/details', {
      method: 'GET',
      headers: {
        'environment': 'mock',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    const fullPolicyData = await fetchResponse.json();

    const { policy_ref, cover } = fullPolicyData.policy;
    const { make, model, colour, reg } = fullPolicyData.vehicle;
    const address = { ...fullPolicyData.policy.address }

    const policyData = {
      policy: { policy_ref, cover, address },
      vehicle: { make, model, colour, reg }
    };

    console.log(policyData);//debug
    dispatch({ type: SET_USER_POLICY_DETAILS, payload: policyData });
  } catch (err) {
    console.log(err); //error handling pending
  }
}


