var Controller = {
  init: function () {
    Controller.load_schedule();
  },

  load_schedule: function () {
    var context = {eventData: [1,2,3]};
    View.schedulePageContainer.append(Template.indiEvent(context));
  }
};