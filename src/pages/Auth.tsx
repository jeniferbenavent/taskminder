import { useState } from 'react';
import SidePanelLogo from '../components/SidePanelLogo/SidePanelLogo'
import Login from '../components/Auth/Login';
import SignUp from '../components/Auth/SignUp';

const Auth = () => {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formType: string) => {
    setCurrentForm(formType)
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col logo">
          <SidePanelLogo />
        </div>
        <div className="form col">
          {currentForm == 'login' ? <Login OnFormSwitch={toggleForm} /> : <SignUp OnFormSwitch={toggleForm} />}
        </div>
      </div>
    </div>
  )
}

export default Auth
