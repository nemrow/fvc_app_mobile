var Template = {
  indiEvent: Handlebars.compile($('#indi-event-sheet-template').html()),

  indiEventPage: Handlebars.compile($('#indi-event-page-template').html()),

  indiEventPages: function () {
    var html = ""
    for (var day=0; day < Model.schedule.length; day++) {
      for (var event=0; event < Model.schedule[day].events.length; event++) {
        html += Template.indiEventPage({event: Model.schedule[day].events[event]});
      };
    };
    return html
  }
};