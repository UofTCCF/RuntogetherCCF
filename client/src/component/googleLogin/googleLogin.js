import { GoogleLogin } from "@react-oauth/google";
import { adminLogin, login } from "../../actions/loadInfo";
import { jwtDecode } from "jwt-decode";
import GenericButton from "../genericButton/genericButton";
import { Typography } from "@mui/material";


const GoogleLoginButton = ({ parent }) => {
    return (
        // <GoogleLogin
        //     onSuccess={(response) => { login(jwtDecode(response.credential), parent)}}
        //     onError={(error) => { console.log(error); }}
        //     auto_select
        //     useOneTap
        //   />

        // TODO: revert to the above code once in production
        <GenericButton color="action" onClick={() => { adminLogin(parent) }}>
            <Typography variant="h4">Admin Login</Typography>
        </GenericButton>
        
    )
}

export default GoogleLoginButton;