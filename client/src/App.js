import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import SearchPage from './pages/Search-Page/';
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Books Search</h1>
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
