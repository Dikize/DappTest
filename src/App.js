import "./App.css";
import Navbar from "./components/sidebar/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from "./Pages/HomePage";
import CryptoNewPage from "./Pages/CryptoNewPage";
import CoinPage from "./Pages/CoinPage";
// import Homepage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      {/* <Switch> */}
        <div className="App">
          <Navbar />
              <Route exact path='/' component={Homepage} />
              <Route exact path='/NewsCryptoPage' component={CryptoNewPage} />
              <Route exact path='/coins/:id' component={CoinPage} />
        </div>
      {/* </Switch> */}
    </Router>
  );
}

export default App;
