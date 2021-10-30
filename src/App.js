import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import About from './components/About/About';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Booking from './components/Booking/Booking';
import AddService from './components/Booking/AddService/AddService';
import Contact from './components/Contact/Contact';
import Travels from './components/Travels/Travels';
import ManageServices from './components/Booking/ManageServices/ManageServices';
import MyOrders from './components/Booking/MyOrders/MyOrders';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/tours'>
              <Travels></Travels>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/booking/:travelId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/myOrders'>
              <MyOrders></MyOrders>
            </Route>
            <Route path='/addService'>
              <AddService></AddService>
            </Route>
            <Route path='/manageServices'>
              <ManageServices></ManageServices>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
