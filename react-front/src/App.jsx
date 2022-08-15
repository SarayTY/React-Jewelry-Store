import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import About from "./components/About";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignUpBiz from "./components/SignUpBiz";
import MyCards from "./components/MyCards";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import usersService from "./frontServices/usersService";
import cartService, { CART_LS_KEY } from "./frontServices/cartService";
import { toast } from "react-toastify";
import LogOut from "./components/Logout";
import CreateBizCard from "./components/CreateBizCard";
import ProtectedRoute from "./components/common/protectedRoute";
import EditCard from "./components/EditCard";
import Cart from "./components/shop/Cart";
import ProductPage from "./components/shop/ProductPage";
import productsService from "./frontServices/productsService";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
      products: [],
      cartItems: [],
      favorites: [],
    };
  }

  componentDidMount() {
    const user = usersService.getUser();
    Promise.allSettled([
      productsService.getProduct(),
      cartService.getCart(user?._id),
    ]).then(([resProducts, resCart]) => {
      this.setState(() => {
        return {
          user: user,
          products: resProducts.status === "fulfilled" ? resProducts.value : [],
          cartItems: resCart.status === "fulfilled" ? resCart.value : [],
        };
      });
    });
  }

  //add to cart function
  addToCart = (product) => {
    cartService.addToCart(this.state.user?._id, product._id).then((res) => {
      this.setState({ cartItems: res });
      localStorage.setItem(CART_LS_KEY, JSON.stringify(res));
    });
  };

  addFavorite = (productId) => {
    console.log("addToFavorite");
    productsService.addFavorite(productId);
  };

  // reduce item function
  reduceItem = (product) => {
    cartService
      .removeFromCart(this.state.user?._id, product._id)
      .then((res) => {
        this.setState({ cartItems: res });
        localStorage.setItem(CART_LS_KEY, JSON.stringify(res));
      });
  };

  // increase item function
  increaseItem = (product) => {
    cartService.addToCart(this.state.user?._id, product._id).then((res) => {
      this.setState({ cartItems: res });
      localStorage.setItem(CART_LS_KEY, JSON.stringify(res));
    });
  };

  // remove item function
  removeFromCart = (product) => {
    if (window.confirm("Are You Sure You Want To remove from cart ?")) {
      cartService
        .removeAllFromCart(this.state.user?._id, product._id)
        .then((res) => {
          this.setState({ cartItems: res });
          localStorage.setItem(CART_LS_KEY, JSON.stringify(res));
        });
    }
  };

  // clear cart function
  clearCart = () => {
    cartService.clearCart(this.state.user?._id).then((res) => {
      this.setState({ cartItems: res });
      localStorage.setItem(CART_LS_KEY, JSON.stringify(res));
      toast.success("purchase was successfully done", {
        position: "top-center",
      });
    });
  };

  render() {
    const { user } = this.state;

    return (
      <div className="App d-flex flex-column min-vh-100">
        <ToastContainer />
        <header>
          <Navbar user={user} cartItems={this.state.cartItems} />
        </header>

        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/myCards"
              element={
                <ProtectedRoute bizOnly>
                  <MyCards />
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-cards/edit/:id"
              element={
                <ProtectedRoute bizOnly>
                  <EditCard />
                </ProtectedRoute>
              }
            />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signUp-Biz" element={<SignUpBiz />} />
            <Route
              path="/creatBizCard"
              element={
                <ProtectedRoute bizOnly>
                  <CreateBizCard />
                </ProtectedRoute>
              }
            />
            <Route path="/createNewBizCard" element={<CreateBizCard />} />
            <Route path="/editCard" element={<EditCard />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/products"
              element={
                <ProductPage
                  products={this.state.products}
                  addToCart={this.addToCart}
                  addFavorite={this.addFavorite}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  products={this.state.products}
                  cartItems={this.state.cartItems}
                  removeFromCart={this.removeFromCart}
                  reduceItem={this.reduceItem}
                  increaseItem={this.increaseItem}
                  clearCart={this.clearCart}
                />
              }
            />
            <Route path="/logout" element={<LogOut />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
