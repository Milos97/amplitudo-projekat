import React from 'react';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="admin-div">
                <div className="admin-container">
                    <button className="button blue-btn margin-20" onClick={console.log("clicked")}>Add new Course</button>
                    <button className="button blue-btn margin-20" style={{backgroundColor: "red"}} onClick={console.log("clicked")}>Delete Course</button>
                    <button className="button blue-btn margin-20" onClick={console.log("clicked")}>Add new Course</button>
                    <button className="button blue-btn margin-20" onClick={console.log("clicked")}>Add new Course</button>
                </div>
            </div>
        );
    }
}
 
export default Admin;