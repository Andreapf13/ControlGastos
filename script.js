let inputInfo = { historial: [] }
localStorage.setItem("inputInfo", JSON.stringify(inputInfo))

function drawHistorial() {
    const Concept = document.getElementById("inputConcept").value;
    const Quantity = parseFloat(document.getElementById("inputQuantity").value);
    Transaction = { Conceptkey: Concept, Quantitykey: Quantity }

    // Leer inputInfo de localStorage
    const inputInfoNowRaw = localStorage.getItem('inputInfo');
    const inputInfoNow = JSON.parse(inputInfoNowRaw)
    // Anadir a inputInfo.historial tu transaccion
    inputInfoNow.historial.push(Transaction)
    // Guardar inputInfo en localStorage
    localStorage.setItem("inputInfo", JSON.stringify(inputInfoNow))
    // Pintamos el Historial con el concepto y la cantidad 
  
    //PARTE 2
    // Recorro el array Historial y con filter, filtro los valores que sean negativos y los pongo en otro array. 

    const ListaIngresos = inputInfoNow.historial.filter((objeto) => objeto.Quantitykey > 0)
    let sumaIngresos = 0
    for (let i = 0; i < ListaIngresos.length; i++) {
        sumaIngresos += ListaIngresos[i].Quantitykey
    }
    console.log("HOLA")
    console.log(ListaIngresos)

    const ListaGastos = inputInfoNow.historial.filter((objeto) => objeto.Quantitykey < 0)
    let sumaGastos = 0
    for (let i = 0; i < ListaGastos.length; i++) {
        sumaGastos += ListaGastos[i].Quantitykey
    }
    const tuAhorro = sumaIngresos + sumaGastos


    //Pintamos en Ingreso y Gastos  
    document.getElementById("numerospositivos").innerText = (`${sumaIngresos}€`)
    document.getElementById("numerosnegativos").innerText = (`${-sumaGastos}€`)
    document.getElementById("tuAhorro").innerText = (`${tuAhorro}€`)
    drawTransaction(Transaction)
}

  
function drawTransaction(Transaction){
    const TransactionParagraph= document.createElement("p")
    TransactionParagraph.innerText= `${Transaction.Conceptkey} ${Transaction.Quantitykey}€`;
    TransactionParagraph.className = "newStyle"
    document.getElementById("Historial").appendChild(TransactionParagraph)
}

function InputZeroValue() {
    const btnDelete = document.getElementById("button-add");
    const inputConceptId = document.getElementById("inputConcept");
    const inputQuantityId = document.getElementById("inputQuantity");
    inputConceptId.value = "";
    inputQuantityId.value = "";
}
function AllFunctions() {
    drawHistorial();
    InputZeroValue();
}

document.getElementById("button-add").addEventListener("click", AllFunctions)
