import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"

import useAuth from "../hooks/useAuth";

import { login } from "../api/auth";

import { setAccessToken, setRefreshToken } from "../localStorageService/auth";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [isFormValid, setFormValidityState] = useState(false);

    useEffect(() => {
        setFormValidityState(email.length > 0 && password.length > 0);
    }, [email, password])

    const { setAuthenticatedUser } = useAuth();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/allergy"

    const navigate = useNavigate();

    const initiateLoginAndFetchUserDetails = async () => {
        let apiResponse;

        try {
            apiResponse = await login({
                email,
                password
            })
        } catch (error: any) {
            setErrorMessage(error.data);
        }

        return apiResponse.data;
    }

    const saveUserCredentials = (accessToken: string, refreshToken: string) => {
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);

    }

    const handleLoginFormSubmit = async (event: any) => {
        event.preventDefault();

        const userCredentials = await initiateLoginAndFetchUserDetails();
        console.log("userCred", userCredentials);

        setAuthenticatedUser(
            {
                id: userCredentials?.id,
                accessToken: userCredentials?.accessToken,
                name: userCredentials?.name,
                email: userCredentials?.email
            }
        );

        saveUserCredentials(userCredentials.accessToken, userCredentials.refreshToken);

        console.log(from);
        navigate(from, { replace: true });
    }

    return (
        <div className="login-wrapper">
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleLoginFormSubmit}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button disabled={!isFormValid} type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            <Link to="/auth/register" >Create new account </Link>
                        </p>
                    </div>
                </form>

                <p className="text-center mt-2">
                    {errorMessage}
                </p>

            </div>
        </div>
    )
}

export default Login
