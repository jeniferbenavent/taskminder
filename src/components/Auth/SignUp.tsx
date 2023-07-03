import { Button } from "@mui/material";
import { Form } from "react-bootstrap";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
function SignUp(props: any) {
  const { email, setEmail, password, setPassword, signUp, validateForm } = useAuth();
  const [errors, setErrors] = useState<{ email: string; password: string }>({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      signUp(e);
    } else {
      setErrors((prevState) => ({ ...prevState, ...validationErrors }));
    }
  };

  return (
    <div className="rightPanel">
      <div className="form-title">
        <h1 className="typeform-title">Sign Up</h1>
        <p className="form-subtitle">Welcome! Create a new account.</p>
      </div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <Form.Label>Email</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
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
          {errors.password && <span className="form-error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <Button type="submit" variant="contained">
            SignUp
          </Button>
        </div>
        <p className="form-subtitle">
          Already have a user?
          <a onClick={() => props.OnFormSwitch("login")} className="a-formlink">
            {" "}
            LogIn
          </a>
        </p>
      </form>
    </div>
  );
}

export default SignUp;

