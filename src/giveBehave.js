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
document.getElementById("sqrt").addEventListener("click", function () { añadirValores("sqrt(") });
document.getElementById("raiz_n").addEventListener("click", function () { añadirValores("raiz_n(") });
document.getElementById("logab").addEventListener("click", function () { añadirValores("log(") });
document.getElementById("pi").addEventListener("click", function () { añadirValores("pi") });
document.getElementById("e").addEventListener("click", function () { añadirValores("e") });
document.getElementById("phi").addEventListener("click", function () { añadirValores("phi") });
document.getElementById("i").addEventListener("click", function () { añadirValores("i") });
document.getElementById("sin").addEventListener("click", function () { añadirValores("sen(") });
document.getElementById("cos").addEventListener("click", function () { añadirValores("cos(") });
document.getElementById("tan").addEventListener("click", function () { añadirValores("tan(") });
document.getElementById("hiper").addEventListener("click", function () { añadirValores("sinh(") });
document.getElementById("asin").addEventListener("click", function () { añadirValores("asin(") });
document.getElementById("acos").addEventListener("click", function () { añadirValores("acos(") });
document.getElementById("atan").addEventListener("click", function () { añadirValores("atan(") });
document.getElementById("ahip").addEventListener("click", function () { añadirValores("asinh(") });
document.getElementById("ans").addEventListener("click", function () { ponerAns() });

document.getElementById("screen").addEventListener("input", function (event) { 
    if (texto == "ERROR" || texto == "FUERA DEL DOMINIO") {
        texto = "";
        screen.value = texto;
    }
    var newTexto = event.target.value; 
    texto = newTexto;
 });

 document.getElementById("cleanHistory").addEventListener("click", function () {
    localStorage.clear(historial);

    limpiarHistorial();
})

addEventListener("keypress", (event) => {
    let key = event['key'];
    
    if (key == "Enter") {
        calcular();
    }else if ((key == "C" || key == "c") && shift) {
        limpiarscreen();
    }
    
});