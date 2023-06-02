import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "./context/UserContext";

import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { SignUp } from './components/SignUp';
import { Music } from './components/Music';
import { Home } from './components/Home';
import { About } from './components/About';



//* import { Lists } from './components/Lists';

/*
<Route path="/Home" element={<Home/>}/>
<Route path="/Lists" element={<Lists/>}/>

*/

import { Footer } from './components/Footer';

// axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.baseURL = "https://backendloginregister.vercel.app/api";

function App() {

  const { user } = useUser();
  axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;

  const Public = ({ children }) => {
    return !user.login ? children : <Navigate to="/About" />;
  };



  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route
          path="/"
          element={
            <Public>
              <Home />
            </Public>
          }
        />

        <Route
          path="/Music"
          element={
            <Public>
              <Music />
            </Public>
          }
        />

        <Route
          path="/Login"
          element={
            <Public>
              <Login />
            </Public>
          }
        />

        <Route
          path="/SignUp"
          element={
            <Public>
              <SignUp />
            </Public>
          }
        />

        <Route
          path="/About"
          element={
            <Public>
              <About />
            </Public>
          }
        />
       
           
     
     </Routes>

    <Footer></Footer>
       

    </BrowserRouter>
  );
}

export default App;
