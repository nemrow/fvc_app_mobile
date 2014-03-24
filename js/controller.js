var Controller = {
  init: function () {
    if (Model.userKey()) {
      console.log('userKey')
      Controller.loadUserData();
    } else {
      console.log('no user key')
      View.showLoginPage();
    }
  },

  loadUserData: function () {
    Controller.loadSchedule();
  },

  loadSchedule: function () {
    var context = {eventData: [1,2,3]};
    View.schedulePageContainer.append(Template.indiEvent(context));
  }
};