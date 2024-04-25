import { Typography, TextField, Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useNavigate } from 'react-router-dom';
import "./LoginForm.css"
import { useDispatch } from "react-redux";
import { loginUser } from "../State/Authentication/Action";

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log("values: ", values);
    dispatch(loginUser({userData: values, navigate}))
  }
  return (
    // <div style={{backgroundColor: "#B9490"}}>
    //   <Typography variant="h5" className="text-center">
    //     Login
    //   </Typography>
    //   <Formik onSubmit={handleSubmit} initialValues={initialValues}>
    //     <Form>
    //       <Field
    //         as={TextField}
    //         name="email"
    //         label="email"
    //         fullWidth
    //         variant="outlined"
    //         margin="normal"
    //       />
    //       <Field
    //         as={TextField}
    //         name="password"
    //         label="password"
    //         fullWidth
    //         variant="outlined"
    //         margin="normal"
    //       />
    //       <Button sx={{ mt:2, padding: "1rem" }} fullWidth type="submit" variant="contained">Login</Button>
    //     </Form>
    //   </Formik>
    //   <Typography variant="body2" align="center" sx={{mt:3}}>
    //     Don't have an account?
    //     <Button size="small" variant="contained" onClick={()=>navigate("/account/register")}>
    //         register
    //     </Button>
    //   </Typography>
    // </div>


    // <div className="form">
    //   <Typography variant="h2" className="text-center">
    //     Login
    //   </Typography>
    //   <Formik onSubmit={handleSubmit} initialValues={initialValues}>
    //     <Form>
    //       <Field
    //         as={TextField}
    //         name="email"
    //         label="email"
    //         fullWidth
    //         variant="outlined"
    //         margin="normal"
    //       />
    //       <Field
    //         as={TextField}
    //         name="password"
    //         label="password"
    //         fullWidth
    //         variant="outlined"
    //         margin="normal"
    //       />
    //       <Button sx={{ mt:2, padding: "1rem" }} fullWidth type="submit" variant="contained">Login</Button>
    //     </Form>
    //   </Formik>
    //   <Typography variant="body2" align="center" sx={{mt:3}}>
    //     Don't have an account?
    //     <Button size="small" variant="contained" onClick={()=>navigate("/account/register")}>
    //         register
    //     </Button>
    //   </Typography>
    // </div>

    // <div className="App">
      // <div className="form">
      //   <h2>Login</h2>
      //   <div className="input">
      //     <div className="inputBox">
      //       <label htmlFor="">Username</label>
      //       <input type="text" name="" placeholder="example@test.com" />
      //     </div>
      //     <div className="inputBox">
      //       <label htmlFor="">Password</label>
      //       <input type="password" name="" placeholder="......." />
      //     </div>
      //     <div className="inputBox">
      //       <input type="submit" name="" value="Sign In" />
      //     </div>
      //   </div>
      //   <p className="forget">
      //     Forget Password ? <a href="#">Click Here!</a>
      //   </p>
      // </div>
    // </div>


    
    <div className="form">
      <h2>Login</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="input">
          <div className="inputBox">
            <label htmlFor="email">Username</label>
            <Field type="email" name="email" placeholder="example@test.com" />
          </div>
          <div className="inputBox">
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" placeholder="......." />
          </div>
          <div className="inputBox">
            <input type="submit" name="" value="Sign In" />
          </div>
        </Form>
      </Formik>
      <p className="forget">
        Not Registered Yet! ?
          <Button size="small" onClick={()=>navigate("/account/register")}>
           register
         </Button>
      </p>
      <p className="forget">
        Forget Password ? <a href="#">Click Here!</a>
      </p>
    </div>
  );
};
