import React from "react";
import "../pagecss/Signup.css";
import menlogo from "../Images/menlogo.png";
import group from "../Images/group.png";
import join from "../Images/join.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Pdf from "../data/CUSTOMER_SUPPORT.pdf";
import axios from "../api/Baseurl.js";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phoneNumber: "",
      age: "",
      password: "",
      confirmpassword: "",
    },
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        const pass = values.password;
        const conPass = values.confirmpassword;

        if (pass === conPass) {
          formData.append("username", values.username);
          formData.append("email", values.email);
          formData.append("phoneNumber", values.phoneNumber);
          formData.append("age", values.age);
          formData.append("password", values.password);

          const response = await axios.post("/signup", formData);

          if (response.data.UserData) {
            console.log(response.data.UserData,"got responseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
            const link = document.createElement("a");
            link.href = Pdf; // Set PDF URL
            link.setAttribute("download", "do you know.pdf");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            toast.success("🤩🎉 Congratulations! You got a free comic! 🎉", {
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

            navigate("/Signin");
            
            toast.success("😍 Registration successfull !", {
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
          }
        } else {
          toast.error("Passwords do not match!", {
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
        }
      } catch (err) {
        toast.error("An error occurred during signup!", {
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
      }
    },
  });

  return (
    <div>
      <div className="signup-main-container">
        <form onSubmit={formik.handleSubmit} className="signup-form">
          <div className="left-side-box-signup">
            <img src={menlogo} className="sign-up-logo" alt="" />
            <span className="signin-p">Join Mentoons to get Started</span>
            <div className="signup-input-new">
              <input
                type="text"
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                required
                placeholder="eg:John Doe"
              />
              <br />
              <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                required
                placeholder="eg:johndoe@gmail.com"
              />
              <br />
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                maxLength={10}
                minLength={10}
                required
                placeholder="Enter your mobile number"
              />
              <br />
              <input
                id="age"
                name="age"
                type="number"
                value={formik.values.age}
                onChange={formik.handleChange}
                placeholder="Enter your age"
              />
              <br />
              <input
                id="password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                required
                placeholder="Password"
              />
              <br />
              <input
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                value={formik.values.confirmpassword}
                onChange={formik.handleChange}
                required
                placeholder="Confirm Password"
              />
              <br />
            </div>
            <div className="signup-btn-new">
            <button type="submit" className="signup-btn">
              Submit
            </button>
            <h4 className="forget">Forgot Password?</h4>
            <h2>
              Have an account? <Link to="/Signin">Sign in</Link>
            </h2>

            </div>
            <div className="facebook-login-new">
              <div className="gog-box-new">
                <FcGoogle className="gog-icon" />
                <h3>Sign in with Google</h3>
              </div>
            </div>
          </div>
        </form>
        <div className="right-side-box">
          <img src={join} className="logo-signup-new" alt="" />
          <img src={group} className="group-image-signup" alt="" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
