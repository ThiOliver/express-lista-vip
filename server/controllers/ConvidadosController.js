const convidados = require('../data/convidados.json')

const controller = {}

controller.index = (req,res) => res.render('convidados', {title: 'Lista de convidados', convidados: convidados})


module.exports = controller 