var btnBuscarPaciente = document.querySelector("#buscar-paciente")

btnBuscarPaciente.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        console.log(pacientes);
        console.log(typeof pacientes);

        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
        });

    });

    xhr.send();
});