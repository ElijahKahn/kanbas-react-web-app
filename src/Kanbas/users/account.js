import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AccountNavigation from "./AccountNavigation";
function Account() {
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    const save = async () => {
        await client.updateUser(account);
    };

    const [OpenNav, setOpen] = useState(true);

    const toggleNav = () => {
        setOpen(!OpenNav);
    };

    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/Signin");
    };


    useEffect(() => {
        fetchAccount();
    }, []);
    return (
        <>
            <div className="row">
                <div className="col-4">
                    {OpenNav && <AccountNavigation />}
                </div>
                <div className=" col w-50">

                    <h1>Account</h1>

                    {account && (
                        <div>
                            <input value={account.password}
                                onChange={(e) => setAccount({
                                    ...account,
                                    password: e.target.value
                                })} />
                            <input value={account.firstName}
                                onChange={(e) => setAccount({
                                    ...account,
                                    firstName: e.target.value
                                })} />
                            <input value={account.lastName}
                                onChange={(e) => setAccount({
                                    ...account,
                                    lastName: e.target.value
                                })} />
                            <input value={account.dob}
                                onChange={(e) => setAccount({
                                    ...account,
                                    dob: e.target.value
                                })} />
                            <input value={account.email}
                                onChange={(e) => setAccount({
                                    ...account,
                                    email: e.target.value
                                })} />
                            <select onChange={(e) => setAccount({
                                ...account,
                                role: e.target.value
                            })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>

                            <button className="btn btn-success w-100"onClick={save}>
                                Save
                            </button>
                            
                            <Link to="/Kanbas/Admin/Users" className="btn btn-warning w-100">
                                Users
                            </Link>
                            <button className="btn btn-danger w-100" onClick={signout}>
                                Signout
                            </button>

                        </div>


                    )}

                </div>
            </div>
        </>
    );
}
export default Account;