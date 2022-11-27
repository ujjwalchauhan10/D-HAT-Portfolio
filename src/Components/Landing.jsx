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
            <div className="container-fluid bg-2">
                <div className="row">
                    <div className="provide-line1 mt-5">
                        “The most suitable
                        <span className="text-pro px-1">
                            Blockchain Consultancy
                        </span>
                        <br></br>and
                        <span className="text-pro px-1">WEB 3 Solutions</span>
                        for your needs.”
                    </div>
                </div>
                <div className="row">
                    <div className="we-provide">We Provide</div>
                    <div className="provide-line1">
                        The
                        <span className="text-pro px-1">safest</span>
                        and
                        <span className="text-pro px-1">easiest-to-use</span>
                        <br></br>
                        place for
                    </div>
                </div>
                <div className="row">
                    <div className="center">
                        <div className="services">
                            <div className="provide-card center">
                                <div className="provide-text">
                                    <span className="col-gray">Product </span>
                                    Development
                                </div>
                            </div>
                            <div className="provide-card center">
                                <div className="provide-text">Consultancy</div>
                            </div>
                            <div className="provide-card center">
                                <div className="provide-text">
                                    <span className="col-gray">Network </span>
                                    Setup
                                </div>
                            </div>
                            <div className="provide-card center">
                                <div className="provide-text">
                                    <span className="col-gray">DEX </span>
                                    Creation
                                </div>
                            </div>
                            <div className="provide-card center">
                                <div className="provide-text">
                                    <span className="col-gray">Algo </span>
                                    Trading
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
