import React from "react";
// import home from "./Home.jsx"
// import about from "./About.jsx"
// import contact from "./Contact12.jsx"
// import services from "./Services.jsx"
import {Link} from 'react-router-dom';

const header = () => {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container">
                {/* <a href="index.html" class="navbar-brand">Web</a> */}
                <button class="navbar-toggler" data-toggle="collapse" data-target="#navNavbar"><span
                    class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link to="/" class="nav-link">Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default header;
