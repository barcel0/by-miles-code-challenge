import { useState } from 'react';
import Input from './Input';
import Button from './Button';

const LogInForm = ({ handleLogIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <Input placeholder="Email" value={email} onChange={setEmail} />
      <Input type="password" placeholder="Passsword" value={password} onChange={setPassword} />
      <Button label="Sign In" onClick={() => handleLogIn(email, password)} />
    </div>
  );
}

export default LogInForm;