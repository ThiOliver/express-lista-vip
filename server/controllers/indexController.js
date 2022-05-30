const controller = {}

controller.index = (req,res) => res.sender('index', {title: 'Festa do Caique'})


module.exports = controller 