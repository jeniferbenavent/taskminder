import { useState } from "react";
import { Button } from "@mui/material";
import { Form } from "react-bootstrap";
import { useAuth } from "../../hooks/useAuth";

function LogIn(props: any) {
  const { email, setEmail, password, setPassword, signIn, validateForm } = useAuth();
  const [errors, setErrors] = useState<{ email: string; password: string }>({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validationErrors.email == "" && validationErrors.password == "") {
      signIn(e);
    } else {
      setErrors((prevState) => ({ ...prevState, ...validationErrors }));
    }
  };

  return (
    <div className="rightPanel">
      <div className="form-title">
        <h1 className="typeform-title">Log In</h1>
        <p className="form-subtitle">Welcome Back! Please login to your<br></br>account.</p>
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
            LogIn
          </Button>
        </div>
        <p className="form-subtitle">
          New User?
          <a onClick={() => props.OnFormSwitch("register")} className="a-formlink">
            {" "}
            SignUp
          </a>
        </p>
      </form>
    </div>
  );
}

export default LogIn;

