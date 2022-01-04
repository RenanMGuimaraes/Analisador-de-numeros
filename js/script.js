function adicionar(){
    if(document.querySelector("#txtnum").value <= 0 ||document.querySelector("#txtnum").value > 100){
        alert("Entrada inválida, tente novamente!")
    }else{
    var item = document.createElement("option");
    item.text = document.querySelector("#txtnum").value;
    document.querySelector("#sel").appendChild(item); }

    txtnum.value = "";
    txtnum.focus();

    document.querySelector("#div-res").innerHTML = "";
    
}
    

function finalizar(){
    //Insere o valor no vetor
    var numoptions = parseFloat(document.querySelector("#sel").length);
    var vetor = [];
    for (var i = 0; i < numoptions; i++){
        vetor.push(parseFloat(document.querySelector("#sel")[i].value)); 
    }
   
    //Coloca o vetor em ordem e atribui valores
    vetor.sort(function(a,b) { return a - b; });
    console.log(vetor);
    var valormax = vetor[numoptions - 1];
    var valormin = vetor[0];

    //Soma os valores
    var soma = 0;
    for(i = 0; i< numoptions; i++){
        soma += vetor[i];
    }

    //Media dos valores
    var media = soma / numoptions;

    //Escreve no HTML
    document.querySelector("#div-res").innerHTML = `
    <p>Ao todo temos ${numoptions} números cadastrados </p>
    <p>O maior valor informado foi ${valormax} <p>
    <p>O menor valor informado foi ${valormin} </p>
    <p>Somando todos os valores temos ${soma} </p>
    <p>A média dos valores é ${media} </p>`;

    txtnum.value = "";
    txtnum.focus();

}

