const fs = require('fs');

const folder = './resourses/';

module.exports.read = async (req, res) => {
  let stream = fs.createReadStream(`${folder}/data.txt`);
  stream.on('data', data => res.json(data.toString()));
  stream.on('error', err => console.log(err));
}

module.exports.write = async (req, res) => {
  let file = fs.createWriteStream(`${folder}/data.txt`);
    
  file.write(req.body.arg);
  file.end();
    
  file.on('finish', () => res.status(200).send('Data was written'));
  file.on('error', err => console.log(err));
}