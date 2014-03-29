Handlebars.registerHelper('time', function(date) {
  date = new Date(date)
  time = Time.timeFormatted(date)
  return time
});