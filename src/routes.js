const express = require('express')
const routes = express.Router()
const c = require('./model/brpm')
const Brpm = require('./controllers/brpm')
const Brtemp = require('./controllers/brtemp')
const Agriesttt = require('./controllers/agriesttt')
const Agrirnppm = require('./controllers/agrirnppm')
const Agrirntemp = require('./controllers/agrirntemp')
const Agricidrntt = require('./controllers/agricidrntt')

//Rota pra teste e disponibilidade da API
routes.get('/', (req, res) => {
  return res.status(200).json({message: 'Ola, Esta API Esta Funcionando Com Sucesso!'})
})

//Rotas para acesso aos dados da lavoura permanente do Brasil
routes.get('/areacol/brpm', Brpm.areacol)
routes.get('/numest/brpm', Brpm.numest)
routes.get('/valorprod/brpm', Brpm.valorprod)
routes.get('/tudo/brpm', Brpm.todosdados) /*Nova Rota*/

//Rotas para acesso aos dados da lavoura temporária do Brasil
routes.get('/numest/brtemp', Brtemp.numest)
routes.get('/valorprod/brtemp', Brtemp.valorprod)
routes.get('/areacol/brtemp', Brtemp.areacol)
routes.get('/tudo/brtemp', Brtemp.todosdados)

//Rotas para acesso aos dados da lavoura permanente dos estados
routes.get('/numest/estpm', Agriesttt.numestpm)
routes.get('/valorprod/estpm', Agriesttt.valorprodpm)
routes.get('/areacol/estpm', Agriesttt.areacolpm)

//Rotas para acesso aos dados da lavoura temporária dos estados
routes.get('/numest/esttemp', Agriesttt.numesttemp)
routes.get('/valorprod/esttemp', Agriesttt.valorprodtemp)
routes.get('/areacol/esttemp', Agriesttt.areacoltemp)

//Rotas para acesso aos dados da lavoura permanente do RN
routes.get('/numest/agrirnpm', Agrirnppm.numestrnpm)
routes.get('/areacol/agrirnpm', Agrirnppm.areacolrnpm)
routes.get('/valorprod/agrirnpm', Agrirnppm.valorprodrnpm)
routes.get('/tudo/agrirnpm', Agrirnppm.todosdados)

//Rotas para acesso aos dados da lavoura permanente das cidades do RN
routes.get('/numest/cidrnttpm', Agricidrntt.numestcidpm)
routes.get('/areacol/cidrnttpm', Agricidrntt.areacolcidpm)
routes.get('/valorprod/cidrnttpm', Agricidrntt.valorprodcidpm)

//Rotas para acesso aos dados da lavoura temporária do RN
routes.get('/numest/agrirntemp', Agrirntemp.numestrntemp)
routes.get('/areacol/agrirntemp', Agrirntemp.areacolrntemp)
routes.get('/valorprod/agrirntemp', Agrirntemp.valorprodrntemp)
routes.get('/tudo/agrirntemp', Agrirntemp.todosdados)

//Rotas para acesso aos dados da lavoura temporária das cidades do RN
routes.get('/numest/cidrntttemp', Agricidrntt.numestcidtemp)
routes.get('/areacol/cidrntttemp', Agricidrntt.areacolcidtemp)
routes.get('/valorprod/cidrntttemp', Agricidrntt.valorprodcidtemp)
module.exports = routes