const response = localStorage.getItem('dados')

const dados = response.split(',')

var tempo_total = 0


for(let i = 0; i < dados.length;i++){
  
    tempo_total += parseFloat(dados[i])
    // transformando tudo para number
    dados[i] = parseFloat(dados[i])

} 
// definindo os numeros das questoes
var questoes = []
for(let i = 0; i < dados.length;i++){ 
    questoes.push(i+1)
} 

const total_questoes = document.getElementById("total_questoes")
const tempo_medio = document.getElementById("tempo_medio")
const mais_rapida = document.getElementById("mais_rapida")
const mais_lenta = document.getElementById("mais_lenta") 
const btn_nova_prova = document.getElementById("nova_prova")

  
if((questoes[questoes.length - 1] - 1) >= 4){ 
    total_questoes.classList.add('green')
}else{ 
    total_questoes.classList.add('red') 
}


if(tempo_total / questoes[questoes.length - 1] <= 180){ 
    tempo_medio.classList.add('green') 
}else{ 
    tempo_medio.classList.add('red')  
}


if(Math.min.apply(null, dados) <= 180){

    mais_rapida.classList.add('green') 

}else{
    mais_rapida.classList.add('red') 
}
 


if(Math.max.apply(null, dados) <= 180){

    mais_lenta.classList.add('green') 

}else{
    mais_lenta.classList.add('red') 
}



total_questoes.innerText = questoes[questoes.length - 1]

var min_media = (tempo_total / questoes[questoes.length - 1] / 60) + "";
var sec_media = (tempo_total / questoes[questoes.length - 1] % 60) < 10 ? "0"+(tempo_total / questoes[questoes.length - 1] % 60).toFixed(0): (tempo_total / questoes[questoes.length - 1] % 60).toFixed(0) 
tempo_medio.innerText = min_media[0] +":"+ sec_media +' min'

var min_rapida = (Math.min.apply(null, dados) /60) + "" 
 console.log((Math.min.apply(null, dados) % 60))
var sec_rapida = (Math.min.apply(null, dados) % 60) < 10 ? "0"+(Math.min.apply(null, dados) % 60).toFixed(0): (Math.min.apply(null, dados) % 60).toFixed(0) 

mais_rapida.innerText  =  questoes[dados.indexOf(Math.min.apply(null, dados))] + " - " +min_rapida[0]+":"+sec_rapida +" min"

var min_lenta = (Math.max.apply(null, dados) / 60) + "" 
var sec_lenta = (Math.max.apply(null, dados) % 60) < 10 ? "0"+(Math.max.apply(null, dados) % 60).toFixed(0): (Math.max.apply(null, dados) % 60).toFixed(0) 

mais_lenta.innerText  =  questoes[dados.indexOf(Math.max.apply(null, dados))] + " - " + min_lenta[0] +":"+ sec_lenta+ " min"
btn_nova_prova.addEventListener('click',new_test)

function new_test(){

    localStorage.removeItem("dados")
    location.href = "../"

}