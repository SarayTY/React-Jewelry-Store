import React from "react";
import usersService from "../frontServices/usersService";

class LogOut extends React.Component {
   componentDidMount() {
       usersService.logout();
       window.location = "/";
    } 

    render() {
        return null;
    }
}

export default LogOut;