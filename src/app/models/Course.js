 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');





const Course = new Schema({
  //  _id: { type: String, maxLenath: 255 },

    name: { type: String, default: 'hahaha' },

    
    img: { type: String, maxLenath: 255 },
    videoId: { type: String, maxLenath: 255 },
    description:{ type: String, default: 'hahaha'},
    date: { type: Date, default: Date.now },
    slug: { type: String, slug: "name" }
    
  });
  mongoose.plugin(slug);

  Course.plugin(mongooseDelete,{

    deletedAt : true,
    overrideMethods: 'all'

  });

  module.exports = mongoose.model('Course', Course);