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
import React, { useRef, useState } from "react";
import styles from "../Login/Login.module.css";
import stylessheet from "./Signup.module.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
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


  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const getToastPosition = () => {
      return window.innerWidth <= 800 ? "bottom-center" : "bottom-right";
    };
    
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log("Signup successful: ", user);

        let userData = {
          name,
          email,
        };

        const uid = user.uid;
        await setDoc(doc(db, "Users", uid), userData);

        toast.success("Signup successfully!", {
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
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);

        toast.error(errorMessage, {
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
      <Box className={`${stylessheet.container} ${styles.slideIn}`}>
        <img src={lms} className={styles.lms} alt="lms" />
        <form
          onSubmit={handleSignup}
          className={`${styles.form} ${stylessheet.formContainer}`}
          action=""
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "var(--neon-green)", fontFamily: "var(--font-family-primary)" }}
          >
            Join Our LMS!
          </Typography>
          <TextField
            inputRef={input1Ref}
            onKeyDown={(e) => handleKeyDown(e, input2Ref)}
            onChange={(e) => setName(e.target.value)}
            label="Enter Name"
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
          <TextField
            inputRef={input2Ref}
            onKeyDown={(e) => handleKeyDown(e, input3Ref)}
            onChange={(e) => setEmail(e.target.value)}
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
              inputRef={input3Ref}
              onKeyDown={(e) => handleKeyDown(e, buttonRef, true)}
              onChange={(e) => setPassword(e.target.value)}
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
            Sign up
          </Button>
          <p>
            Already have an account?{" "}
            <Link style={{ color: "var(--neon-green)" }} to="/">
              Login now
            </Link>
          </p>
        </form>
      </Box>
    </>
  );
};
