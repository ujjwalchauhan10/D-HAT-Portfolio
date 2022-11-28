import React, { useState, useRef } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const initialValues = {
    fullName: "",
    email: "",
    socialLink: "",
    query: "",
};

const ContactUs = (props) => {
    const [values, setValues] = useState(initialValues);
    const [emailError, setEmailError] = useState(false);
    const [phone, setPhone] = useState("");
    const errorRef = useRef(null);
    const formRef = useRef(null);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const handleEmailError = () => {
        if (!!emailError) {
            errorRef.current.hidden = true;
        } else {
            errorRef.current.hidden = false;
        }
    };
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setValues({
            ...values,
            [name]: value,
        });
        if (name === "email") {
            setEmailError(isValidEmail(value));
            handleEmailError();
        }
    };
    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     try {
    //         let result =await emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_PUBLIC_KEY);
    //         if(!!result){
    //             alert("You will be responded shortly.")
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     setValues(initialValues);
    //     setPhone('');
    // };

    return (
        <div>
            <div className="container-fluid">
                <div className="container col-11 form-container" ref={props.refe}>
                    <form className="row" ref={formRef}>
                        <div className="col-lg-6 bg-5 center">
                            <div className="we-provide poppins">
                                Have a project?<br></br> We would love<br></br> to help.
                            </div>
                        </div>
                        <div className="col-lg-6 bg-6 col-right">
                            <div className="row">
                                <label
                                    htmlFor="fullName"
                                    className="form-label"
                                >
                                    Full Name
                                </label>
                                <input
                                    name="fullName"
                                    value={values.fullName}
                                    type="text"
                                    className="formCont"
                                    id="inputName"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="row">
                                <label className="form-label">Phone Number</label>
                                <PhoneInput
                                    name="phone"
                                    value={phone}
                                    onChange={setPhone}
                                    id="phone"
                                    className="formCont"
                                />
                            </div>
                            <div className="row">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    value={values.email}
                                    type="email"
                                    className="formCont test"
                                    id="inputEmail"
                                    onChange={handleChange}
                                />
                                <div
                                    ref={errorRef}
                                    hidden={true}
                                    className="emailError t-orange"
                                >
                                    Enter a Valid Email!
                                </div>
                            </div>
                            <div className="row">
                                <label
                                    htmlFor="socialLink"
                                    className="form-label"
                                >
                                    Twitter/LinkedIn
                                </label>
                                <input
                                    name="socialLink"
                                    value={values.socialLink}
                                    type="text"
                                    className="formCont"
                                    id="inputTwitter"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="row">
                                <label htmlFor="query" className="form-label">
                                    Query
                                </label>
                                <input
                                    name="query"
                                    value={values.query}
                                    type="text"
                                    className="formCont"
                                    id="inputQuery"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="row center btn-margin">
                                <div
                                    type="submit"
                                    className="button-5"
                                    // onClick={handleSubmit}
                                >
                                    Send
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
