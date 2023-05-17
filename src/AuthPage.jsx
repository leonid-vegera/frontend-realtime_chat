import axios from 'axios';

const AuthPage = ({onAuth}) => {
  const onSubmit = (event) => {
    event.preventDefault();
    const {value} = event.target[0];
    axios.post(
      'http://localhost:1927/authenticate',
      {name: value, password: value}
    ).then(result => {
      onAuth({...result.data, secret: value});
    }).catch(error => console.log('Error occurred', error))
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 🍻</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username"/>
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;