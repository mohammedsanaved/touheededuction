import React, { useEffect } from "react";
import { ContactInfoSectionStyles } from "./ContactInfoSectionStyles.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { schoolList } from "../../actions/schoolActions.js";
import { createContact } from "../../actions/contactActions.js";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const ContactInfoSection = () => {
  const locationIconUrl = "/assets/images/location.png";
  const emailIconUrl = "/assets/images/email.png";
  const phoneIconUrl = "/assets/images/phone-call.png";

  const [formData, setFormData] = useState({
    name: "",
    user_email: "",
    class_grade: "",
    message: "",
    mobileNumber: "",
    school_id: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    user_email: "",
    class_grade: "",
    message: "",
    mobileNumber: "",
    school_id: "",
  });
  console.log(formData, "FormData");
  const dispatch = useDispatch();
  const schoolEmails = useSelector((state) => state.schoolList);
  const { schools } = schoolEmails;

  const [disable, setDisable] = useState("");

  useEffect(() => {
    dispatch(schoolList());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Clear the error message for this field
    });
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const formErrors = {};
    let isValid = true;

    // Validate name
    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
      isValid = false;
    }

    // Validate user_email
    if (!formData.user_email.trim()) {
      formErrors.user_email = "Email is required";
      isValid = false;
    }

    if (
      !formData.mobileNumber.trim() ||
      formData.mobileNumber.trim().length !== 10
    ) {
      formErrors.mobileNumber =
        "Mobile Number is required and must be 10 digits";
      isValid = false;
    }

    // Validate class_grade
    if (!formData.class_grade.trim()) {
      formErrors.class_grade = "Class/Grade is required";
      isValid = false;
    }

    // Validate school_id
    if (!formData.school_id) {
      formErrors.school_id = "School is required";
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
      isValid = false;
    }

    if (!recaptchaValue) {
          setRecaptchaError('Please complete the reCAPTCHA.');
          
        }
        else{
          setRecaptchaError('');
        }

    // Update error state
    setErrors(formErrors);

    // If form is valid, submit
    if (isValid) {
      setTimeout(() => {
        toast.success('Thank You For Submitting', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          
          });
      }, 1000);
      dispatch(
        createContact(
          formData.name,
          formData.school_id,
          formData.mobileNumber,
          formData.message,
          formData.user_email,
          formData.class_grade
        )
      );
    }
    

  };
 
 

  const onChangeRecaptcha = (value) => {
    console.log("reCAPTCHA value:", value);
    setRecaptchaValue(value);
  };

  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [recaptchaError, setRecaptchaError] = useState('');



  useEffect(()=>{
    if (!recaptchaValue) {
      setRecaptchaError('Please complete the reCAPTCHA.');
      return;
    }
    else{
      setRecaptchaError('');
      return;
    }
  } , [recaptchaValue])

  return (
    <ContactInfoSectionStyles>
      <div className="contact-info-container">
        <div className="contact-info-container-div d-flex mx-auto">
          <div className="contact-info-div">
            <h2>Contact Info</h2>
            <hr className="green-hr" />

            <div className="contact-info-icon-text-div">
              <div className="icon-text-div d-flex">
              <FaLocationDot size={50} color="#0CAD6C"/>
                
                <div className="contact-info-text">
                  <h3>Our Location</h3>
                  <p>Gangolli, Udupi Dist, Karnataka, India 576216.</p>
                </div>
              </div>
              <div className="icon-text-div d-flex">
              <MdEmail size={50} color="#0CAD6C"/>
                
                <div className="contact-info-text">
                  <h3>Email Address</h3>
                  <p>
                    admin@touheed.education
                    <br />
                    info@touheed.education
                  </p>
                </div>
              </div>
              <div className="icon-text-div d-flex">
              <FaPhone size={50} color="#0CAD6C"/>
                
                <div className="contact-info-text">
                  <h3>Phone Number</h3>
                  <p>
                    {" "}
                    +91 (111) 111 1111 <br></br>
                    +91 (222) 222 2222
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="get-in-touch-div">
            <h2>Get In Touch</h2>
            <hr className="green-hr" />
            <form onSubmit={handleSubmit}>
              <div>
                <div className="d-flex flex-column w-100 form-container-div">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Parent's name :"
                  className="get-in-touch-form-input"
                />
                <span className="errorMsg">
                  {errors.name && <span>{errors.name}</span>}
                </span>
                </div>
              </div>
              <div className="form-email-subject d-flex">
              <div className="d-flex flex-column w-100 form-container-div">
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="get-in-touch-form-input"
                />
                <span className="errorMsg">
                  {errors.user_email && <span>{errors.user_email}</span>}
                </span>
                </div>
                <div className="d-flex flex-column w-100 form-container-div">
                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  placeholder="Mobile Number :"
                  className="get-in-touch-form-input"
                />
                <span className="errorMsg">
                  {errors.mobileNumber && <span>{errors.mobileNumber}</span>}
                </span>
                </div>
              </div>

              <div className="form-email-subject d-flex">
              <div className="d-flex flex-column w-100 form-container-div">
                <input
                  type="text"
                  name="class_grade"
                  value={formData.classGrade}
                  onChange={handleInputChange}
                  placeholder="Class/Grade :"
                  className="get-in-touch-form-input"
                />
                <span className="errorMsg">
                  {errors.class_grade && <span>{errors.class_grade}</span>}
                </span>
</div>
<div className="d-flex flex-column w-100 form-container-div">
                <select
                  name="school_id"
                  value={formData.school_id}
                  onChange={handleInputChange}
                  className="get-in-touch-form-input"
                >
                  <option value="">Select School</option>
                  {schools?.rows?.map((school) => (
                    <option key={school.id} value={school.id}>
                      {school.name}
                    </option>
                  ))}
                </select>
                <span className="errorMsg">
                  {errors.school_id && <span>{errors.school_id}</span>}
                </span>
                </div>
              </div>

              <div>
              <div className="d-flex flex-column w-100 form-container-div">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  className="get-in-touch-form-input message-area"
                />
                <span className="errorMsg">
                  {errors.message && <span>{errors.message}</span>}
                </span>
                </div>
              </div>
              <ReCAPTCHA  
                            sitekey="6Lfudt4pAAAAAGlY6hPEjmWLzdtx79c_UJIvCbsI"
                            onChange={onChangeRecaptcha}
                          />
                          <ToastContainer />
                          {recaptchaError && <span style={{ color: 'red' }}>{recaptchaError}</span>}
              <button type="submit" className="form-btn">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </ContactInfoSectionStyles>
  );
};

export default ContactInfoSection;
