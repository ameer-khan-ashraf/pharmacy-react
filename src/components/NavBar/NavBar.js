import React,{useEffect} from 'react'
import { Outlet } from 'react-router';
import {Link,useNavigate} from 'react-router-dom' 
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
export const NavBar = ({ fixed }) => {
    const navigate = useNavigate();
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
      if(!localStorage.getItem('profile')) logout();
      const token = JSON.parse(localStorage.getItem('profile')).token;
      const decodedToken = decode(token);
      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    },[navigate])
    
    const logout = ()=>{
      dispatch({type: 'LOGOUT'});
      navigate('/');
    }
  return (
    <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-600 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to={"/products"}
            >
              E-Pharmacy
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-indigo-100 hover:text-white"
                  to={'/history'}
                >
                  <i className="fa-solid fa-clock-rotate-left text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Order History</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-indigo-100 hover:text-white"
                  to={'/profile'}
                >
                  <i className="fa-solid fa-user text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Profile</span>
                </Link>
              </li>
              <button
                onClick={logout}
                type="button"
                className="border text-xs uppercase font-bold leading-snug border-red-500 bg-red-500 text-white rounded-md px-4 py-1 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
        <Outlet/>
    </>
  )
}

export default NavBar