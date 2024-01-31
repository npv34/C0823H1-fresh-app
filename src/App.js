import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Master from "./layout/Master";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <Routes>
          <Route path={"/login"} element={<Login/>}/>
          <Route path={"/"} element={<Master/>}>
              <Route path={"/home"} element={<Home/>}/>
              <Route path={"/cart"} element={<Cart/>}/>
          </Route>

      </Routes>
    </>
  );
}

export default App;
