import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/index";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { validateEmail } from "./validateEmail";
import bcrypt from "bcryptjs";
import InputLabel from "@mui/material/InputLabel";
const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    accountType: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allowing only alphabets for the full name field
    if (name === "fullName") {
      const alphabetsRegex = /^[A-Za-z\s]+$/;
      if (value === "" || alphabetsRegex.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      const hashedPassword = bcrypt.hashSync(formData.password, 10);
      const hashedConfirmPassword = bcrypt.hashSync(
        formData.confirmPassword,
        10
      );
      const userData = {
        ...formData,
        password: hashedPassword,
        confirmPassword: hashedConfirmPassword,
      };
      dispatch(signUp(userData));
      setFormData({
        fullName: "",
        email: "",
        accountType: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.fullName) {
      errors.fullName = "Full name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.accountType) {
      errors.accountType = "Account type is required";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6 || !/\d/.test(formData.password)) {
      errors.password =
        "Password should be at least 6 characters long and contain at least one letter";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box mb={2}>
          <TextField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={!!errors.fullName}
            helperText={errors.fullName}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            required
          />
        </Box>
        <Box mb={2} sx={{ minWidth: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="accountType-label">Choose Account Type</InputLabel>
            <Select
              labelId="accountType-label"
              value={formData.accountType}
              onChange={handleChange}
              name="accountType"
              error={!!errors.accountType}
              required
            >
              <MenuItem value="Personal">Personal</MenuItem>
              <MenuItem value="Family">Family</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box mb={2}>
          <TextField
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            required
          />
        </Box>
        <Box mt={2}>
          <Button variant="contained" type="submit">
            Sign Up
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default SignUpForm;
