


const path = require("path")
const express = require("express")
const exphbs = require("express-handlebars")

let app = express()
let port = process.env.PORT || 3001


app.use(express.static("public"))



app.get('*', (req, res) => {
    res.status(404).send("<h1>404: could not find page<h1>")
})



app.listen(port, () => {
    console.log(" --- PORT: ", port)
})