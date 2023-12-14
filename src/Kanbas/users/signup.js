import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountNavigation from "./AccountNavigation";
import * as client from "./client";
function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: ""
    });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/Kanbas/Account");
        } catch (err) {
            if (err.response && err.response.status === 400) {
                alert(err.response.data.message); // Display the error message from server
            } else {
                alert("An error occurred during signup. Please try again later.");
            }
        }
    };

    const [OpenNav, setOpen] = useState(true);

    const toggleNav = () => {
        setOpen(!OpenNav);
    };

    return (
        <>
            <div className="row">
                <div className="col-5">
                    {OpenNav && <AccountNavigation />}
                </div>
                <div className=" col w-50">
                    <h1>Signup</h1>
                    {error && <div>{error}</div>}
                    <input className="w-50"
                        value={credentials.username}
                        onChange={(e) => setCredentials({
                            ...credentials,
                            username: e.target.value
                        })} />
                    <input className="w-50" type="password"
                        value={credentials.password}
                        onChange={(e) => setCredentials({
                            ...credentials,
                            password: e.target.value
                        })} />
                    <button  className="btn btn-success w-100" onClick={signup}>
                        Signup
                    </button>
                </div>
            </div>
        </>
    );
}
export default Signup;