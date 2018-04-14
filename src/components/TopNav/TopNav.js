import React from "react";
import "./TopNav.css";

const TopNav = props => (
    <div>
        <ul className="nav topnav nav-justified">
            <li><a href="/"> Matching Game</a></li>
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: {props.curScore} | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default TopNav;

