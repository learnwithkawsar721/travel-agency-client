import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddServices from "./Components/AddServices/AddServices";
import AllBooking from "./Components/AllBooking/AllBooking";
import Login from "./Components/Auth/Login/Login";
import EditServices from "./Components/EditServices/EditServices";
import Home from "./Components/Home/Home/Home";
import ServiseDetails from "./Components/Home/ServiseDetails/ServiseDetails";
import MyBooking from "./Components/MyBooking/MyBooking";
import Services from "./Components/Services/Services";
import Footer from "./Components/Sheared/Footer/Footer";
import Header from "./Components/Sheared/Header/Header";
import AuthProvider from "./ContextAPI/AuthProvider";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivetRoute exact path="/mybooking">
            <MyBooking />
          </PrivetRoute>
          <PrivetRoute exact path="/bookinglist">
            <AllBooking />
          </PrivetRoute>
          <PrivetRoute exact path="/add/services">
            <AddServices />
          </PrivetRoute>
          <PrivetRoute exact path="/services/edit/:id">
            <EditServices />
          </PrivetRoute>
          <PrivetRoute exact path="/booking/:id">
            <ServiseDetails />
          </PrivetRoute>
          <PrivetRoute exact path="/services">
            <Services />
          </PrivetRoute>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
