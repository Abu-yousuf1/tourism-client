import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import OrderList from './components/OrderList/OrderList';
import ManageOrder from './components/ManageOrders/ManageOrder';
import About from './components/About/About';


function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/order/:id">
              <PlaceOrder />
            </PrivateRoute>
            <PrivateRoute path="/orderList">
              <OrderList />
            </PrivateRoute>
            <PrivateRoute path="/manageOrder">
              <ManageOrder />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
