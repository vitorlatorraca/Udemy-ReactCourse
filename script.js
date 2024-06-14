var peso;
var altura;
var imc;
var resultado;

function calcular(event){
    event.preventDefault();
    

    peso = document.getElementById('peso').value;
    altura =document.getElementById('altura').value;

    imc = peso / (altura * altura)

    if(imc < 17){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = " <br/> Seu resultado foi" + imc + " <br/> Cuidado, voce esta muito magro!";
    }else if(imc > 17 && imc <= 18.49){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = " <br/> Seu resultado foi" + imc + " <br/> Voce ta magro!";
    }else if(imc > 18.5 && imc <= 24.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = " <br/> Seu resultado foi" + imc + " <br/> Voce ta na media!";
    }

}