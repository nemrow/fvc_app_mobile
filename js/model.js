var Model = {
  storage: window.localStorage,

  userKey: function () {
    return Model.storage.getItem("userKey");
  },
    
  setUserKey: function (userKey) {
    Model.storage.setItem("userKey", userKey);
  },

  todaysDate: function () {
    var todays_date = new Date;
    todays_date.setHours(0,0,0,0);
    return todays_date;
  },

  firstDayOfWeekDate: function () {
    var firstDayOfWeekDate = new Date(Model.schedule[0].date);
    firstDayOfWeekDate.setHours(0,0,0,0);
    return firstDayOfWeekDate;
  }
};