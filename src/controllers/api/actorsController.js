const { Actor } = require("../../database/models");

module.exports = {
  list: (req, res) => {
    Actor.findAll()
    .then(actors => {
      const RESPONSE = {
        meta: {
          status: 200,
          total: actors.length,
          url: "/actors",
        },
        data: actors
      }
    
    res.json(RESPONSE);
    })
},
  actor: (req, res) => {
    Actor.findByPk(req.params.id)
    .then(actor => {
      const RESPONSE = {
        meta: {
          status: 200,
          url: "actors/:id",
        },
        data: actor
      }
    
    res.json(RESPONSE);
    })
  }
  
}
