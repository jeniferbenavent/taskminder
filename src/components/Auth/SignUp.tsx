import { Button } from "@mui/material";
import { Form } from "react-bootstrap";
import { useAuth } from "../../hooks/useAuth";

function SignUp(props: HTMLFormElement) {
  const { email, setEmail, password, setPassword, signUp } = useAuth();

  return (
    <div className="rightPanel">
      <div className="form-title">
        <h1 className="typeform-title">Sign Up</h1>
        <p className="form-subtitle">Welcome! Create a new account.</p>
      </div>
      <form className="auth-form" onSubmit={signUp}>
        <div className="form-group">
          <Form.Label>Email</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            aria-describedby="passwordHelpBlock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <Button type="submit" variant="contained">
            SignUp
          </Button>
        </div>
        <p className="form-subtitle">
          Already have a user?
          <a onClick={() => props.OnFormSwitch("login")} className="a-formlink">
            LogIn
          </a>
        </p>
      </form>
    </div>
  );
}

export default SignUp;