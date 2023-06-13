import { TextField } from '@mui/material';
import './LoginForm.css';

function LoginForm() {
  return (
    <form className='login-form'>
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Surname" variant="outlined" />
      <TextField id="outlined-basic" label="Surname" variant="outlined" />
    </form>
  );
}

export default LoginForm