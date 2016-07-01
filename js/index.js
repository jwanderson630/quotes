var quoteNum = 0;
var hue = "";
//Selects random quote number
var genNum = function() {
  quoteNum = Math.floor((Math.random() * 102) + 1);
};
//Selects random background color
var genColor = function() {
  hue = 'rgb(' + (Math.floor((200) * Math.random())) + ',' + (Math.floor((200) * Math.random())) + ',' + (Math.floor((200) * Math.random())) + ')';
  $("body, .get-quote ").css("background-color", hue);
    $(".quote, .author").css("color", hue);
};

genColor();
genNum();

//Gets quote
$("#quote-btn").on("click", function() {
  
$.getJSON("https://raw.githubusercontent.com/yoej262/sketch-pad/master/quotes.json", function(data) {

    $(".quote").html("</p> \"" + data.quotes[quoteNum].quote + "\"</p>");
    $(".author").html("</p> - " + data.quotes[quoteNum].author + "</p>");
    $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&text=\"" + data.quotes[quoteNum].quote + "\"" + " - " + data.quotes[quoteNum].author );

    genColor();

    genNum();

  });
});