var express = require("express"),
	fs = require("fs"),
	app = express(),
	eps = require("ejs"),
	morgan = require("morgan");

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8000,
	ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

app.get("/", function (req, res) {
	res.send("Hello, world!");
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500).send("Something bad happened!");
});

app.listen(port, ip);
console.log("Server running on http://%s:%s", ip, port);

module.exports = app ;
