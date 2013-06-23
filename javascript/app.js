// SAMPLE CALENDAR DATA
var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();
  
var dates = [
    {
      title: 'Tentative',
      start: new Date(y, m, 1),
      className: 'tentative'
    },
    {
      title: 'Long Tentative Event',
      start: new Date(y, m, d-5),
      end: new Date(y, m, d-2),
      className: 'tentative'
    },
    {
      id: 999,
      title: 'Available',
      start: new Date(y, m, d-11),
      allDay: true,
      className: 'available'
    },
    {
      id: 999,
      title: 'Available',
      start: new Date(y, m, d+3),
      allDay: true,
      className: 'available'
    },
    
    {
      title: 'Booked',
      start: new Date(y, m, d, 13, 0),
      end: new Date(y, m, d+2, 12, 0),
      allDay: false,
      className: 'booked'
    },
 
    {
      title: 'With Link',
      start: new Date(y, m, 28),
      end: new Date(y, m, 29),
      url: 'http://google.com/',
      className: 'booked'
    }
];

////////////////////////////////////////////////////////////

$().ready(function(){
  
  // CHECKBOXES AND RADIO BUTTONS 
  $('input[type="radio"]').prettyCheckable();
  $('input[type="checkbox"]').prettyCheckable();
  // SELECT BOXES
  $('select').dropkick({startSpeed:0});
  
  // TABS
  $('.tabs').find('a').on('click', function(e){switchTabs(e);});
  function switchTabs(e){
    e.preventDefault();
    var $source    = $(e.currentTarget),
        $target    = $($source.attr('href')),
        tabContent = $target[0].parentNode;
        $(tabContent).find('.active').removeClass('active');
        $($source[0].parentNode).find('.active').removeClass('active');
        $target.addClass('active');
        $source.addClass('active');
  }

  // CALENDAR
  var smallCalendarConfig  = { events:dates, editable:false, selectable:false,  titleFormat: { month: 'MMM yyyy'}};
  var fullCalendarConfig   = { events:dates, editable:true, selectable:true  };
  var Reservations      = new ReservationsView({el:$('.calendar_block')      , model:new ReservationsModel({config:fullCalendarConfig})});
  var ReservationsSmall = new ReservationsView({el:$('.small_calendar_block'), model:new ReservationsModel({config:smallCalendarConfig})});
  Reservations.render();
  ReservationsSmall.render();

  // DATE PICKER 
  $('#startDate').datepicker({
      minDate: '1',
      constrainInput: true,
      onSelect: function(date_text) {
        var date = new Date(date_text);
        date.setDate(date.getDate() + 1);
        $('#endDate').datepicker('option','minDate',date);
      }
    });
    
  $('#endDate').datepicker({
      minDate: '2',
      constrainInput: true
    });
    
    $('form.search-widget input[name="utf8"]').remove();
  

  
});