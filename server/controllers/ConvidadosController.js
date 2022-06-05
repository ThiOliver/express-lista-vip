const convidados = require('../data/convidados.json')

const controller = {}

controller.index = (req,res) => res.render('convidados', {
    title: 'Lista de convidados',
     convidados
    })

controller.vip = (req,res) => res.render('convidados', {
    title: 'Lista de convidados VIP',
    convidados: convidados.filter(convidado => convidado.vip)
})

controller.add = (req,res) => res.render('adicionar-convidado', {
    title: 'Adicionar Convidados'
})

module.exports = controller 