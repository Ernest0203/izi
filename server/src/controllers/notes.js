const config = require('config');
const Notes = require('../db/mongo/models/notes');

const HOST = config.get('server.host');
const PORT = config.get('server.port');

module.exports.getNotes = async function(req, res) {
  await Notes.find().sort({ _id: -1 })
    .then(data => res.json(data))
    .catch(error => res.send(error))
}

module.exports.createNote =  async function(req, res) {
  const query = { ...req.body };
  if (!query.title || !!query.body) res.status(400).send('Please fill all fields');
  if (!req.files) {
    await Notes.create(query)
      .then(item => res.json(item))
      .catch(error => res.send(error))
  } else {
    const { file } = req.files;
    file.mv(`./resources/${file.name}`, (error) => {
      if (error) {
        console.log(error)
        res.status(500).send(error);
        return;
      }
      query.imageUrl = `${HOST}:${PORT}/${file.name}`;
      Notes.create(query)
        .then(item => res.json(item))
        .catch(error => res.send(error))
    })
  }
}

module.exports.removeNote = async function(req, res) {
  await Notes.findByIdAndRemove({ _id: req.body._id })
    .then(res => res.json(res))
    .catch(error => res.send(error))
}