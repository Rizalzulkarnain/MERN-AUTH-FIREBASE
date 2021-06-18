const admin = require('../firebase');
const User = require('../models/auth.model');

exports.authCheck = async (req, res, next) => {
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    req.user = firebaseUser;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message || 'Invalid or Expired Token',
    });
  }
};

exports.adminCheck = async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({ email }).exec();

  if (adminUser.role !== 'admin') {
    res.status(403).json({
      success: false,
      error: 'Admin resource, Access denied!' || error.message,
    });
  } else {
    next();
  }
};
