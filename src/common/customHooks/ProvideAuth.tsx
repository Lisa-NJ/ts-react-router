
import { useState, createContext, useContext } from 'react'

const fakeAuth = {
    isAuthenticated: false,
    signin(cb: () => void) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb: () => void) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
interface AuthType {
    user: string | null,
    signin: (cb: () => void) => void,
    signout: (cb: () => void) => void
}

const authContext = createContext({} as AuthType)

export const ProvideAuth = ({ children }: any) => {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth} >
            {children}
        </authContext.Provider>
    );
}

function useProvideAuth() {
    const [user, setUser] = useState<string | null>(null);

    const signin = (cb: () => void) => {
        return fakeAuth.signin(() => {
            setUser("user");
            cb();
        });
    };

    const signout = (cb: () => void) => {
        return fakeAuth.signout(() => {
            setUser(null);
            cb();
        });
    };

    return {
        user,
        signin,
        signout
    };
}

export const useAuth = (): AuthType => {
    return useContext(authContext);
}
