const productsRouter = require('./products.router')
const usersRouter = require('./users.router')
const categoriesRouter = require('./categories.router')

function routerApi(app) {
  app.use('/products', productsRouter),
  app.use('/user', usersRouter),
  app.use('/categories', categoriesRouter)
}

module.exports = routerApi;
