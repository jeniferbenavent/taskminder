import { Button } from '@mui/material';
import { Form } from 'react-bootstrap';
import './LoginForm.css';

function LoginForm() {
  return (
    <div className='rightPanel'>
      <div className='infoTitle'>
        <h1>Login</h1>
        <p>Welcome Back! Please login to your<br></br>account.</p>
      </div>
      <form className='login-form'>
        <div className="form-group">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </div>
        <div className="form-group">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
        </div>
        <div className="form-group">
          <Button type="submit" variant="contained">Login</Button>
        </div>
      </form>
      <p>New User? <a>SignUp</a></p>
    </div>
  );
}

export default LoginForm