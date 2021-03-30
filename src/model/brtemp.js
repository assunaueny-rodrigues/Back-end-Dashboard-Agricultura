const mongoose = require('mongoose')

const Brtemp = new mongoose.Schema({
  Indicador: String,
  numest: Number,
  qtdprod: Number,
  areacol: Number,
  valorprod: Number,
  undnumest: String,
  undqtdprod: String,
  undareacol: String,
  undvalorprod: String
}, {
  timestamps: true,
  collection: 'agribrtemp'
})


module.exports = mongoose.model('brtemp', Brtemp)