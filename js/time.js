var Time = {
  timeFormatted: function (dateString) {
    var date = new Date(dateString);
    var hour = Time.hourFormatted(date);
    var minute = Time.minuteFormatted(date.getMinutes());
    var period = (date.getHours() < 12 ? "AM" : "PM")
    return hour + ":" + minute + " " + period
  },

  hourFormatted: function (date) {
    var hour = date.getHours() % 12
    return hour == 0 ? 12 : hour
  },

  minuteFormatted: function (minute) {
    var minute = minute.toString()
    return minute.length < 2 ? ("0" + minute) : minute;
  }
};