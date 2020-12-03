const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  imageUrl: { type: String, required: false },
})

module.exports = Notes = mongoose.model('notes', NoteSchema);; 