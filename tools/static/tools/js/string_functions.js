$(document).ready(function(){
    $("#tinker_output").hide();
    $("#findword").hide();
    $("#word_present").hide();
    $("#word_absent").hide();

});


function to_lowercase(){
    var string_input = $("#user_string").val();
    $("#tinker_output").show();
    $("#tinker_output").val(string_input.toLowerCase());
}


function to_uppercase(){
    var string_input = $("#user_string").val();
    $("#tinker_output").show();
    $("#tinker_output").val(string_input.toUpperCase());
}


function reverse_string(){
    var string_input = $("#user_string").val();
    $("#tinker_output").show();
    $("#tinker_output").val(string_input.split("").reverse().join(""));
}


function reverse_words_string(){
    var string_input = $("#user_string").val();
    $("#tinker_output").show();
    $("#tinker_output").val(string_input.split("").reverse().join("").split(" ").reverse().join(" "));
}

function clearall(){
    $("#user_string").val("");
    $("#tinker_output").val("");
    $("#tinker_output").hide();
    $("#findword").hide();
    $("#word_present").hide();
    $("#word_absent").hide();

}


function find_length(){
    var n = $("#user_string").val();
    $("#tinker_output").show();
    $("#tinker_output").val(n.length);
}

