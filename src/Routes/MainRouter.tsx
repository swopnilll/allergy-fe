import { Route, Routes } from "react-router-dom";

import Login from "../components/Login";
import SignUp from "../components/SignUp";
import RequiredAuth from "../components/RequireAuth";

import AuthenticationPage from "../pages/AuthenticationPage"
import { AllergiesPageWrapper } from "../pages/AllergiesPageWrapper";


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

                <Route path="/allergy" element={<RequiredAuth />} >
                    <Route index element={<AllergiesPageWrapper />} />
                </Route>

            </Routes>
        </>
    )
}

export default MainRouter