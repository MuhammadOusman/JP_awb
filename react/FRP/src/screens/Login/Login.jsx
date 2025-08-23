import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import lms from "../../assets/LMS-img.jpg";
import React from "react";
import styles from "./Login.module.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useRef } from "react";

export const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const buttonRef = useRef(null);

  const handleKeyDown = (e, nextRef, isSubmit) => {
    if (e.key === "Enter") {
      e.preventDefault();
      isSubmit ? nextRef.current.click() : nextRef.current.focus();
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    const getToastPosition = () => {
      return window.innerWidth <= 800 ? "bottom-center" : "bottom-right";
    };

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log("Login successful: ", user);
        const uid = user.uid;
        const getData = await getDoc(doc(db, "Users", uid));
        console.log(getData.data());

        localStorage.setItem("userId", uid);
        localStorage.setItem("userData", JSON.stringify(getData.data()));

        toast.success("Login successfully!", {
          position: getToastPosition(),
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);

        toast.error("Email or password is incorrect!", {
          position: getToastPosition(),
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Box className={`${styles.container} ${styles.slideIn}`}>
        <img src={lms} className={styles.lms} alt="lms" />
        <form onSubmit={handleLogin} className={styles.form} action="">
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "var(--neon-green)", fontFamily: "var(--font-family-primary)" }}
          >
            Welcome Back!
          </Typography>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            inputRef={input1Ref}
            onKeyDown={(e) => handleKeyDown(e, input2Ref)}
            label="Enter Email"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              sx: {
                "&.Mui-focused": {
                  color: "var(--neon-green)",
                },
                color: "var(--text-secondary)",
                fontFamily: "var(--font-family-primary)",
              },
            }}
            InputProps={{
              sx: {
                "& fieldset": {
                  borderColor: "var(--border-color)",
                  borderRadius: "var(--border-radius-small)",
                },
                "&:hover fieldset": {
                  borderColor: "var(--neon-green)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--neon-green)",
                },
                background: "var(--background-light)",
                color: "var(--text-primary)",
                fontFamily: "var(--font-family-primary)",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "var(--border-radius-small)",
              },
            }}
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel
              sx={{
                "&.Mui-focused": {
                  color: "var(--neon-green)",
                },
                color: "var(--text-secondary)",
                fontFamily: "var(--font-family-primary)",
              }}
              htmlFor="outlined-adornment-password"
            >
              Password
            </InputLabel>
            <OutlinedInput
              onChange={(e) => setPassword(e.target.value)}
              inputRef={input2Ref}
              onKeyDown={(e) => handleKeyDown(e, buttonRef, true)}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "var(--border-color)",
                  borderRadius: "var(--border-radius-small)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "var(--neon-green)",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "var(--neon-green)",
                },
                background: "var(--background-light)",
                color: "var(--text-primary)",
                fontFamily: "var(--font-family-primary)",
                borderRadius: "var(--border-radius-small)",
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                    sx={{ color: "var(--text-secondary)" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button
            ref={buttonRef}
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "var(--neon-green)",
              color: "var(--background-dark)",
              textTransform: "capitalize",
              borderRadius: "var(--border-radius-small)",
              "&:hover": {
                backgroundColor: "var(--neon-green-dark)",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 30px rgba(0, 255, 153, 0.2)",
              },
              transition: "all var(--transition-speed)",
              fontFamily: "var(--font-family-primary)",
            }}
          >
            Sign in
          </Button>
          <p>
            Don't have an account?{" "}
            <Link style={{ color: "var(--neon-green)" }} to="/signup">
              Register now
            </Link>
          </p>
        </form>
      </Box>
    </>
  );
};
