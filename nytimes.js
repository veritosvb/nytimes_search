var q;
var begin_date = "";
var end_date = "";
var number_records;


$(document).ready(function(){
    
    
    $('#clear-button').click(function(){
        //Clearing 
        $('#top-articles .card-news').empty();
        console.log("All clear Chief!");
    });
    
    $('#search-button').click(function(){
        $('#top-articles .card-news').empty();
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        q = $('#search-term').val().trim();
        console.log(q);
        number_records = $('#dropdown').val().trim();
        console.log(number_records);
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

          for(let i = 0; i<number_records; i++){
              var newDiv = $('<div class="card-body">');
        
              var newHeader = $('<h5 class="card-title">');
              var newP1 = $('<p class="card-text">');
              var newP2 = $('<p class="card-text">');
              var newP3 = $('<a class="card-text">');
              newHeader.text((i + 1)+ " " + doc[i].headline.main);
             // newDiv.prepend(number);
              newP1.text(doc[i].byline.original);
              newP2.text(doc[i].pub_date);
              newP3.attr("href", doc[i].web_url);
              newP3.text(doc[i].web_url);
              newDiv.append(newHeader);
              newDiv.append(newP1);
              newDiv.append(newP2);
              newDiv.append(newP3);
              $('#top-articles .card-news').append(newDiv);


        }

        }).fail(function(err) {
          throw err;
        });

    });
    

});
