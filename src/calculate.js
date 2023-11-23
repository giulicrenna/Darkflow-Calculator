var texto = "";
var ans = "";

var screen = document.getElementById("screen");
screen.value = texto;

function roundToTwoDecimalPlaces(num) {
    return Math.round(num * 10000000) / 10000000;
}

function añadirValores(valor) {
    if (texto == "ERROR" || texto == "FUERA DEL DOMINIO") {
        texto = "";
    }

    texto += valor;
    screen.value = texto;
}

function limpiarscreen() {
    if (texto != "ERROR") {
        ans = texto;
    }
    texto = "";
    screen.value = texto;
}

function ponerAns() {
    texto += ans;
    screen.value = texto;
}

function expressionGetter(text, delimiter) {
    const l = text.length;
    var gotFirst = false;
    let expression = "";

    for (let i = 0; i < l; i++) {
        const element = text[i]
        if (gotFirst) {
            expression += element;
        }

        if (element == delimiter) {
            gotFirst = true;
        }
    };

    if(delimiter == "="){
        return expression;
    }

    return expression.slice(0, -1);
}

function calcular() {
    let operacion = texto;
    texto = texto.replace(/raiz_n/g, "nthRoot");
    texto = texto.replace(/sen/g, "sin");
    texto = texto.replace(/senh/g, "sinh");
    texto = texto.replace(/asen/g, "asin");
    texto = texto.replace(/asenh/g, "asinh");

    console.log(texto);
    if (texto.indexOf("d/d") != -1) {
        var variableDeDerivacion = texto.charAt(3);
        var expresion = expressionGetter(texto, '(');
        console.log(expresion)


        try {
            texto = math.derivative(expresion, variableDeDerivacion).toString();
            screen.value = texto;
            ans = texto;
            agregarHistorial(operacion, texto);
        } catch (error) {
            texto = "ERROR";
            screen.value = texto;
            console.log(error);
        }

        return "";
    }

    else if (texto.indexOf("simplificar") != -1) {
        var expresion = expressionGetter(texto, '(');
        try {
            texto = math.simplify(expresion).toString();
            screen.value = texto;
            agregarHistorial(operacion, texto);
            ans = texto
        } catch (error) {
            texto = "ERROR";
            screen.value = texto;
            console.log(error);
        }

        return "";
    }

    else if (texto.indexOf("f(x)") != -1) {
        var expresion = expressionGetter(texto, '=');
        try {
            draw(expresion);
            screen.value = "GRAFICADO";
            agregarHistorial(operacion, "Gráfica");
            document.getElementById("plot").scrollIntoView({behavior: "smooth"});
        } catch (error) {
            texto = "ERROR";
            screen.value = texto;
            console.log(error);
        }

        return "";
    }

    else {
        try {
            texto = math.evaluate(texto);
            texto = roundToTwoDecimalPlaces(texto);

            if (isNaN(texto)) {
                texto = "FUERA DEL DOMINIO";
                screen.value = texto;
                console.log(texto);
                return ""
            }

            ans = texto;
            screen.value = texto;

            if (operacion !== texto) {
                agregarHistorial(operacion, texto);
            }
        } catch (error) {
            texto = "ERROR";
            screen.value = texto;
            console.log(error)
        }
    }
}



/*
addEventListener("keypress", (event) => {
    let key = event['key'];
    let shift = event['shiftKey']
    
    if ((key == "C" || key == "c") && shift) {
        limpiarscreen();
    } else if ((key == "x" || key == "X") && shift) {
        texto = texto.slice(0, -1);
        screen.value = texto;
    } else if (key == "Enter") {
        calcular();
    }else {
        // console.log(event);
        añadirValores(key);
    }
});
*/
