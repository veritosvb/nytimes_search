var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var q = "trump";
var begin_date = "20180501";
var end_date = "20180519";
var number_records;


$(document).ready(function(){
    
    
    $('#clear-button').click(function(){
        //Clearing 
        $('#top-articles .card-body').empty();
        console.log("All clear Chief!");
    });
    
    $('#search-button').click(function(){

        q = $('#search-term').val().trim();
        number_records = $('#records').val().trim();
        begin_date =  $('#start-year').val().trim();
        end_date = $('#end-year').val().trim();
        
        if (begin_date === ""){
            begin_date = "20000101";
        }
        if (end_date === ""){
            end_date = "20180519";
        }
        url += '?' + $.param({
          'api-key': "54da3f0b1be344a49b897ea0d8cc7250",
          'q': q,
          'begin_date': begin_date,
          'end_date': end_date,
          'sort': "newest"
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

    });
    

});
