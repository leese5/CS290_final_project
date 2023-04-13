


const path = require("path")
const express = require("express")
const exphbs = require("express-handlebars")

let app = express()
let port = process.env.PORT || 3001

app.engine("handlebars", exphbs.engine({
    "defaultLayout": "main"
}))

app.set('view engine', 'handlebars')


app.use(express.static("public"))

app.get('*', (req, res) => {
    res.status(404).render('404')
})



app.listen(port, () => {
    console.log(" --- PORT: ", port)
})