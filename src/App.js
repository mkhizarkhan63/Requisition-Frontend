import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import { User } from "./Pages/User";

function App() {

  var isAuth = false;
  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/" exact element={<Login />} />
          <Route path="/Home" exact element={<Home />} />
          <Route path="/User" exact element={<User />} />
          <Route path="/*" exact element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
