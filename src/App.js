import Homepage from "./pages/home/Homepage";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Supplier from "./pages/Supplier/Supplier";
import Advisors from "./pages/Advisors/Advisors";
import Proposals from "./pages/Proposals/Proposals";
import InvestorMode from "./pages/investorMode/InvestorMode";
import Groups from "./pages/groups/Groups";
function App() {
  return (
      <Router>
                <div >
                   <Switch>
                       <Route  exact path="/">
                           <Login/>
                       </Route>
                       <Route path="/profile">
                           <Profile/>
                       </Route>
                       <Route path="/home">
                           <Homepage/>
                       </Route>
                       <Route path="/Supplier">
                           <Supplier/>
                       </Route>

                       <Route path="/advisors">
                           <Advisors/>
                       </Route>
                       <Route path="/investor_mode">
                           <InvestorMode/>
                       </Route>
                       <Route path="/groups">
                           <Groups/>
                       </Route>
                       <Route path="/proposals">
                           <Proposals/>
                       </Route>
                       <Route path="/register">
                           <Register/>
                       </Route>
                   </Switch>
                </div>
      </Router>
  );
}

export default App;
