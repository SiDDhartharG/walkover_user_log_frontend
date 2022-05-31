import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import { GetUserNameFromToken } from '../Utils/token'
const Header = (props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/home");
    }
    return <div>
        <div className="nav" style={{ height: "50px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>
            <div className="nav-left" onClick={handleClick}>
                <span style={{ fontSize: "30px", cursor: "pointer" }} >UserLogs</span>
            </div>
            <div className="nav-right" style={{ alignItems: "center", justifyContent: "flex-end" }}>
                <span style={{ fontSize: "15px" }}><AccountCircleIcon />{GetUserNameFromToken()}&nbsp;&nbsp;&nbsp;</span>
                <span style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "5px" }}>Logout</span>&nbsp;&nbsp;
            </div>
        </div>
        {props.children}
    </div>
}

export default Header