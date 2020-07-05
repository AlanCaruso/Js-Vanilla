// SCOPING https://nosislab.atlassian.net/browse/HYP-1095

//scope global
var nombre = "Diego";
//scope local
function fun() {
    var apellido = "De Granada";
    return nombre + " " + apellido
}

fun();


