function generate_password() {
    var pass_length = $("#passwordlength").val();
    var small = 'abcdefghijklmnopqrstuvwxyz';
    var capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numeric = '0123456789';
    var special_char = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var password_gen_string = 'abcdefghijklmnopqrstuvwxyz';
    if(document.getElementById("capital").checked){
        var password_gen_string = password_gen_string.concat(capital);
    }
    if(document.getElementById("numbers").checked){
        var password_gen_string = password_gen_string.concat(numeric);
    }
    if(document.getElementById("special").checked){
        var password_gen_string = password_gen_string.concat(special_char);
    }

    var final_password = "";


    while (final_password.length < pass_length) {
        final_password += password_gen_string[Math.floor(Math.random() * password_gen_string.length)];
    }

    document.getElementById("password").innerHTML=final_password;

}


