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
});