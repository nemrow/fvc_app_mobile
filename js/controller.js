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
  },

  segmentedButtonsConfig: function () {
    var labels = []
    for (i=0; i < Model.schedule.length; i++) {
      labels.push(Model.schedule[i].day_of_week);
    }
    var segmentedOptions = {
      labels : labels,
      selected: 1
    };
    return segmentedOptions;
  },

  loadUserDataSuccess: function (data) {
    Model.schedule = data.schedule;
    Controller.loadSchedule();
  },

  activateSchedule: function () {
    var segmentedOptions = {
      labels : Controller.segmentedButtonsConfig().labels,
      selected: Controller.segmentedButtonsConfig().selected
    };
    var newSegmented = $.UICreateSegmented(segmentedOptions);
    $('#segmentedPanel').append(newSegmented);
    $('.segmented').UIPanelToggle('#toggle-panels',function(){$.noop;});
  },

  loadSchedule: function () {
    var context = {schedule: Model.schedule};
    View.schedulePageContainer.append(Template.indiEvent(context));
    Controller.activateSchedule();
  }
};