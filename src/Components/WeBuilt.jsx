import React from "react";
import built from "../Assets/built.svg"
const WeBuilt = (props) => {
    return (
        <div>
            <div className="container-fluid bg-4">
                <div className="row" ref={props.refe}>
                    <div className="what">
                        What
                        <span className="we-have px-1">we have built</span>
                    </div>
                </div>
                <div className="row center">
                    <div className="col-10 center networks-img">
                        <div>
                            <img src={built} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeBuilt;
