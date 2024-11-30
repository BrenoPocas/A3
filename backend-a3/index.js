const express = require('express')
const database = require('./src/database')
const routerUser = require('./src/routes/user')
const controllerUser = require('./src/controllers/user')
const controllerVoluntary = require('./src/controllers/voluntary')
const controllerOng = require('./src/controllers/ong')
const auth = require('./src/middlewares/auth')

const app = new express()
app.use(express.json())
const port = 3001

app.post('/login', controllerUser.Login)
app.post('/voluntary/register', controllerVoluntary.Create)
app.post('/ong/register', controllerOng.Create)

app.use(auth)
app.use('/user', routerUser)

database.db
    .sync({ force: false })
    .then(() => {
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })
    .catch((e) => {
        console.log("Nao foi possivel conectar ao banco de dados: ", e)
    })