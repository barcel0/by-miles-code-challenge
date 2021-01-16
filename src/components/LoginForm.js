import { useState } from 'react';
import Input from './Input';
import Button from './Button';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (email, password) => {
    console.log(email); //debug
    console.log(password); //debug

  }

  return (
    <div>
      <Input placeholder="Email" value={email} onChange={setEmail} />
      <Input type="password" placeholder="Passsword" value={password} onChange={setPassword} />
      <Button label="Sign In" onClick={() => handleSignIn(email, password)} />
    </div>
  );
}

export default LoginForm;