// Generated by CoffeeScript 1.3.3
(function() {

  $(function() {
    var getWeather;
    getWeather = function() {
      $.get('/weather', function(data) {
        var current, forecast, today, tomorrow;
        current = data.current;
        today = data.today;
        tomorrow = data.tomorrow;
        $('#current .temp').html("" + current.temp + "&deg;F");
        $('#current .description').html(current.description);
        forecast = function(data, id) {
          var key, param, value, _results;
          _results = [];
          for (key in data) {
            value = data[key];
            param = "#" + id + " ." + key;
            _results.push($(param).html(value));
          }
          return _results;
        };
        forecast(today, 'today');
        return forecast(tomorrow, 'tomorrow');
      });
      return setTimeout(getWeather, 120000);
    };
    return getWeather();
  });

}).call(this);
