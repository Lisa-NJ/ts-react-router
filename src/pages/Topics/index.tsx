import { useParams, useRouteMatch, Link, Switch, Route } from 'react-router-dom'

const Topic = () => {
  let { topicId } = useParams<{ topicId: string }>();
  return <h3>Requested topic ID: {topicId}</h3>;
}

const Topics = () => {
  // The `path` lets us build <Route> paths that are  
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let match = useRouteMatch()
  console.log(match)
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}
export default Topics