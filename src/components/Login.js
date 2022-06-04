import '../App.css';
import {BrowserRouter ,Link,Navigate, Route ,Routes} from 'react-router-dom';


function Login(){



   return(
       <div className="login">
           <h1>Login</h1>
           <input type="email" placeholder='email..' />
           <input type="password" placeholder='password..' />
           <button>Login</button>
           <Link to="/registration">haven't registered yet?</Link>
       </div>
   );
}

export default Login;