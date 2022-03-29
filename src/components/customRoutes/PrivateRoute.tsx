import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../common/customHooks/ProvideAuth'

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ component: Component, ...rest }: any) => {
    let auth = useAuth();
    console.log("PrivateRoute -\n", auth);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ?
                    <Component />
                    : (
                        <Redirect
                            to={
                                {
                                    pathname: "/login",
                                    state: { from: location }
                                }
                            }

                        />
                    )
            }
        />
    );
}

export default PrivateRoute