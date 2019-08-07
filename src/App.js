import React from "react";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                {/* for passing params to route, use :paramName and in component you can call props.match.prams.paramName */}
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
