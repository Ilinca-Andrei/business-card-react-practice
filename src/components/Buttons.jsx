import React from "react";

export default function Buttons() {
    return (
        <div className="btns">
            
        <button className="EmailBtn">
            <img src="./Email_Icon.svg"></img>
            <a href="mailto:ilincaandreid@yahoo.ro">Email</a>
        </button>
        <button className="LinkedinBtn">
            <img src="./Linkedin.svg"></img>
            <a href="https://www.linkedin.com/in/andrei-ilinca-73336921a/" target="_blank">LinkedIn</a>
        </button>
        </div>
    )
}