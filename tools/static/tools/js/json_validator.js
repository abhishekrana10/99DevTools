$(document).ready(function(){
    $("#valid_json").hide();
    $("#invalid_json").hide();
});

function json_validate(){
    var json_string = $("#json_string").val();
    if ("" == json_string) {
        return;
    }
    try {
        var json_obj = JSON.parse(json_string);
        json_string = JSON.stringify(json_obj, null, 4);
        $("#valid_json").show();
        $("#invalid_json").hide();
        $("#json_string").val(json_string);
        $("#s_msg").html("Valid JSON");
    } catch (e) {
        $("#valid_json").hide();
        $("#invalid_json").show();
        $("#e_msg").html(e.toString());
    }
}

function flatten(){
    var json_string = $("#json_string").val();
    if ("" == json_string) {
        return;
    }
    try {
        var json_obj = JSON.parse(json_string);
        json_string = JSON.stringify(json_obj);
        $("#valid_json").show();
        $("#invalid_json").hide();
        $("#json_string").val(json_string);
        $("#s_msg").html("Valid JSON");
    } catch (e) {
        $("#valid_json").hide();
        $("#invalid_json").show();
        $("#e_msg").html(e.toString());
    }
}

function sample_json() {
    var json_string = '{"glossary":{"title":"example glossary","GlossDiv":{"title":"S","GlossList":{"GlossEntry":{"ID":"SGML","SortAs":"SGML","GlossTerm":"Standard Generalized Markup Language","Acronym":"SGML","Abbrev":"ISO 8879:1986","GlossDef":{"para":"A meta-markup language, used to create markup languages such as DocBook.","GlossSeeAlso":["GML","XML"]},"GlossSee":"markup"}}}}}';
    var json_obj = JSON.parse(json_string);
    json_string = JSON.stringify(json_obj, null, 4);
    $("#valid_json").show();
    $("#invalid_json").hide();
    $("#json_string").val(json_string);
    $("#s_msg").html("Valid JSON");
}