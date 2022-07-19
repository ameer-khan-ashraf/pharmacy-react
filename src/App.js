import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import NavBar from "./components/NavBar/NavBar";
import Product from "./components/Product/Product";
import Profile from "./components/Profile/Profile";
import History from "./components/History/History";
import ErrorPage from "./components/404/404";
const App = () =>{
  return (
    <Router>
      <Routes>
          <Route path='/' exact element={<Auth/>}/>
          <Route element={<NavBar/>}>
            <Route path='/products' exact element={<Home/>}/>
            <Route path='/product/:id' exact element={<Product/>}/>
            <Route path='/history' exact element={<History/>}/>
            <Route path='/profile' exact element={<Profile/>}/>
          </Route>
          <Route path='*' element={<ErrorPage/>}/>
        <Route/>
      </Routes>
    </Router>
  )
}

export default App;
