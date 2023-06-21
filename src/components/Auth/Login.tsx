import { Button } from "@mui/material";
import { Form } from "react-bootstrap";
import { useAuth } from "../../hooks/useAuth";

function Login(props: HTMLFormElement) {
  const { email, setEmail, password, setPassword, signIn } = useAuth();

  return (
    <div className="rightPanel">
      <div className="form-title">
        <h1 className="typeform-title">Login</h1>
        <p className="form-subtitle">Welcome Back! Please login to your<br></br>account.</p>
      </div>
      <form className="auth-form" onSubmit={signIn}>
        <div className="form-group">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            aria-describedby="passwordHelpBlock"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <Button type="submit" variant="contained">Login</Button>
        </div>
        <p className="form-subtitle">New User?<a onClick={() => props.OnFormSwitch('register')} className="a-formlink"> SignUp</a></p>
      </form>
    </div>
  );
}

export default Login;
