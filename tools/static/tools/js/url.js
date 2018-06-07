$(document).ready(function(){
    $("#output_url").hide();
});


function encodeurl(){
    var input = $("#input_url").val();
    $("#output_url").show();
    $("#output_url").val(encodeURIComponent(input));
}


function decodeurl(){
    var input = $("#input_url").val();
    $("#output_url").show();
    $("#output_url").val(decodeURIComponent(input));
}

function clearall(){
    $("#input_url").val("");
    $("#output_url").val("");
    $("#output_url").hide();
}