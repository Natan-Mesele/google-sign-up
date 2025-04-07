const User = require('../model/userModel');

const createOrFindUser = async (userData) => {
  let user = await User.findOne({ email: userData.email });

  if (!user) {
    user = new User({
      name: userData.name,
      email: userData.email,
      photoUrl: userData.photoUrl,
      uid: userData.uid,
    });

    await user.save();
  }
  return user;
};

const registerUser = async (name, email, password, uid, photoUrl) => {
  const userExists = await User.findOne({ email });

  if (userExists) {
    throw new Error("User already exists");
  }

  let userData = {
    name,
    email,
    uid,
    photoUrl,
  };

  if (password) {
    userData.password = password;
  }

  const user = await User.create(userData);
  return user;
};

module.exports = {
  createOrFindUser,
  registerUser
};
