const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      index: true,
      required: true,
    },
    role: {
      type: String,
      enum: ['subscriber', 'admin'],
      default: 'subscriber',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User ', userSchema);
