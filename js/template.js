var Template = {
  indiEvent: Handlebars.compile($('#indi-event-sheet-template').html()),

  indiEventPage: Handlebars.compile($('#indi-event-page-template').html()),

  indiEventPages: function () {
    var html = ""
    for (i=0; i < Model.events.length; i++) {
      html += Template.indiEventPage({event: Model.events[i]})
    };
    return html
  }
};