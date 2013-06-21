window.ReservationsModel = Backbone.Model.extend({
  defaults:{
    config:{
      header:{
        left:'prev',
        center:'title',
        right:'next'
      }
    }
  },
  initialize:function(attributes){
    if(attributes){
      _.extend( attributes.config, this.defaults.config);
    }
   
  }

});

window.ReservationsView = Backbone.View.extend({
  class: 'calendar',
  model: ReservationsModel,
  events: {

  },
  

  initialize: function() {
    _.bindAll(this,'render');
  },

  render: function() {
    $(this.el).fullCalendar(
      this.model.get('config')
    );

  }

});
