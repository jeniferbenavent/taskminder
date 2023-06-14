import { Button, TextField } from '@mui/material';
import './LoginForm.css';

function LoginForm() {
  return (
    <div className='rightPanel'>
      <div className='infoTitle'>
        <h1>Login</h1>
        <p>Welcome Back! Please login to your account.</p>
      </div>
      <form className='login-form'>
        <div className="form-group">
          <TextField className="form-input" id="outlined-basic" label="Username" variant="outlined" />
        </div>
        <div className="form-group">
          <TextField className="form-input" id="outlined-basic" label="Email" variant="outlined" />
        </div>
        <div className="form-group">
          <TextField className="form-input" id="outlined-basic" label="Password" variant="outlined" />
        </div>
        <div className="form-group">
          <Button type="submit" variant="contained">LogIn</Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm