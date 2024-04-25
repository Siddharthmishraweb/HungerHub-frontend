// import {
//   Typography,
//   TextField,
//   Button,
//   InputLabel,
//   MenuItem,
//   Select,
// } from "@mui/material";
// import { Formik, Form, Field } from "formik";
// import { useNavigate } from "react-router-dom";
// import "./LoginForm.css";
// import { useDispatch } from "react-redux";
// import { registerUser } from "../State/Authentication/Action";
// import { useEffect, useRef, useState } from "react";

// const initialValues = {
//   fullName: "",
//   email: "",
//   password: "",
//   role: "",
// };

// export const RegisterForm = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const {show, setShow} = useState(true);
//   const handleSubmit = (values) => {
//     console.log("values: ", values);
//     dispatch(registerUser({ userData: values, navigate }));
//   };


//   return (
//     <div className="form">
//       <h2>Register</h2>
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         <Form className="input">
//           <div className="inputBox">
//             <label htmlFor="fullName">Full Name</label>
//             <Field
//               type="fullName"
//               name="fullName"
//               placeholder="Siddharth Mishra"
//             />
//           </div>

//           <div className="inputBox">
//             <label htmlFor="email">Username</label>
//             <Field type="email" name="email" placeholder="example@test.com" />
//           </div>

//           <div className="inputBox">
//             <label htmlFor="password">Password</label>
//             <Field type="password" name="password" placeholder="......." />
//           </div>
//           <div className="inputBox">
//             <label htmlFor="role">Role</label>
//             <Field
//               name="role"
//               as={Select}
//               fullWidth
//               variant="outlined"
//               placeholder="Select Role"
//             >
//               <MenuItem value={"ROLE_CUSTOMER"}>CUSTOMER</MenuItem>
//               <MenuItem value={"ROLE_RESTAURANT_OWNER"}>
//                 RESTAURANT OWNER
//               </MenuItem>
//             </Field>
//           </div>
//           <div className="inputBox">
//             <input type="submit" name="" value="Regiseter" />
//           </div>
//         </Form>
//       </Formik>
//       <p className="forget">
//         Already Have Account ?
//         <Button size="small" onClick={() => navigate("/account/login")}>
//           login
//         </Button>
//       </p>
//     </div>
//   );
// };





import React, { useRef, useEffect, useState } from "react";
import {
  Typography,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../State/Authentication/Action";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "",
};

export const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(true); // Initially set to true to keep the popup open

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        // Clicked outside the form, close popup
        setIsPopupOpen(false);
        navigate('/')
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSubmit = (values) => {
    console.log("values: ", values);
    dispatch(registerUser({ userData: values, navigate }));
  };

  return (
    <>
      {isPopupOpen && (
        <div className="form" ref={formRef}>
          <h2>Register</h2>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className="input">
              <div className="inputBox">
                <label htmlFor="fullName">Full Name</label>
                <Field
                  type="fullName"
                  name="fullName"
                  placeholder="Siddharth Mishra"
                />
              </div>

              <div className="inputBox">
                <label htmlFor="email">Username</label>
                <Field type="email" name="email" placeholder="example@test.com" />
              </div>

              <div className="inputBox">
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" placeholder="......." />
              </div>
              <div className="inputBox">
                <label htmlFor="role">Role</label>
                <Field
                  name="role"
                  as={Select}
                  fullWidth
                  variant="outlined"
                  placeholder="Select Role"
                >
                  <MenuItem value={"ROLE_CUSTOMER"}>CUSTOMER</MenuItem>
                  <MenuItem value={"ROLE_RESTAURANT_OWNER"}>
                    RESTAURANT OWNER
                  </MenuItem>
                </Field>
              </div>
              <div className="inputBox">
                <input type="submit" name="" value="Register" />
              </div>
            </Form>
          </Formik>
          <p className="forget">
            Already Have Account ?
            <Button size="small" onClick={() => navigate("/account/login")}>
              login
            </Button>
          </p>
        </div>
      )}
    </>
  );
};
