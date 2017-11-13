var botaoAdicionar = document.querySelector("#busca-pacientes");

botaoAdicionar.addEventListener("click",function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes", true);
        
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");


        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente){
                adicionaPacientesNaTabela(paciente);
        
            });
        }else{
            erroAjax.classList.remove("invisivel");
            erroAjax.textContent = "Erro ao buscar os pacientes: " + xhr.status;
        }

        
    });

    xhr.send();    
        
});