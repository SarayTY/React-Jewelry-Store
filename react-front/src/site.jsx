import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./components/homePage";
import About from "./components/about";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
// import SignUpBiz from "./components/signUpBiz";
import MyCards from "./components/myCards";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import usersService from "./frontServices/usersService";
import LogOut from "./components/logout";
import CreateBizCard from "./components/createBizCard";
import ProtectedRoute from "./components/common/protectedRoute";
import EditCard from "./components/editCard";
import Products from "./components/shop/products";
import data from "./components/shop/data";
import Cart from "./components/cart";

export const App = () => {
 const [userNew , setUserNew] = useState(null);
 const { productItems } = data ;
  useEffect(()=> {
     usersService.getUser(),
     []
  }) 

  return (

    
  
    
      <div className="App d-flex flex-column min-vh-100">
        <ToastContainer />
        <header>
          <Navbar setUserNew={user} />
        </header>

        <main className="container flex-fill">
          <Routes>
            <Route
              path="/my-cards/edit/:id"
              element={
                <ProtectedRoute bizOnly>
                  <EditCard />
                </ProtectedRoute>
              }
            />

            <Route path="/" element={<HomePage />} />
          
        
            <Route
              path="/myCards"
              element={
                <ProtectedRoute bizOnly>
                  <MyCards />
                </ProtectedRoute>
              }
            />
            <Route path="/signUp" element={<SignUp />} />
            {/* <Route path="/signUp-Biz" element={<SignUpBiz />} /> */}
            <Route
              path="/creatBizCard"
              element={
                <ProtectedRoute bizOnly>
                  <CreateBizCard />
                </ProtectedRoute>
              }
            />
            <Route path="/createNewBizCard" element={<CreateBizCard />} />
            {/* <Route path="/editCard" element={<EditCard />} /> */}
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products productItems= {productItems}/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/logout" element={<LogOut />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
            }
