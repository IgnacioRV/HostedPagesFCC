// http://api.jquery.com/jquery.getjson/#jsonp


$('#getMessage').on("click", function() {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
    .done(update)
    .fail(handleErr);
});


function update(response) {
  var html = "";
  $('#mainText').html(response.quoteText+"<br>"+response.quoteAuthor);
  
}

function handleErr(jqxhr, textStatus, err) {
  console.log("Request Failed: " + textStatus + ", " + err);
}