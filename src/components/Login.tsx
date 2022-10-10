import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth";
import { login } from "../services/auth";

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


    const handleLoginFormSubmit = async (event: any) => {
        event.preventDefault();

        let apiResponse: any = {};

        try {
            apiResponse = await login({
                email,
                password
            })
        } catch (error: any) {
            if (!error?.response) {
                setErrorMessage('No Server Response');
            } else if (error.response?.status === 409) {
                setErrorMessage('Missing email or password');
            } else if (error.response?.status === 401) {
                setErrorMessage("Unauthorised")
            }
            else {
                setErrorMessage('Login Failed')
            }
        }

        const userCredentials = apiResponse?.data?.data;

        setAuthenticatedUser(
            {
                id: userCredentials?.id,
                accessToken: userCredentials?.accessToken,
                name: userCredentials?.name,
                email: userCredentials?.email
            }
        );

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

            </div>
        </div>
    )
}

export default Login
