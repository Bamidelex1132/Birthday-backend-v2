const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  text: { type: String, required: true }
}, { timestamps: true }); // this adds createdAt and updatedAt automatically

module.exports = mongoose.model('message', messageSchema);
