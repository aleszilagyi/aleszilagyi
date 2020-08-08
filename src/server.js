//Server
const express = require("express")
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require("./pages")

//config nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server, 
    noCache: true,
})

//Server init and config
server
// receive req.body data
.use(express.urlencoded({ extended: true }))
// config static files (css, scripts, files)
.use(express.static("public"))
// app paths
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// server start
.listen(5500)