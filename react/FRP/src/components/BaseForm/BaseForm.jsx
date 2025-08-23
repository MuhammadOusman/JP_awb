import React, { useEffect, useRef } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import styles from "./BaseForm.module.css";
import { toast } from "react-toastify";

const BaseForm = ({
  title,
  fields,
  onSubmit,
  initialValues = {},
  disableSuccessToast = false,
  toastValue,
  radioOptions,
}) => {
  const [formData, setFormData] = React.useState({});
  const inputRefs = useRef([]);
  const [errors, setErrors] = React.useState({});

  useEffect(() => {
    let initial = { ...initialValues };

    if (
      radioOptions &&
      radioOptions.defaultValue &&
      !initial[radioOptions.name]
    ) {
      initial[radioOptions.name] = radioOptions.defaultValue;
    }

    setFormData(initial);
  }, [initialValues, radioOptions]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (index < fields.length - 1) {
        inputRefs.current[index + 1]?.focus();
      } else {
        inputRefs.current[fields.length]?.click();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    let hasError = false;

    fields.forEach((field) => {
      if (!formData[field.name] || formData[field.name].trim() === "") {
        newErrors[field.name] = "This field is required";
        toast.error(`${field.label} is required!`, {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        hasError = true;
      }
    });

    if (radioOptions && !formData[radioOptions.name]) {
      newErrors[radioOptions.name] = `${radioOptions.label} is required`;
      toast.error(`${radioOptions.label} is required!`, {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;
    onSubmit(formData);

    if (!disableSuccessToast) {
      toast.success(`${toastValue} Successfully!`, {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <Box className={styles.baseForm}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "var(--neon-green)", fontFamily: "var(--font-family-primary)" }}>
        {title}
      </Typography>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <TextField
            key={index}
            value={formData[field.name] || ""}
            fullWidth
            onKeyDown={(e) => handleKeyDown(e, index)}
            inputRef={(el) => (inputRefs.current[index] = el)}
            label={field.label}
            name={field.name}
            type={field.type || "text"}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
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
              pb: "10px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "var(--border-radius-small)",
              },
            }}
          />
        ))}
        {radioOptions && (
          <Box mb={2}>
            <FormLabel component="legend" sx={{ color: "var(--neon-green) !important", fontWeight: "bold", fontFamily: "var(--font-family-primary)" }}>{radioOptions.label}</FormLabel>
            <RadioGroup
              row
              name={radioOptions.name}
              value={formData[radioOptions.name] || ""}
              onChange={handleChange}
            >
              {radioOptions.options.map((opt, idx) => (
                <FormControlLabel
                  key={idx}
                  value={opt.value}
                  control={
                    <Radio
                      sx={{
                        color: "var(--text-secondary)",
                        "&.Mui-checked": { color: "var(--neon-green)" },
                      }}
                    />
                  }
                  label={opt.label}
                  sx={{
                    "& .MuiTypography-root": {
                      fontFamily: "var(--font-family-primary)",
                      color: "var(--text-primary)",
                    },
                  }}
                />
              ))}
            </RadioGroup>
          </Box>
        )}
        <Button
          ref={(el) => (inputRefs.current[fields.length] = el)}
          variant="contained"
          type="submit"
          fullWidth
          sx={{
            backgroundColor: "var(--neon-green)",
            color: "var(--background-dark)",
            marginTop: "10px",
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
          {title}
        </Button>
      </form>
    </Box>
  );
};

export default BaseForm;
