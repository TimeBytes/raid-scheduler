const express = require("express");
const router = express.Router();
const { login } = require("../services/authService");

// POST /login route for user authentication
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Call the login function to authenticate the user
    const { token, user } = await login(email, password);

    // Return the token and user details
    res.json({ token, user });
  } catch (error) {
    // Handle authentication errors
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;
