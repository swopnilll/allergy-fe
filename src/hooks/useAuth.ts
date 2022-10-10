import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    const value = useContext(AuthContext) as AuthProviderContextProps;

    return value;
}

export default useAuth;