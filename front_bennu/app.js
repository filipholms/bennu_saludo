var express = require("express")
var app = express()


app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
	console.log("servidor encendido")
})

app.listen(3000)
