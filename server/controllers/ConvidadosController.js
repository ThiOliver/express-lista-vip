const controller = {}

controller.index = (req,res) => res.sender('convidados', {title: 'Lista de convidados'})


module.exports = controller 