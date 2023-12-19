import './App.css';
import SignIn from './components/auth/Signin';
import SignUp from './components/auth/Signup';
function App() {
  return (
    <div className="split-container">
      <div className="half-page">
        <SignIn></SignIn>
      </div>
    <div className="half-page">
        <div className='right-side'></div>
    </div>
  </div>
  );
}

export default App;