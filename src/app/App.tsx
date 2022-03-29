import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useParams
} from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'
import Topics from '../pages/Topics'
import PrivateRoute from "../components/customRoutes/PrivateRoute"
import { AuthButton } from "../components/AuthButton"
import { ProvideAuth } from "../common/customHooks/ProvideAuth";
import LoginPage from "../components/LoginPage";

// This site has a few pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

const BasicExample: React.FC = () => {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/about" component={About} />
            <PrivateRoute path="/protected" component={Protected} />
            {/* 这种写法也可以 */}
            <Route path="/topics">
              <Topics />
            </Route>
            {/*<Route path="/:id" children={<Child />} />*/}
            <Route path="/login" component={LoginPage} />

          </Switch>
        </div>
      </Router >
    </ProvideAuth>
  )
}

export default BasicExample

const Child = () => {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams<{ id: string }>()

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

// You can think of these components as "pages"
// in your app.

const Protected = () => {
  return (
    <div>
      <h2>Protected Page</h2>
    </div>
  );
}




