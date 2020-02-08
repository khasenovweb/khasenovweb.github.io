var needle = require('needle');
var cheerio = require('cheerio');


var url = "https://rus-towns.ru/centralnyj-federalnyj-okrug/";


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'transit-s'
});




needle.get(url, (err,res)=> {
	var $ = cheerio.load(res.body);
	 
	$('.entry-content li a').each(function(i, el) {
		var name = $(el).text();
		connection.query("INSERT INTO `citys` (`id`, `name`) VALUES (NULL, '"+name+"')", function (error, results, fields) {
		  console.log(name);
		});
	});
});






