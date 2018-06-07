$(document).ready(function(){
    $("#base64").hide();
});


function encode(){
    var text_string=document.getElementById("textstring").value;
    $("#base64").show();
    document.getElementById("base64").value=btoa(text_string);
}


function decode(){
    var text_string=document.getElementById("textstring").value;
    $("#base64").show();
    document.getElementById("base64").value=atob(text_string);
}


function clearall(){
    document.getElementById("textstring").value="";
    document.getElementById("base64").value="";
    $("#base64").hide();
}