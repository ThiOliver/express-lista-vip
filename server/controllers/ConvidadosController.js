const fs = require('fs')
const path = require('path')
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

controller.show = (req,res) => {
    const convidado = convidados.filter(convidado => convidado.id == req.params.id)[0]
     res.render('convidados', {
    title: `Convidado ${convidado.nome}`,
    convidado 
})
}
controller.add = (req,res) => res.render('adicionar-convidado', {
    title: 'Adicionar Convidados'
})

controller.create = (req,res) => {

const convidadoNovo = {
    id: convidados[convidados.length -1].id + 1,
    ...req.body
}

const convidadosAtualizados = [...convidados, convidadoNovo]
fs.writeFileSync(
    path.join(__dirname, '../data/convidados.json'),
    JSON.stringify(convidadosAtualizados),
    'utf-8'
)

    res.render('sucesso', {
    title: `Convidado(s) ${convidadoNovo.nome} adicionado(s) com sucesso!`
})
}

module.exports = controller 