var needle = require('needle');
var cheerio = require('cheerio');


//var url = "https://rus-towns.ru/centralnyj-federalnyj-okrug/";


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'transit-s'
});



connection.query("SELECT * FROM urls", function (error, results, fields) {
	//console.log(results);
	results.forEach((el,i)=>{
		var url = encodeURI(el.url);
		needle.get(url,(err,res)=>{
			var $ = cheerio.load(res.body);
			console.log($('#totalDistance').text());
			//console.log(res);
		});
	});
});








