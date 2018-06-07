$(document).ready(function(){
    $("#valid_json_js_msg").hide();
    $("#invalid_json_js_msg").hide();
});



function clearall(){
    $("#jsonarea").val("");
    $("#xmlarea").val("");
    $("#invalid_xml").hide();
    $("#valid_json_js_msg").hide();
    $("#invalid_json_js_msg").hide();
}


function json_validate(){
    var json_string = $("#jsonarea").val();
    if ("" == json_string) {
        return;
    }
    try {
        var json_obj = JSON.parse(json_string);
        json_string = JSON.stringify(json_obj, null, 4);
        $("#jsonarea").val(json_string);
        $("#valid_json_js_msg").show();
        $("#invalid_json_js_msg").hide();

    } catch (e) {
        $("#valid_json_js_msg").hide();
        $("#invalid_json_js_msg").show();
    }
}
