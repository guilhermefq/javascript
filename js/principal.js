var titulo = document.querySelector(".titulo");
titulo.textContent = "Karoline Nutricionista";


var trPaciente = document.querySelector('#primeiro-paciente');

var tdPeso = trPaciente.querySelector('.info-peso');
var peso = tdPeso.textContent;

var tdAltura = trPaciente.querySelector('.info-altura');
var altura = tdAltura.textContent;

var tdImc = trPaciente.querySelector(".info-imc");

pesoEhValido = true;
alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
}

if (altura <= 0 || altura >= 3.00 ){
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
}

if (pesoEhValido && alturaEhValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}




