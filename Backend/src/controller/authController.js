const jwt = require('jsonwebtoken')
const { createOrFindUser, registerUser } = require('../service/authService');
const { generateToken } = require('../config/jwtProvider');

const googleSignUp = async (req, res) => {
  const { name, email, photoUrl, uid } = req.body;

  try {
    const user = await createOrFindUser({ name, email, photoUrl, uid });
    res.status(200).json({
      message: user ? 'User logged in' : 'User created',
      user,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error handling Google sign-up', error });
  }
};

const register = async (req, res) => {
  const { name, email, password, uid, photoUrl } = req.body;

  try {
    const user = await registerUser(name, email, password, uid, photoUrl);
    const jwt = generateToken();
    res.status(201).json({
      jwt, message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


module.exports = { 
  googleSignUp,
  register
 };
