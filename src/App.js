
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './Cart';
import Login from './Login';
import { auth } from "./firebase";
import { useEffect } from 'react';
import {useStateValue} from './ContextProvider'
import Payment from './Payment';
import Footer from './Footer';
import { Provider } from 'react-redux';
import store from './redux/store';
import Form from './Form';

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <Header />
      <div className="app">
      <Provider store={store}>
        <Switch>
          <Route path="/login">
            <Login />
            <Footer />
          </Route>
          <Route path="/payment">
            <Payment />
           
          </Route>
          <Route path="/cart">
            <Cart />
            
          </Route>
          <Route path="/form">
            <Form />
            
          </Route>
          <Route path="/">
            <Home />
            <Footer />
          </Route>
        </Switch>
       </Provider> 
      </div>
      
    </Router>
    

  );
}

export default App;
