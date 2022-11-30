import { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    const {logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    return (
        <div id="error-page" className="text-center text-lg md:text-2xl">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <p>please <button className="text-primary" onClick={handleLogOut}>Logout</button></p>
        </div>
    );
}