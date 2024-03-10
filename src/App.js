import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout.js";

function App() {
  return (
    <>
      <div className="text-3xl text-blue p-5 bg-gray-500">
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile/:id" element={<Profile/>}/>
          </Route>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/reset-password" element={<ResetPassword />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
