import LoginForm from '../../components/LoginForm/LoginForm';
import './LogIn.css'

function LogIn() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col logo">
            <div className='logoname'>
              <img src='/src/assets/img/lotus-white.png' className='logo'/>
              <h1 className='name'>TaskMinder</h1>
            </div>
          </div>
          <div className="form col">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn