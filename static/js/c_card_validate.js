function ccvalidate(){
    var x=document.getElementById("cc_number").value ;
    var valid_button=document.getElementById("valid");
    var invalid_button=document.getElementById("invalid");
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(x)){
        invalid_button.style.display="none";
        valid_button.style.display="none";
        alert("please Enter 16 digit Credit Card Number!");
    }
    else
        return luhnCheck(x, valid_button, invalid_button);
}


function luhnCheck(val, valid_button, invalid_button){
    var sum = 0;
    for (var i = 0; i < val.length; i++){
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0){
            intVal *= 2;
            if (intVal > 9){
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    if((sum % 10) == 0){
        invalid_button.style.display="none";
        valid_button.style.display="block";
    }
    else{
        valid_button.style.display="none";
        invalid_button.style.display="block";
    }
}