const User = require('../models/auth.model');

exports.createOrUpdateUser = async (req, res) => {
  try {
    const { email, name } = req.user;
    const user = await User.findOneAndUpdate(
      { email },
      { name },
      { new: true }
    );

    if (user) {
      return res.status(200).json({
        success: true,
        data: user,
      });
    } else {
      const newUser = await new User({ email }).save();
      res.status(201).json({
        success: true,
        data: newUser,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.currentUser = async (req, res) => {
  try {
    await User.findOne({ email: req.user.email }).exec((err, user) => {
      if (err) throw new Error();
      res.status(200).json({
        success: true,
        data: user,
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
