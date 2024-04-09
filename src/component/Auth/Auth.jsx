import { Modal, Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { style } from "../Cart/Cart";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";

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
