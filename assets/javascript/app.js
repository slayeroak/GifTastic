$(document).ready(function() {
    var gifSearches = [];

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + car + "zJKwX8G4J6UjTjSQpTBVFFDt8Wj0nX6U";
    // console.log(queryURL);
        $.ajax({url: queryURL, method: 'GET'})
        .done(function(response) {
            // grabs the data
            var results = response.data;
            console.log(results);
        }
});