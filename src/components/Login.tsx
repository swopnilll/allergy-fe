import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isFormValid, setFormValidityState] = useState(false);

    useEffect(() => {
        setFormValidityState(email.length > 0 && password.length > 0);
    }, [email, password])

    const handleLoginFormSubmit = (event: any) => {
        event.preventDefault();
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