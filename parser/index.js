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




// needle.get(url, (err,res)=> {
// 	//console.log(res.body);
// 	var $ = cheerio.load(res.body);

// 	//console.log($('.list_item a'));

// 	//var items = [];
	 
// 	$('.list_item').each(function(i, elem) {
// 		var distance = $($(this).find('.param_value')[2]).text();
// 		var distance2 = distance.replace(/[^-0-9]/gim,'');
// 		var from = $($(this).find('.param_value a')[0]).text();
// 		var to = $($(this).find('.param_value a')[1]).text();

// 		connection.query("INSERT INTO `distance` (`id`, `from`, `to`, `distance`) VALUES (NULL, '"+from+"', '"+to+"', '"+distance2+"')", function (error, results, fields) {
// 		  console.log(from+' '+to+' '+distance2);
// 		});
// 	});
// });

needle.get(url, (err,res)=> {
	var $ = cheerio.load(res.body);

	var citys = [];

	var citys2 = [];

	var dist = [];

	var urls = [];

	$('.entry-content li a').each(function(i,el){
		//console.log($(el).text());
		citys.push($(el).text());
	});
	

	citys.forEach(function (el,i) {
		citys.forEach(function(el2,i2){
			citys2.push({'from': el, 'to': el2});
			// console.log('from: '+el);
			// console.log('to:'+el2);
		});
	});


	citys2.forEach((el,i)=>{
		var url2 = 'https://www.avtodispetcher.ru/distance/?from='+el.from+'&to='+el.to+'';
		urls.push(url2);
		connection.query("INSERT INTO `urls` (`id`, `from`, `to`, `url`) VALUES (NULL,'"+el.from+"', '"+el.to+"' ,'"+url2+"')", function (error, results, fields) {
			  console.log(url2);
		});
	});

	//console.log(urls);
});





