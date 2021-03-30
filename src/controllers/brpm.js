const Brpm = require('../model/brpm')

//Controles Lavoura Permanente Brasil
class BrpmControllers {
  async areacol(req, res) {
    const data = await Brpm.find({}, { _id: 0, Indicador: 1, areacol: 1 }).sort({areacol:-1}).limit(10)
    return res.status(200).json(data)
  }

  async numest(req, res) {
    const data = await Brpm.find({}, { _id: 0, Indicador: 1, numest: 1 }).sort({ numest: -1 }).limit(10)
    return res.status(200).json(data)
  }

  async valorprod(req, res) {
    const data = await Brpm.find({}, { _id: 0, Indicador: 1, valorprod: 1 }).sort({ valorprod: -1 }).limit(10)
    return res.status(200).json(data)
  }

  async todosdados(req, res) {
    const data = await Brpm.find()
    return res.status(200).json(data)
  }
}

module.exports = new BrpmControllers()