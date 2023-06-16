import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/index";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { validateEmail } from "./validateEmail";
import bcrypt from "bcryptjs";

const SignInForm = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.users);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Find the user with the matching email
      const user = auth.find((user) => user.email === formData.email);

      if (!user) {
        setError("This email is not registered");
        return;
      }

      // Compare the entered password with the stored hashed password
      const passwordMatch = bcrypt.compareSync(
        formData.password,
        user.password
      );

      if (!passwordMatch) {
        setError("Wrong password");
        return;
      }

      // Dispatch the signIn action with email and password as payload
      dispatch(signIn({ email: formData.email, password: formData.password }));

      setFormData({
        email: "",
        password: "",
      });
      setError("");
      setSuccessMessage("Correct credentials");
    }
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError("Please provide email and password");
      return false;
    } else if (!validateEmail(formData.email)) {
      setError("Invalid email format");
      return false;
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          type="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ marginBottom: "1rem" }}
        />
        <Button variant="contained" type="submit">
          Sign In
        </Button>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </Box>
    </form>
  );
};

export default SignInForm;
