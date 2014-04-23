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
      url: "http://localhost:3000/api/v1/load_data",
      success: Controller.loadUserDataSuccess,
      dataType: 'json'
    });
  },

  createSegmentedLabels: function () {
    var labels = []
    for (i=0; i < Model.schedule.length; i++) {
      labels.push(Model.schedule[i].day);
    }
    return labels
  },

  segmentedButtonsConfig: function () {
    var segmentedOptions = {
      labels : Controller.createSegmentedLabels(),
      selected: Controller.weekdayOffsetIndex()
    };
    return segmentedOptions;
  },

  dateDifference: function (date1, date2) {
    var timeDiff = Math.abs(date1.getTime() - date2.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays
  },

  weekdayOffsetIndex: function () {
    var todaysDate = Model.todaysDate();
    var firstDayOfWeekDate = Model. firstDayOfWeekDate();
    diff = Controller.dateDifference(todaysDate, firstDayOfWeekDate)
    return diff
  },

  loadUserDataSuccess: function (data) {
    Model.schedule = JSON.parse(data.schedule);
    Controller.initPage();
    Controller.loadSchedule();
  },

  initPage: function () {
    // Initialize navigation
    $('body').on('singletap doubletap', '.go-to-navigation', function() {
      $.UIGoToArticle('#navigation');
    });
  },

  segmentedOptions: function () {
    return {
      labels : Controller.segmentedButtonsConfig().labels,
      selected: Controller.segmentedButtonsConfig().selected
    }
  },

  activateSchedule: function () {
    var segmentedOptions = Controller.segmentedOptions();
    var newSegmented = $.UICreateSegmented(segmentedOptions);
    $('#segmentedPanelSchedule').append(newSegmented);
    $('.segmented').UIPanelToggle('#toggle-panels',function(){$.noop;});
  },

  loadSchedule: function () {
    View.injectSchedule();
    Controller.activateSchedule();
  }
};