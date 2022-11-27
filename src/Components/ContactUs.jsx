import React,{ useState, useRef} from "react";
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
    const [phone, setPhone] = useState('');
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
            <div className="container col-12">
                <div className="container col-10" id="formContainer">
                    <form className="row g-3" ref={formRef}>
                        <div className="col-md-6">
                            <label htmlFor="fullName" className="form-label">
                                Full Name
                            </label>
                            <input
                                name="fullName"
                                value={values.fullName}
                                type="text"
                                className="formCont"
                                id="inputName"
                                placeholder="Sherlock Holmes"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <div>Phone Number</div>
                            <PhoneInput
                                name="phone"
                                placeholder="Enter phone number"
                                value={phone}
                                onChange={setPhone}
                                id="phone"
                                className="formCont"
                            />
                        </div>
                        <div className="col-md-6">
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
                            <div ref={errorRef} hidden={true} className="emailError">
                                Enter a Valid Email!
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="socialLink" className="form-label">
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
                        <div className="col-12">
                            <label htmlFor="query" className="form-label">
                                Query
                            </label>
                            <input
                                name="query"
                                value={values.query}
                                type="text"
                                className="formCont"
                                id="inputQuery"
                                placeholder="So, amm"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-12">
                            <button
                                type="submit"
                                className="btn btn-secondary"
                                // onClick={handleSubmit}
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
