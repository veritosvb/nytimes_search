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

        console.log("Search start")
        q = $('#search-term').val().trim();
        console.log(q);
        number_records = $('#dropdown').val().trim();
        console.log(number_records);
        begin_date =  $('#start-year').val().trim();
        console.log(begin_date);
        end_date = $('#end-year').val().trim();
        console.log(end_date);
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
        console.log(url);
        //https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=54da3f0b1be344a49b897ea0d8cc7250&q=trump&begin_date=&end_date=
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
          for(let i = 0; i<number_records; i++){
              var newHeader = $('<h5 class="card-title">');
              var newP1 = $('<p class="card-text">');
              var newP2 = $('<p class="card-text">');
              var newP3 = $('<a class="card-text">');
              newHeader.text(doc[i].headline.main);
              newP1.text(doc[i].byline.original);
              newP2.text(doc[i].pub_date);
              newP3.attr("href", doc[i].web_url);
              newP3.text(doc[i].web_url);
              $("#top-articles .card-body").append(newHeader);
              $("#top-articles .card-body").append(newP1);
              $("#top-articles .card-body").append(newP2);
              $("#top-articles .card-body").append(newP3);

        }

        }).fail(function(err) {
          throw err;
        });

    });
    

});
