const Agrirnppm = require('../model/agrirnppm')


class AgrirnppmControllers {
  // Controles Permanente Produtos do RN
  async areacolrnpm(req, res) {
    const data = await Agrirnppm.find({areacol:{$gt:0}}, {_id:0,Indicador:1, areacol:1}).sort({areacol:-1}).limit(10)
    return res.json(data)
  }

  async numestrnpm(req, res) {
    const data = await Agrirnppm.find({numest:{$gt:0}}, {_id:0,Indicador:1, numest:1}).sort({numest:-1}).limit(10)
    return res.json(data)
  }

  async valorprodrnpm(req, res) {
    const data = await Agrirnppm.find({valorprod:{$gt:0}}, {_id:0,Indicador:1, valorprod:1}).sort({valorprod:-1}).limit(10)
    return res.json(data)
  }

  async todosdados(req, res) {
    const data = await Agrirnppm.find()
    return res.json(data)
  }

}

module.exports = new AgrirnppmControllers()