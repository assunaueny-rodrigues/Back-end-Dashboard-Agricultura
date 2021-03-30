const Agricidrntt = require('../model/agricidrntt')


class AgricidrnttControllers {
  //Controles Permanente
  async numestcidpm(req, res) {
    const data = await Agricidrntt.find({Indicador:"Lavoura permanente"},{_id:0, cidade:1, numest:1}).sort({numest:-1}).limit(10)
    return res.json(data)
  }

  async areacolcidpm(req, res) {
    const data = await Agricidrntt.find({Indicador:"Lavoura permanente"},{_id:0, cidade:1, areacol:1}).sort({areacol:-1}).limit(10)
    return res.json(data)
  }

  async valorprodcidpm(req, res) {
    const data = await Agricidrntt.find({Indicador:"Lavoura permanente"},{_id:0, cidade:1, valorprod:1}).sort({valorprod:-1}).limit(10)
    return res.json(data)
  }

  //Controles Temporários
  async numestcidtemp(req, res) {
    const data = await Agricidrntt.find({Indicador:"Lavoura temporária"},{_id:0, cidade:1, numest:1}).sort({numest:-1}).limit(10)
    return res.json(data)
  }

  async areacolcidtemp(req, res) {
    const data = await Agricidrntt.find({Indicador:"Lavoura temporária"},{_id:0, cidade:1, areacol:1}).sort({areacol:-1}).limit(10)
    return res.json(data)
  }

  async valorprodcidtemp(req, res) {
    const data = await Agricidrntt.find({Indicador:"Lavoura temporária"},{_id:0, cidade:1, valorprod:1}).sort({valorprod:-1}).limit(10)
    return res.json(data)
  }

}

module.exports = new AgricidrnttControllers()