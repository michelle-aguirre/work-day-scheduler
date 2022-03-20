
$( "#currentDay" ).text( moment().format('MMMM Do YYYY, h:mm:ss a') );
$( ".saveBtn" ).on( "click", function(  ) {
var hour = $(this).parent().attr('id');
var text = $(this).sibling('.description');
localStorage.setItem(hour, text);
  });
$('#hour-8 .description').val(localStorage.getItem ('hour-8'));