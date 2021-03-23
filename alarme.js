
//preenchimento de variáveis que vamos precisar

var display = document.getElementById('display');
var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');
var botao = document.getElementById('botao');

var cronometroSeg;

var minutoAtual;
var segundoAtual;

var interval;


//preenchimento dos campos de escolha, o "select"

for(var a = 0; a<= 60; a++){
    minutos.innerHTML+='<option value = "'+a+'"> '+a+' </option>';
}

for(var a = 1; a <= 60; a++){
    segundos.innerHTML += '<option value= "'+a+'"> '+a+' </option>';
}


//gerando looping
botao.addEventListener('click', function(){
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;

    interval = setInterval(function(){
        segundoAtual--;
        if(segundoAtual<=0){
            if(minutoAtual>0){
            minutoAtual--;
            segundoAtual=59;
        }else{
            document.getElementById("som").play();
            clearInterval(interval);
        }
    }
    display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;
    },1000);
})

