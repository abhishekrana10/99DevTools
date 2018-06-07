$(document).ready(function(){
    $("#valid_card").hide();
    $("#invalid_card").hide();
    $("#card_menu").hide();
    $("#valid_cc").hide();

});

function ccvalidate(){
    var x = $("#cc_number").val(); //document.getElementById("cc_number").value ;
    if ("" == x){
        return;
    }
    var valid_card=document.getElementById("valid_card");
    var invalid_card=document.getElementById("invalid_card");
    var regex = new RegExp("^[0-9]{4,19}$");
    if (!regex.test(x)){
        $("#valid_card").hide();
        $("#invalid_card").show();
    }
    else {
        var check_validity = luhnCheck(x);
        if(check_validity){
            $("#valid_card").show();
            $("#invalid_card").hide();
        }
        else{
            $("#valid_card").hide();
            $("#invalid_card").show();
        }
    }
}


function luhnCheck(x){
    var sum = 0;
    for (var i = 0; i < x.length; i++){
        var intVal = parseInt(x.substr(i, 1));
        if (i % 2 == 0){
            intVal *= 2;
            if (intVal > 9){
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    if((sum % 10) == 0){
        return true;
    }
    else{
        return false;
    }
}


function show_creditcard_menu(){
        $("#card_menu").show();
}

function master_card(){
    var master_pre = [
        "22", "23", "24", "25", "26", "27",
        "51", "52", "53", "54", "55"
    ];
    var random_prefix = (master_pre[Math.floor(Math.random()*master_pre.length)]).toString();
    console.log(random_prefix);
    var master_suffix = (Math.floor(10000000000000 + Math.random() * 90000000000000)).toString();
    console.log(master_suffix);
    var mastercard_num = random_prefix.concat(master_suffix);
    console.log(mastercard_num);
    var check = luhnCheck(mastercard_num);
    if(check){
        $("#valid_cc").show();
        document.getElementById("valid_cc").innerHTML = mastercard_num;

    }
    else{
        master_card();
    }
}


function visa_card(){

    var visa_suffix_length = [];
    var visa_length_13 = (Math.floor(100000000000 + Math.random() * 900000000000)).toString();
    visa_suffix_length.push(visa_length_13);
    var visa_length_16 = (Math.floor(100000000000000 + Math.random() * 900000000000000)).toString();
    visa_suffix_length.push(visa_length_16);
    var visa_length_19 = (Math.floor(100000000000000000 + Math.random() * 900000000000000000)).toString();
    visa_suffix_length.push(visa_length_19);
    var selected_visa_suffix_length = (visa_suffix_length[Math.floor(Math.random()*visa_suffix_length.length)]).toString();
    var visacard_num = "4".concat(selected_visa_suffix_length);
    var check = luhnCheck(visacard_num);
    if(check){
        $("#valid_cc").show();
        document.getElementById("valid_cc").innerHTML = visacard_num;

    }
    else{
        visa_card();
    }

}


function luhn_number(){
    luhn_length = [
        "4","5","6","7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"
    ]
    var s_luhn_length = (luhn_length[Math.floor(Math.random()*luhn_length.length)]).toString();
    var g_luhn_num = (Math.floor(Math.pow(10,s_luhn_length-1) + Math.random() * 9*Math.pow(10,s_luhn_length-1))).toString();
    var check = luhnCheck(g_luhn_num);
    if(check){
        $("#valid_cc").show();
        document.getElementById("valid_cc").innerHTML = g_luhn_num;

    }
    else{
        visa_card();
    }
}
