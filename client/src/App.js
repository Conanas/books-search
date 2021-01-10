import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/';
import Header from './components/Header/';
import SearchPage from './pages/Search-Page/';
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/" component={SearchPage} />
            </Switch>
          </Router>
        </div>
      </main>
    </>
  );
}


export default App;
