import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Todos from "./components/Todos";
import Users from "./components/Users";
import NotFound from "./components/NotFound";
import UserDetails from "./components/UserDetails";
import Register from "./components/Register";
import Login from "./components/Login";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Todos" element={<Todos />} />

          <Route path="/users">
            <Route index element={<Users />} />
            <Route path=":id" element={<UserDetails />} /> // nested route
          </Route>

          <Route path="/register" element={<Register name={""} email={""} password={""} />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer devName={"Tamiros"} />
    </>
  );
}

export default App;
