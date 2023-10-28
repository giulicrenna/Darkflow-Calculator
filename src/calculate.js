var screen = document.getElementById("screen");
var texto = "";
screen.value = texto;

function roundToTwoDecimalPlaces(num) {
    return Math.round(num * 10000000) / 10000000;
}

function añadirValores(valor) {
    if(texto == "ERROR"){
        texto = "";
    }

    texto += valor;
    screen.value = texto;
}

function limpiarscreen() {
    texto = "";
    screen.value = texto;
}

function calcular() {
    texto = texto.replace(/raiz_n/g, "nthRoot");
    try {
        texto = math.evaluate(texto);
        texto = roundToTwoDecimalPlaces(texto);
        screen.value = texto;
        console.log(texto);
    } catch (error) {
        texto = "ERROR";
        screen.value = texto;
    }

}

document.getElementById("0").addEventListener("click", function () { añadirValores("0") });
document.getElementById("1").addEventListener("click", function () { añadirValores("1") });
document.getElementById("2").addEventListener("click", function () { añadirValores("2") });
document.getElementById("3").addEventListener("click", function () { añadirValores("3") });
document.getElementById("4").addEventListener("click", function () { añadirValores("4") });
document.getElementById("5").addEventListener("click", function () { añadirValores("5") });
document.getElementById("6").addEventListener("click", function () { añadirValores("6") });
document.getElementById("7").addEventListener("click", function () { añadirValores("7") });
document.getElementById("8").addEventListener("click", function () { añadirValores("8") });
document.getElementById("9").addEventListener("click", function () { añadirValores("9") });
document.getElementById("+").addEventListener("click", function () { añadirValores("+") });
document.getElementById("-").addEventListener("click", function () { añadirValores("-") });
document.getElementById("*").addEventListener("click", function () { añadirValores("*") });
document.getElementById("/").addEventListener("click", function () { añadirValores("/") });
document.getElementById("C").addEventListener("click", function () { limpiarscreen() });
document.getElementById("=").addEventListener("click", function () { calcular() });
document.getElementById("(").addEventListener("click", function () { añadirValores("(") });
document.getElementById(")").addEventListener("click", function () { añadirValores(")") });
document.getElementById("punto").addEventListener("click", function () { añadirValores(".") });
document.getElementById("coma").addEventListener("click", function () { añadirValores(",") });
// Avanzada

document.getElementById("factorial").addEventListener("click", function () { añadirValores("!") });
document.getElementById("power").addEventListener("click", function () { añadirValores("^") });
document.getElementById("sqrt").addEventListener("click", function () { añadirValores("sqrt") });
document.getElementById("raiz_n").addEventListener("click", function () { añadirValores("raiz_n(") });
document.getElementById("logab").addEventListener("click", function () { añadirValores("log(") });
document.getElementById("pi").addEventListener("click", function () { añadirValores("pi") });
document.getElementById("e").addEventListener("click", function () { añadirValores("e") });
document.getElementById("phi").addEventListener("click", function () { añadirValores("phi") });
document.getElementById("i").addEventListener("click", function () { añadirValores("i") });
document.getElementById("sin").addEventListener("click", function () { añadirValores("sin(") });
document.getElementById("cos").addEventListener("click", function () { añadirValores("cos(") });
document.getElementById("tan").addEventListener("click", function () { añadirValores("tan(") });
document.getElementById("hiper").addEventListener("click", function () { añadirValores("sinh(") });
document.getElementById("asin").addEventListener("click", function () { añadirValores("asin(") });
document.getElementById("acos").addEventListener("click", function () { añadirValores("acos(") });
document.getElementById("atan").addEventListener("click", function () { añadirValores("atan(") });
document.getElementById("ahip").addEventListener("click", function () { añadirValores("asinh(") });
