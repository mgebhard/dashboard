// Generated by CoffeeScript 1.6.1

/* About
*/


/* License and Warranty
*/


(function() {

  $(function() {
    return (function() {
      $.get('/weather', function(data) {
        var current;
        current = data.current;
        $('#weather .temp').html("" + current.temp + "&deg;F");
        $('#weather .description').html(current.description);
        return $('#weather img').attr('src', current.icon);
      });
      return setTimeout(arguments.callee, 120000);
    })();
  });

}).call(this);
