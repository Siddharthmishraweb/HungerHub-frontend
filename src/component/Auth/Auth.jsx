import { Modal, Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
// import { style } from "../Cart/Cart";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";

export const style = {
  position: "absolute",
  // top: "50%",
  left: "50%",
  bottom: "50%",
  transform: "translate(-50%, 50%)",
  width: 400,
  outline: "none",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <Modal
  sx={{
    "& .MuiPaper-root": {
      backgroundColor: "white"
    }
  }}
        open={
          location.pathname === "/account/register" ||
          location.pathname === "/account/login"
        }
      >
        <Box sx={style}>
          {location.pathname === "/account/register"? <RegisterForm /> : <LoginForm/>}
        </Box>
      </Modal>
    </div>
  );
};
