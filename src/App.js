
import './App.css';

import Blog from './Private/Blog';
import SignIn from './Public/SignIn';
import { useSelector } from "react-redux";



function App() {

  const login = useSelector((state)=>state.login.token);

  return (
    <div className="App">

     {/* <Blog></Blog> */}
    { login == '' ? <SignIn></SignIn> : <Blog></Blog> }
{/*       
     <SignIn></SignIn> */}
     
    </div>
  );
}

export default App;
