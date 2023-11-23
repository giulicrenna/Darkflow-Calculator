let isLight = true
const html = document.documentElement
const switchTheme = document.getElementById('theme_switcher')
const os_default = '<svg viewBox="0 0 16 16"><path fill="currentColor" d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/></svg>'
const sun = '<svg viewBox="0 0 16 16"><path fill="currentColor" d="M8 11a3 3 0 1 1 0-6a3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>'
const moon = '<svg viewBox="0 0 16 16"><g fill="currentColor"><path d="M6 .278a.768.768 0 0 1 .08.858a7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277c.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316a.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71C0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29c0-1.167.242-2.278.681-3.286z"/><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/></g></svg>'

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
// Cálculo
document.getElementById("ddx").addEventListener("click", function () { añadirValores("d/dx(") });
document.getElementById("simplificar").addEventListener("click", function () { añadirValores("simplificar(") });
document.getElementById("fx").addEventListener("click", function () { añadirValores("f(x) =") });
document.getElementById("xVar").addEventListener("click", function () { añadirValores("x") });
document.getElementById("yVar").addEventListener("click", function () { añadirValores("y") });
document.getElementById("zVar").addEventListener("click", function () { añadirValores("z") });
document.getElementById("wVar").addEventListener("click", function () { añadirValores("w") });


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
    } else if ((key == "C" || key == "c") && shift) {
        limpiarscreen();
    }

});

document.addEventListener('DOMContentLoaded', () => {
    switchTheme.innerHTML = os_default
    html.setAttribute('data-theme', 'dark')
    switchTheme.setAttribute('data-tooltip', 'os theme')
    switchTheme.focus()
    removeTooltip(3000)
})
switchTheme.addEventListener('click', (e) => {
    e.preventDefault()
    isLight = !isLight
    html.setAttribute('data-theme', isLight ? 'light' : 'dark')
    switchTheme.innerHTML = isLight ? sun : moon
    switchTheme.setAttribute('data-tooltip', `theme ${isLight ? 'light' : 'dark'}`)
    removeTooltip()
})
const removeTooltip = (timeInt = 1750) => {
    setTimeout(() => {
        switchTheme.blur()
    }, timeInt)
}