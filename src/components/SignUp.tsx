import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { register } from "../api/auth";

const SignUp = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isSuccessfullyRegistered, setRegisterationStatus] = useState(false);
    const [isFormValid, setFormValidityState] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setFormValidityState(email.length > 0 && password.length > 0 && password.length > 0);
    }, [fullName, email, password])

    const handleSignUpFormSubmit = async (event: any) => {
        event.preventDefault();

        try {
            await register({
                name: fullName,
                email,
                password
            })

            setRegisterationStatus(true);
        } catch (error: any) {
            console.log(error);
        }
    }

    return (
        <div className="Auth-form-container">
            {
                isSuccessfullyRegistered
                    ? (
                        <div className="successfully-registed-message-wrapper">
                            <h4>You have successfully registered !</h4>
                            <p>
                                <Link to="/">Login </Link>
                            </p>
                        </div>)
                    : (
                        <form className="Auth-form" onSubmit={handleSignUpFormSubmit}>
                            <div className="Auth-form-content">
                                <h3 className="Auth-form-title">Sign In</h3>
                                <div className="text-center">
                                    Already registered?{" "}
                                    <span className="link-primary" >
                                        <Link to="/">Sign In</Link>
                                    </span>
                                </div>
                                <div className="form-group mt-3">
                                    <label>Full Name</label>
                                    <input
                                        type="full-name"
                                        className="form-control mt-1"
                                        value={fullName}
                                        onChange={event => setFullName(event.target.value)}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control mt-1"
                                        value={email}
                                        onChange={event => setEmail(event.target.value)}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control mt-1"
                                        value={password}
                                        onChange={event => setPassword(event.target.value)}
                                    />
                                </div>
                                <div className="d-grid gap-2 mt-3 mb-4">
                                    <button disabled={!isFormValid} type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </div>

                            </div>
                        </form>
                    )
            }
        </div>
    )
}

export default SignUp