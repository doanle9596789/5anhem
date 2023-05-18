
import {Route, Routes} from "react-router-dom";
import Home from "./public/Home";
import Login from "./component/Login/Login";

function App() {
  return (
 <Routes>
     <Route path={"/"} element={<Home/>}/>
     <Route path={"/login"} element={<Login/>}/>
 </Routes>
  );
}

export default App;
