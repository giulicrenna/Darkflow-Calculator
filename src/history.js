function checkearNulos() {
    if (localStorage.getItem('historial') == 'undefined' || localStorage.getItem('historial') == null) {
        localStorage.setItem('historial', JSON.stringify([]))
    }

    if (localStorage.getItem('theme') == 'undefined' || localStorage.getItem('theme') == null) {
        localStorage.setItem('theme', 'light')
    }
}

function getDate() {
    const now = new Date();

    const currentDate = now.toLocaleDateString();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes(); 
    const currentSeconds = now.getSeconds(); 

    const date = `${currentDate} - ${currentHour}:${currentMinutes}:${currentSeconds}`

    return date
}

function ponerSnippets() {
    checkearNulos();
    limpiarHistorial();
    let historialActual = JSON.parse(localStorage.getItem('historial'))

    let historySnipetContainer = document.getElementById("historySnipetContainer");

    historialActual.forEach(element => {
        let fecha = element.fecha;
        let op = element.operacion;
        let resultado = element.resultado;

        let newButton = document.createElement("button");
        newButton.className = "outline"

        let fechaP = document.createElement("p");
        let opP = document.createElement("p");
        let resP = document.createElement("p");

        fechaP.className = "historySnipetP";
        opP.className = "historySnipetP";
        resP.className = "historySnipetP";

        let newStrong = document.createElement("strong");

        newStrong.innerHTML = "Fecha: "
        fechaP.appendChild(newStrong);
        fechaP.innerHTML += fecha;

        newStrong.innerHTML = "Operación: "
        opP.appendChild(newStrong);
        opP.innerHTML += op;

        newStrong.innerHTML = "Resultado: "
        resP.appendChild(newStrong);
        resP.innerHTML += resultado;

        newButton.appendChild(fechaP);
        newButton.appendChild(opP);
        newButton.appendChild(resP);

        historySnipetContainer.appendChild(newButton);
    });
}

function agregarHistorial(operacion_, resultado_) {
    checkearNulos();
    limpiarHistorial();

    let historialActual = JSON.parse(localStorage.getItem('historial'))
    
    historialActual.push({
        fecha: getDate(),
        operacion: operacion_,
        resultado: resultado_
    });

    localStorage.setItem('historial', JSON.stringify(historialActual))

    let historySnipetContainer = document.getElementById("historySnipetContainer");

    historialActual.forEach(element => {
        let fecha = element.fecha;
        let op = element.operacion;
        let resultado = element.resultado;

        let newButton = document.createElement("button");
        newButton.className = "outline"

        let fechaP = document.createElement("p");
        let opP = document.createElement("p");
        let resP = document.createElement("p");

        fechaP.className = "historySnipetP";
        opP.className = "historySnipetP";
        resP.className = "historySnipetP";

        let newStrong = document.createElement("strong");

        newStrong.innerHTML = "Fecha: "
        fechaP.appendChild(newStrong);
        fechaP.innerHTML += fecha;

        newStrong.innerHTML = "Operación: "
        opP.appendChild(newStrong);
        opP.innerHTML += op;

        newStrong.innerHTML = "Resultado: "
        resP.appendChild(newStrong);
        resP.innerHTML += resultado;

        newButton.appendChild(fechaP);
        newButton.appendChild(opP);
        newButton.appendChild(resP);

        historySnipetContainer.appendChild(newButton);
    });
}

function limpiarHistorial(){
    const container = document.getElementById('historySnipetContainer');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

