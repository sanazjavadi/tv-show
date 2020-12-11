import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//components
import Navbar from './components/Navbar';

//Pages
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage"
import SinglePage from "./pages/Singlepage"



function App() {
  return (
    <Router>
<Navbar/>
<Switch>
  <Route exact path="/" component={HomePage} / >
    <Route path="/about" component={AboutPage} />
    <Route path="/singleshow/:id" component={SinglePage} />
</Switch>


    </Router>
  );
}

export default App;
