import React from "react";
import WeProvide from "./WeProvide";
const Landing = () => {
    return (
        <div>
            <div className="container-fluid bg-1 landing">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6">
                            <div className="ms-auto">
                                <button
                                    className="navbar-toggler mx-4"
                                    type="button ms"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarText"
                                    aria-controls="navbarText"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarText"
                            >
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 my-4 nav-font">
                                    <li className="nav-item text-white mx-4 ms-auto">
                                        Services
                                    </li>
                                    <li className="nav-item text-white mx-4 ms-auto">
                                        Projects
                                    </li>
                                    <li className="nav-item text-white mx-4 ms-auto">
                                        Clients
                                    </li>
                                    <li className="nav-item text-white mx-4 ms-auto">
                                        Team
                                    </li>
                                    <li className="nav-item text-white mx-4 ms-auto">
                                        Contact Us
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="row center">
                    <div className="col-10">
                        <div className="container-fluid">
                            <div className="row ">
                                <div className="col-md-6">
                                    <div className="text-white landing-head">
                                        <h1 className="landing-t-size">EXPLORE</h1>
                                        <h1 className="landing-t-size">The</h1>
                                        <h1 className="landing-t-size">New</h1>
                                        <h1 className="landing-t-size">World</h1>
                                        <h1 className="landing-t-size">
                                            OF
                                            <span className="t-red">
                                                 WEB 3.0
                                            </span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h1 className="mission-head">
                                        Our Mission
                                    </h1>
                                    <div className="text-white mission-content">
                                        We aim forward to explore the blockchain
                                        space and assist each other, join us and
                                        be a part of the spectacular journey.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WeProvide/>
        </div>
    );
};

export default Landing;
