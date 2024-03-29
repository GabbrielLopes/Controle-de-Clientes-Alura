var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);


    var erros = validaPaciente(paciente);
    console.log(erros);
    
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return; 
    }

    //  Adicionando paciente na tabela
    adicionaPacienteNaTabela(paciente);

    form.reset();

    // Apagar conteudo de dentro da UL que contem os erros
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
}); 

    function adicionaPacienteNaTabela(paciente){
        var pacienteTr = montaTr(paciente);
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
    }

    function exibeMensagensDeErro(erros) {

        

        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";
        erros.forEach(function(erro){
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
    }

    function exibeErroBuscar(erro){
        if(count >=1){
            var ul = document.querySelector("#erro-buscar-paciente");
            ul.innerHTML = "";
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        }
    }

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");  // Cria uma tr
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));   // Adiciona nomeTd dentro da Tr
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe) {
    var td = document.createElement("td");  // Cria uma  td
    td.textContent = dado;   //  Adiciona um valor para essa td
    td.classList.add(classe); // Adiciona a classe no Td
    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if(paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco.");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido!");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida!");
    }

    if(paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco.");
    }

    if(paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco.");
    }

    if(paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco.");
    }
    return erros;
}