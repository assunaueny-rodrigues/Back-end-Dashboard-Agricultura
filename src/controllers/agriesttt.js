const Agriesttt = require('../model/agriesttt')

class AgriestttControllers {
  // Controles Permanentes Estados do Brasil
  async numestpm(req, res) {
    const data = await Agriesttt.find({ Indicador: "Lavoura permanente" }, { _id: 0, estado: 1, numest: 1 }).sort({estado:1})
    return res.status(200).json(data)
  }
  async valorprodpm(req, res) {
    const data = await Agriesttt.find({ Indicador: "Lavoura permanente" }, { _id: 0, estado: 1, valorprod: 1 }).sort({estado:1})
    return res.status(200).json(data)
  }
  async areacolpm(req, res) {
    const data = await Agriesttt.find({ Indicador: "Lavoura permanente" }, { _id: 0, estado: 1, areacol: 1 }).sort({estado:1})
    return res.status(200).json(data)
  }

  // Controles Temporários Estados do Brasil
  async numesttemp(req, res) {
    const data = await Agriesttt.find({ Indicador: "Lavoura temporária" }, { _id: 0, estado: 1, numest: 1 }).sort({estado:1})
    return res.status(200).json(data)
  }
  async valorprodtemp(req, res) {
    const data = await Agriesttt.find({ Indicador: "Lavoura temporária" }, { _id: 0, estado: 1, valorprod: 1 }).sort({estado:1})
    return res.status(200).json(data)
  }
  async areacoltemp(req, res) {
    const data = await Agriesttt.find({ Indicador: "Lavoura temporária" }, { _id: 0, estado: 1, areacol: 1 }).sort({estado:1})
    return res.status(200).json(data)
  }
}

module.exports = new AgriestttControllers()