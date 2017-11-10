var titulo = document.querySelector(".titulo");
titulo.textContent = "Karoline Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i=0;i < pacientes.length; i++) {
    //console.log(pacientes[i].textContent);

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if (!pesoEhValido) {
        tdImc.textContent = "Peso inválido!";
        pesoEhValido = false;
        //paciente.style.color = "red";
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido");
    }
    
    if (!alturaEhValida){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;
        //paciente.style.color = "red";
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }   
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);    
    return imc.toFixed(2) ;
}

function validaPeso(peso) {
    if(peso > 0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura) {
    if(altura > 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}

function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if(paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }else{
        if(!validaPeso(paciente.peso)) {
            erros.push("Peso é inválido");
        }
    }

    if(paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }else{
        if(!validaAltura(paciente.altura)) {
            erros.push("Altura é inválida");
        }        
    }

    return erros;
}


/*
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

*/


