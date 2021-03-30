const mongoose = require('mongoose')

const Agrirntemp = new mongoose.Schema({
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
  collection: 'agrirntemp'
})


module.exports = mongoose.model('agrirntemp', Agrirntemp)