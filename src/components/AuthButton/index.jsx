import { useHistory } from "react-router";
import { useAuth } from "../../common/customHooks/ProvideAuth";

export const AuthButton = () => {
    let history = useHistory();
    let auth = useAuth();

    console.log("history length", history.length);
    console.log("auth.user: ", auth.user);

    return auth.user ? (
        <p>
            Welcome!{" "}
            <button
                onClick={() => {
                    auth.signout(() => history.push("/"));
                }}
            >
                Sign out
            </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    );

}