import { Route, Routes } from "react-router-dom";

import AuthenticationPage from "../pages/AuthenticationPage"

import Login from "../components/Login";
import SignUp from "../components/SignUp";

const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/">
                    <Route path="/" element={<AuthenticationPage />}>
                        <Route index element={<Login />} />
                        <Route path="/auth/register" element={<SignUp />} />
                    </Route>
                </ Route>
            </Routes>
        </>
    )
}

export default MainRouter