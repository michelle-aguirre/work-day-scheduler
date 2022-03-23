//jquery starter code
$(document).ready(function(){ 

    $(".saveBtn" ).on( "click", function() { 

        var text = $(this).siblings('.description').val();    
        var hour = $(this).parent().attr('id');

//local storage set up         
        localStorage.setItem(hour, text);

    });

    function checkTime(){
    var timeNow = moment().hours();

    $(".time-block" ).each(function() {
        var blockTime = parseInt($(this).attr("id").split("-")[1]);

        //To check the time and add the classes for background
        if (blockTime < timeNow) {
            $(this).addClass("past");
        }
        else if(blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}
checkTime();

var interval = setInterval(checkTime, 15000);


    //Get item from local storage if any
    $("#hour-8 .description").val(localStorage.getItem)("hour-8");
    $("#hour-9 .description").val(localStorage.getItem)("hour-9");
    $("#hour-10 .description").val(localStorage.getItem)("hour-10");
    $("#hour-11 .description").val(localStorage.getItem)("hour-11");
    $("#hour-12 .description").val(localStorage.getItem)("hour-12");
    $("#hour-13 .description").val(localStorage.getItem)("hour-13");
    $("#hour-14 .description").val(localStorage.getItem)("hour-14");
    $("#hour-15 .description").val(localStorage.getItem)("hour-15");
    $("#hour-16 .description").val(localStorage.getItem)("hour-16");


    $("#currentDay" ).text( moment().format('MMMM Do YYYY, h:mm:ss a') );


});

