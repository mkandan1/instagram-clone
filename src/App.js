import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/auth/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
