(function() {
  var giphyAPIKey = "aARVN3UFC5LgJpeVNDKMxkzjN2B4Zu9n";
  var ul = $("#ul");
  var searchInput = $("#searchInput");
  var submitButton = $("#submitButton");

  function getGifs() {
    console.log("coucou");
    $.get(
      "http://api.giphy.com/v1/gifs/search",
      {
        api_key: giphyAPIKey,
        q: searchInput.val()
      },
      function(data) {
        displayGifs(data.data);
        console.log(data);
      }
    );
  }

  function displayGifs(gifs) {
      console.log('tarte');
    gifs.forEach(function(gif) {
      var li = $('<li class="list-inline-item"></li>');
      var img = $('<img src="' + gif.images.original.url + '" >');
      li.append(img);
      ul.append(li);
    });
  }

  submitButton.click(getGifs);
})();
