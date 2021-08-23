const calcular = document.getElementById("botao");



function imc(){
    const nome = document.getElementById("nome").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const resultado = document.getElementById("resultado");

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorImc = (peso/(altura*altura)).toFixed(2);

        let res ='';
        resultado.textContent = valorImc;

        if(valorImc < 18.5){
            res = 'Abaixo do peso';
        }else if(valorImc < 25){
          res = 'Peso ideal';
        }else if(valorImc < 30){
          res = 'Um pouco acima do peso';
        }else if(valorImc < 35){
            res = 'Obesidade grau I';
        }else if(valorImc < 40){
            res = 'Obesidade grau II';
        }else{
            res = 'Obesidade grau III, se cuida gordão!!';
        }
        resultado.textContent = `${nome}, seu IMC é ${valorImc} e você está ${res}`;
    } else{
        resultado.textContent = 'Preencha os dados';
    }
    
   
}

calcular.addEventListener('click', imc);