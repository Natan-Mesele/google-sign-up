const { createOrFindUser } = require('../service/authService');

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

module.exports = { googleSignUp };
