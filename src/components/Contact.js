import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../css/contact.css';
import { IoMailOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import axios from '../api/Baseurl';
import { Bounce, toast } from 'react-toastify';

const Contact = () => {
  return (
    <div className='contact-main'>
      <div className="contact-main-conatiner">
        <div className="information">
          <h1>INFORMATION</h1>
          <p>
            <a href='mailto:mentermahesh@gmail.com'><IoMailOutline />mentarmahesh@gmail.com</a>
          </p>
          <p>
            <FaPhoneAlt /> Call us 7892858593
          </p>
          <p>
            We are located at Domlur, Bangalore.
          </p>
          <div className="map">
            <iframe
              id='contact'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2836653176196!2d77.63712627484104!3d12.953691687360022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae155a60ecb7a1%3A0xac5bd734b84eb2b8!2sMentoons!5e0!3m2!1sen!2sin!4v1702880574719!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        <div className="contact-box">
          <h1>Write to Us</h1>
          <Formik
            initialValues={{ name: '', email: '', meetupGroup: '', message: '' }}
            validationSchema={Yup.object({
              name: Yup.string().required('Name is required'),
              email: Yup.string().email('Invalid email address').required('Email ID is required'),
              meetupGroup: Yup.string().required('Meetup Group is required'),
              message: Yup.string().required('Message is required'),
            })}
            onSubmit={(values, { setSubmitting,resetForm }) => {
              axios.post("/customer-message", values)
                .then(response => {
                  console.log('Success:', response.data);
                  setSubmitting(false);
                  resetForm();
                  toast.success("🤩M  essage sent successfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                  });
                })
                .catch(error => {
                  console.error('Error:', error);
                  setSubmitting(false);
                });
            }}
          >
            {({ isSubmitting }) => (
              <Form className="joinmsg-box">
                <Field name="name" type="text" placeholder="Name" className="contact-input" />
                <ErrorMessage name="name" component="div" className="error-message" />

                <Field name="email" type="text" placeholder="Email ID" className="contact-input" />
                <ErrorMessage name="email" component="div" className="error-message" />

                <Field name="meetupGroup" type="text" placeholder="Meetup Group" className="contact-input" />
                <ErrorMessage name="meetupGroup" component="div" className="error-message" />

                <Field name="message" as="textarea" placeholder="Enter Your Message" className="contact-message" />
                <ErrorMessage name="message" component="div" className="error-message" />

                <button type="submit" className="contact-btn" disabled={isSubmitting}>
                  Send message
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
