import { GoogleLogin } from "@react-oauth/google";
import { login } from "../../actions/loadInfo";
import { jwtDecode } from "jwt-decode";
import GenericButton from "../genericButton/genericButton";


const GoogleLoginButton = ({ parent }) => {
    return (
        <GoogleLogin
            onSuccess={(response) => { login(jwtDecode(response.credential), parent)}}
            onError={(error) => { console.log(error); }}
            auto_select
            useOneTap
        />
    )
}

export default GoogleLoginButton;