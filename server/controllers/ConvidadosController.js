const controller = {}

controller.index = (req,res) => res.render('convidados', {title: 'Lista de convidados'})


module.exports = controller 