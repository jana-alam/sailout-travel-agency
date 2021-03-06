import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AuthProvider from "./context/AuthProvider";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import MyBookings from "./components/MyBookings/MyBookings";
import Footer from "./components/Footer/Footer";
import AddTour from "./components/AddTour/AddTour";
import Booking from "./components/Booking/Booking";
import AllBookings from "./components/AllBookings/AllBookings";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/my-bookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/all-bookings">
              <AllBookings></AllBookings>
            </PrivateRoute>
            <PrivateRoute path="/add-tour">
              <AddTour></AddTour>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
