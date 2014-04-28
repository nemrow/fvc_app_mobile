var View = {
  schedulePageContainer: $('.full-week-schedule-container'),

  injectSchedule: function () {
    View.schedulePageContainer.append(Template.indiEvent({schedule: Model.schedule}));
    View.body().innerHTML += (Template.indiEventPages());
  },

  body: function () {
    return document.getElementsByTagName('body')[0]
  }
};