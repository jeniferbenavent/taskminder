
import { FormEvent, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { Button } from '@mui/material';
import { Form } from 'react-bootstrap';
import './SignUpForm.css';


function SignUpForm() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const signIn = (e: FormEvent) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    }).catch((error) => {
      console.log(error);
    })
  };

  return (
    <div className='rightPanel'>
      <div className='infoTitle'>
        <h1>Sign Up</h1>
        <p>Welcome! Create a new<br></br>account.</p>
      </div>
      <form className='login-form' onSubmit={signIn}>
        <div className="form-group">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) =>setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <Button type="submit" variant="contained">Sign Up</Button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm