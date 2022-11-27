import React from "react";
import networks from "../Assets/networks.svg";
const OnNetworks = () => {
    return (
        <div>
            <div className="container-fluid bg-3">
                <div className="row">
                    <div className="on-networks">On Networks</div>
                    <div className="networks-line2">such as</div>
                </div>
                <div className="row center">
                    <div className="col-10 center networks-img">
                        <div>
                            <img src={networks} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnNetworks;
