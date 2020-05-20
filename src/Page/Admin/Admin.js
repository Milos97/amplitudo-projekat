import React, {useContext, useCallback} from 'react';
import { withRouter, Redirect } from "react-router";
import app from '../../base';
import { AuthContext } from "../../Auth.js";

const Admin = () => {
    
    const { currentUser } = useContext(AuthContext);
    return ( 
        <div>
        {
            currentUser
            ? 
            <div className="admin-div">
                <div className="admin-container">
                    <button className="button blue-btn margin-20" onClick={console.log("clicked")}>Add new Course</button>
                    <button className="button blue-btn margin-20" style={{backgroundColor: "red"}} onClick={console.log("clicked")}>Delete Course</button>
                </div>
            </div>
            : ""
        }
        </div>
    );
}
 
export default Admin;