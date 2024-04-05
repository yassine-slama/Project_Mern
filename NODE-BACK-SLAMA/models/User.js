const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);



