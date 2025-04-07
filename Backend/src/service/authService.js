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

module.exports = { createOrFindUser };
