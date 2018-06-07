$(document).ready(function(){
    var time_now = new Date();
    document.getElementById("date_output").innerHTML = time_now;
    epoch_now = time_now.getTime()
    $("#epochtime").val(Math.floor(epoch_now/1000));
});


function epoch_to_date(){
    var time_input = $("#epochtime").val();
    var d = new Date(time_input*1000);
    document.getElementById("date_output").innerHTML = d;
}