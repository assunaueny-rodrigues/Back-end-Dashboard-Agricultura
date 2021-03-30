const mongoose = require('mongoose')

const Agricidrntt = new mongoose.Schema({
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
  collection: 'agricidrntt'
})

module.exports = mongoose.model('agricidrntt', Agricidrntt)