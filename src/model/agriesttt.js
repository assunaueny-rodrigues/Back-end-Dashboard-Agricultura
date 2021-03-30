const mongoose = require('mongoose')

const Agriesttt = new mongoose.Schema({
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
  collection: 'agriesttt'
})


module.exports = mongoose.model('agriesttt', Agriesttt)