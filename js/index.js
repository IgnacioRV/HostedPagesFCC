  $(document).ready(function() {
    var quotesAPI = " http://quotes.rest/";
    var quotes = [];
    $.getJSON(quotesAPI, {})
      .done(function(json) {
        var obj = JSON.stringify(json);
        var data = JSON.parse(obj);
        var jokeDisplay = document.getElementById("getOtherJoke");
        for (var i = 0; i < data.value.length; i++) {
          quotes.push(data.value[i].quote);
        };
      });

    $("#getMessage").on("click", function() {
      $(".main").html= (quotes[5].content);
    });
  });