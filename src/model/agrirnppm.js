const mongoose = require('mongoose')

const Agrirnppm = new mongoose.Schema({
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
  collection: 'agrirnppm'
})


module.exports = mongoose.model('agrirnppm', Agrirnppm)