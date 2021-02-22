import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./screens/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/home/:classId" component={Home}/>
            <Redirect from='/' to='/home/5'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
