import Homepage from "./pages/home/Homepage";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Supplier from "./pages/Supplier/Supplier";

function App() {
  return (
      <Router>
                <div >
                   <Switch>
                       <Route  exact path="/">
                           <Homepage/>
                       </Route>
                       <Route path="/profile">
                           <Profile/>
                       </Route>
                       <Route path="/Supplier">
                           <Supplier/>
                       </Route>
                   </Switch>
                </div>
      </Router>
  );
}

export default App;
