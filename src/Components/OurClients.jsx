import React from "react";
import Acc from "../Assets/Client/Acc.svg";
import Battle from "../Assets/Client/Battle.svg";
import Bobble from "../Assets/Client/Bobble.svg";
import Cryptic from "../Assets/Client/Cryptic.svg";

const OurClients = (props) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row" ref={props.refe}>
                    <div className="our-clients">Our Clients</div>
                </div>
                <div className="row center client-spacer">
                    <div className="col-11">
                        <div className="marquee">
                            <div className="marquee__group">
                                <a
                                    href="https://www.bobble.ai/en/home"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div>
                                        <img
                                            src={Bobble}
                                            alt=""
                                            className="iconImages"
                                        />
                                    </div>
                                </a>
                                <a
                                    href="https://www.battleastra.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div>
                                        <img
                                            src={Battle}
                                            alt=""
                                            className="iconImages"
                                        />
                                    </div>
                                </a>
                                <a
                                    href="http://www.accxchange.in/einvoicing/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div>
                                        <img
                                            src={Acc}
                                            alt=""
                                            className="iconImages"
                                        />
                                    </div>
                                </a>
                                <a
                                    href="https://crypticintel.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div>
                                        <img
                                            src={Cryptic}
                                            alt=""
                                            className="iconImages"
                                        />
                                    </div>
                                </a>
                            </div>

                            <div aria-hidden="true" className="marquee__group">
                                <a
                                    href="https://www.bobble.ai/en/home"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div>
                                        <img
                                            src={Bobble}
                                            alt=""
                                            className="iconImages"
                                        />
                                    </div>
                                </a>
                                <a
                                    href="https://www.battleastra.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div>
                                        <img
                                            src={Battle}
                                            alt=""
                                            className="iconImages"
                                        />
                                    </div>
                                </a>
                                <a
                                    href="http://www.accxchange.in/einvoicing/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div>
                                        <img
                                            src={Acc}
                                            alt=""
                                            className="iconImages"
                                        />
                                    </div>
                                </a>
                                <a
                                    href="https://crypticintel.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div>
                                        <img
                                            src={Cryptic}
                                            alt=""
                                            className="iconImages"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurClients;
