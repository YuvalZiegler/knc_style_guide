$().ready(function(){
  
  // CHECKBOXES AND RADIO BUTTONS 
  $('input[type="radio"]').prettyCheckable();
  $('input[type="checkbox"]').prettyCheckable();
  // SELECT BOXES
  $('select').dropkick({startSpeed:0});
  
  // TABS
  $('.tabs').find('a').on('click', function(e){switchTabs(e)});
  function switchTabs(e){

    console.log(this);
    console.log(e);
  }
});