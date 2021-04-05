'use strict';
const playersRoutes = require ('./players')
const scoresRoutes = require ('./scores')


module.exports = async app => {
    app.use(`/api/${playersRoutes.pathName}`, playersRoutes.router)
    app.use(`/api/${scoresRoutes.pathName}`, scoresRoutes.router)
}