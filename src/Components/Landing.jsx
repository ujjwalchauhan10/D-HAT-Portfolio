import React from "react";

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
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 my-4">
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
                <div className="row center my-auto">
                    <div className="col-10">
                        <div className="container-fluid">
                            <div className="row my-auto ">
                                <div className="col-md-6">
                                    <h1 className="text-white">
                                        EXPLORE<br></br> THE<br></br> NEW
                                        <br></br>
                                        WORLD<br></br> OF WEB 3.0
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
