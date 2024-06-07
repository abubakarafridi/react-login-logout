import { useState } from 'react';
import './index.css';

function App() {
  const [login, setLogin] = useState(false);

  if (login === true) {
    return (
      <>
        <div className='page'>
          <div className='logoutPage'>
          <h1>Today News</h1>
          <p>
            Apple's Worldwide Developers Conference (WWDC) 2024: Apple is set
            to host its annual WWDC from June 10-14, 2024. The conference will
            feature new advancements in iOS, iPadOS, macOS, watchOS, tvOS, and
            visionOS. There will be a special in-person event at Apple Park on
            June 10, providing developers with the opportunity to engage
            directly with Apple team members and participate in various
            activities. The event will also be available online for developers
            worldwide​ (Apple)​.
          </p>
          <button onClick={() => setLogin(!login)} className='togglebutton'>
            {login ? 'Logout' : 'Log In'}
          </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="page">
          <div className='loginPage'>
          <h1>Welcome</h1>
          <label>Email</label> <br />
          <input
            type="text"
            id="emailInputLogin"
            placeholder="Type your email"
          />{' '}
          <br />
          <label>Password</label> <br />
          <input
            type="text"
            id="passwordInputLogin"
            placeholder="Type your password"
          />
          <button onClick={() => setLogin(!login)} className='togglebutton'>
            {login ? 'Logout' : 'Log In'}
          </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
