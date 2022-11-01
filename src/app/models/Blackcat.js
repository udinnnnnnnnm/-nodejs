 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Blackcat = new Schema({
    name: { type: String, default: 'hahaha' },
    img: { type: String, maxLenath: 255 },
    description:{ type: String, default: 'hahaha'},
    date: { type: Date, default: Date.now }
    
  });

  module.exports = mongoose.model('Blackcat', Blackcat);