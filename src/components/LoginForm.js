import { useState } from 'react';
import Input from './Input';
import Button from './Button';

const LogInForm = ({ handleLogIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignInClick = () => {
    if (email.length > 0 && password.length > 0) {
      handleLogIn(email, password)
    }
  }

  const setButtonEnabled = () => {
    if (email.length > 0 && password.length > 0) return true;
    return false;
  }

  return (
    <>
      <Input placeholder="Email" value={email} onChange={setEmail} />
      <Input type="password" placeholder="Passsword" value={password} onChange={setPassword} />
      <div className="flex justify-center">
        <Button label="Sign In" onClick={onSignInClick} enabled={setButtonEnabled()} />
      </div>
    </>
  );
}

export default LogInForm;