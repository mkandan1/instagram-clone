import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import { Component, useState, useEffect } from "react";
import UserProfile from "./pages/UserProfile";
import Settings from "./pages/Settings";
import Chat from "./pages/Chat";
import Create from "./pages/Create";

function App() {

  const [isUser, setIsUser] = useState(false);

  useEffect(()=>{
    const user = localStorage.getItem('iguser');
    if(user != null){
      setIsUser(true)
    }
  })

  return (
    <>
      {
        isUser ? 
        <BrowserRouter>
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/auth/login' element={<Login />} />
            <Route path='/UserProfile' element={<UserProfile />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/inbox' element={<Chat authed={isUser}/>} />
            <Route path='/auth/password/reset' element={<ForgotPassword authed={isUser}/>} />
            <Route path='/create' element={<Create authed={isUser}/>} />
            <Route path='/auth/accounts/signup' element={<Signup authed={isUser}/>} />
            <Route path='/user/*' element={<UserProfile />} />
          </Routes>
        </BrowserRouter> 
        : 
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<Login />} />
            <Route path='/auth/password/reset' element={<ForgotPassword />} />
            <Route path='/auth/accounts/signup' element={<Signup />} />
          </Routes>
        </BrowserRouter> 

      }
    </>
  );
}

export default App;
