const { Movie } = require("../../database/models");

module.exports = {
  list: (req, res) => {
    Movie.findAll()
    .then(movies => {
      const RESPONSE = {
        meta: {
          status: 200,
          total: movies.length,
          url: "/movies",
        },
        data: movies
      }
    
    res.json(RESPONSE);
    })
},
  detail: (req, res) => {
    Movie.findByPk(req.params.id)
    .then(movie => {
      const RESPONSE = {
        meta: {
          status: 200,
          url: "movies/:id",
        },
        data: movie
      }
    
    res.json(RESPONSE);
    })
  }
  
}
