import { Typography, TextField, Button, InputLabel, MenuItem, Select } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: ""
};

export const RegisterForm = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {};
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
        <Field
            as={TextField}
            name="fullName"
            label="fullName"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="email"
            label="email"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="password"
            type="password"
            label="password"
            fullWidth
            variant="outlined"
            margin="normal"
          />
            <InputLabel id="role-simple-select-label">Role</InputLabel>
            <Field fullWidth margin="normal"
             as={Select}
             labelId="role-simple-select-label"
             id="demo-simple-select"
             name="role"
             label="Role"
            //  onChange={handleChange}

             >
                <MenuItem value={"ROLE_CUSTOMER"}>CUSTOMER</MenuItem>
                <MenuItem value={"ROLE_RESTAURANT_OWNER"}>RESTAURANT_OWNER</MenuItem>


            </Field>
          <Button
            sx={{ mt: 2, padding: "1rem" }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Login
          </Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Already have an account?
        <Button
          size="small"
          onClick={() => navigate("/account/login")}
        >
          login
        </Button>
      </Typography>
    </div>
  );
};
