var campoFiltroNome = document.querySelector("#filtrar-nome");

campoFiltroNome.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];      
            
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            var expressao = new RegExp(this.value, "i");
            
            if(expressao.test(nome)){
                paciente.classList.remove("invisivel");    
            } else {
                paciente.classList.add("invisivel");
            }
            
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});


var campoFiltroPeso = document.querySelector("#filtrar-peso");

campoFiltroPeso.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    if (campoFiltroPeso.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];      
            
            var tdPeso = paciente.querySelector(".info-peso");
            var peso = tdPeso.textContent;

            var expressao = new RegExp(campoFiltroPeso.value, "i");
            
            if(expressao.test(peso)){
                paciente.classList.remove("invisivel");    
            } else {
                paciente.classList.add("invisivel");
            }
            
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});