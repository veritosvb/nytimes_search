var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var q = "trump";
var begin_date = "20180501";
var end_date = "20180519";


url += '?' + $.param({
  'api-key': "54da3f0b1be344a49b897ea0d8cc7250",
  'q': q,
  'begin_date': begin_date,
  'end_date': end_date
});
$.ajax({
  url: url,
  method: 'GET',
}).then(function(result) {
  var doc = result.response.docs;
  console.log(result);
  console.log(doc[0]);
  console.log(doc[0].headline.main);
  console.log(doc[0].byline.original);
  console.log(doc[0].pub_date);
  console.log(doc[0].web_url);
}).fail(function(err) {
  throw err;
});
