$(document).ready(function(){

    $("#decimal_out").keypress(function(e){
        var keyCode = e.which;
        if ( (keyCode < 48 || keyCode > 57) && (keyCode!=8) && (keyCode!=45)){
            return false;
        }
    });

    $("#binary_out").keypress(function(e){
        var keyCode = e.which;
        if ( (keyCode < 48 || keyCode > 49) && (keyCode!=8) && (keyCode!=45)){
            return false;
        }
    });

    $("#octal_out").keypress(function(e){
        var keyCode = e.which;
        if ( (keyCode < 48 || keyCode > 55) && (keyCode!=8) && (keyCode!=45)){
            return false;
        }
    });

    $("#hex_out").keypress(function(e){
        var keyCode = e.which;
        if ( (keyCode < 48 || keyCode > 57) && (keyCode!=8) && (keyCode < 97 || keyCode > 102) && (keyCode < 65 || keyCode > 70) && (keyCode!=45)){
            return false;
        }
    });
});

function convert(){
    var dec_num=document.getElementById("decimal_out").value;
    var bin_num=document.getElementById("binary_out").value;
    var oct_num=document.getElementById("octal_out").value;
    var hex_num=document.getElementById("hex_out").value;
    if(dec_num ){
        dec_convert();
    }

    else if(bin_num){
        bin_convert();
    }

    else if(oct_num){
        oct_convert();
    }

    else if(hex_num){
        hex_convert();
    }
}


function dec_convert(){
    var dec_num=document.getElementById("decimal_out").value;
    document.getElementById("binary_out").value=parseInt(dec_num, 10).toString(2);
    document.getElementById("octal_out").value=parseInt(dec_num, 10).toString(8);
    document.getElementById("hex_out").value=parseInt(dec_num, 10).toString(16);
    if($("#binary_out").val()=="NaN"){
        $("#binary_out").val("");
        $("#octal_out").val("");
        $("#hex_out").val("");
    }
}


function bin_convert(){
    var bin_num=document.getElementById("binary_out").value;
    document.getElementById("decimal_out").value=parseInt(bin_num, 2).toString(10);
    document.getElementById("octal_out").value=parseInt(bin_num, 2).toString(8);
    document.getElementById("hex_out").value=parseInt(bin_num, 2).toString(16);
    if($("#decimal_out").val()=="NaN"){
        $("#decimal_out").val("");
        $("#octal_out").val("");
        $("#hex_out").val("");
    }
}



function oct_convert(){
    var oct_num=document.getElementById("octal_out").value;
    document.getElementById("decimal_out").value=parseInt(oct_num, 8).toString(10);
    document.getElementById("binary_out").value=parseInt(oct_num, 8).toString(2);
    document.getElementById("hex_out").value=parseInt(oct_num, 8).toString(16);
    if($("#decimal_out").val()=="NaN"){
        $("#decimal_out").val("");
        $("#binary_out").val("");
        $("#hex_out").val("");
    }
}


function hex_convert(){
    var hex_num=document.getElementById("hex_out").value;
    document.getElementById("decimal_out").value=parseInt(hex_num, 16).toString(10);
    document.getElementById("binary_out").value=parseInt(hex_num, 16).toString(2);
    document.getElementById("octal_out").value=parseInt(hex_num, 16).toString(8);
    if($("#decimal_out").val()=="NaN"){
        $("#decimal_out").val("");
        $("#octal_out").val("");
        $("#binary_out").val("");
    }
}


function clearall(){
    document.getElementById("decimal_out").value="";
    document.getElementById("binary_out").value="";
    document.getElementById("octal_out").value="";
    document.getElementById("hex_out").value="";
}





