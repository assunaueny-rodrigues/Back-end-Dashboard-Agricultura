const Agrirntemp = require('../model/agrirntemp')


class AgrirntempControllers {
  // Controles Temporária Produtos do RN
  async areacolrntemp(req, res) {
    const data = await Agrirntemp.find({areacol:{$gt:0}}, {_id:0,Indicador:1, areacol:1}).sort({areacol:-1}).limit(10)
    return res.json(data)
  }

  async numestrntemp(req, res) {
    const data = await Agrirntemp.find({numest:{$gt:0}}, {_id:0,Indicador:1, numest:1}).sort({numest:-1}).limit(10)
    return res.json(data)
  }

  async valorprodrntemp(req, res) {
    const data = await Agrirntemp.find({valorprod:{$gt:0}}, {_id:0,Indicador:1, valorprod:1}).sort({valorprod:-1}).limit(10)
    return res.json(data)
  }

  async todosdados(req, res) {
    const data = await Agrirntemp.find()
    return res.json(data)
  }

}

module.exports = new AgrirntempControllers()