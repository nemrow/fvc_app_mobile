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
    $.ajax({
      url: "http://localhost:3000/api/v1/load_data?login_code=1234",
      success: Controller.loadUserDataSuccess,
      dataType: 'json'
    });
    Controller.loadSchedule();
  },

  loadUserDataSuccess: function (data) {
    console.log(data)
  },

  loadSchedule: function () {
    var context = {eventData: [1,2,3]};
    View.schedulePageContainer.append(Template.indiEvent(context));
  }
};