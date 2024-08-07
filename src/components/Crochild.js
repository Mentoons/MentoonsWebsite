import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../css/Crochild.css';
import axios from '../api/Baseurl'
import { Bounce, toast } from 'react-toastify';

const Crochild = () => {
  return (
    <div>
      <div className="revive-container">
        <div className="revive-form-main">
          <div className="revive-form">
            <h1>"Let’s Revive"</h1>
            <h2>OUR MEET UP GROUP</h2>
            <p>Revival of Ancient Values, Respect, Care and Relationships.</p>
            <ul>
              <li>In this modern age, it's easy to lose sight of the values that once guided our interactions and relationships.</li>
              <li>But embracing core values is crucial for fostering a harmonious society and establishing deeper connections with others.</li>
              <li>Engage in real life, Encourage creativity and instigate change!</li>
            </ul>
            <h2>JOIN US</h2>
            <Formik
              initialValues={{ name: '', email: '', meetupGroup: '', message: '' }}
              validationSchema={Yup.object({
                name: Yup.string().required('Name is required'),
                email: Yup.string().email('Invalid email address').required('Email ID is required'),
                meetupGroup: Yup.string().required('Meetup Group is required'),
                message: Yup.string().required('Message is required'),
              })}
              onSubmit={(values, { setSubmitting,resetForm }) => {
                axios.post("/workshop-enquiry", values)
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
                  <Field name="name" type="text" placeholder="Name" className="revive-input" />
                  <ErrorMessage name="name" component="div" className="error-message" />

                  <Field name="email" type="text" placeholder="Email ID" className="revive-input" />
                  <ErrorMessage name="email" component="div" className="error-message" />

                  <Field name="meetupGroup" type="text" placeholder="Meetup Group" className="revive-input" />
                  <ErrorMessage name="meetupGroup" component="div" className="error-message" />

                  <Field name="message" as="textarea" placeholder="Enter Your Message" className="revive-message" />
                  <ErrorMessage name="message" component="div" className="error-message" />

                  <button type="submit" className="join-btn" disabled={isSubmitting}>
                    Together, let's revive and reconnect!
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crochild;
