const mongoose = require('mongoose');
// schema will look similar for any mongoose schema
const Schema = mongoose.Schema;

// single field and validation to that field
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 3
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
