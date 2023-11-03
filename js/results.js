const btn_nova_prova = document.getElementById("nova_prova")
btn_nova_prova.addEventListener('click',new_test)


const response = localStorage.getItem('dados')

const dados = response.split(',')  
if(dados[0] == ""){

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'info',
        title: 'Responda alguma pergunta antes'
      })
 
}else{

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
    const tempo_total_html = document.getElementById("tempo_total")
    const mais_rapida = document.getElementById("mais_rapida")
    const mais_lenta = document.getElementById("mais_lenta") 
    
    
      
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
    
    if(tempo_total  > questoes[questoes.length-1] * 180 ){
        tempo_total_html.classList.add('red')
    }else{
        tempo_total_html.classList.add('green')
    }
     

    total_questoes.innerText = questoes[questoes.length - 1]
    
    var min_media = (tempo_total / questoes[questoes.length - 1] / 60) + "";
    var sec_media = (tempo_total / questoes[questoes.length - 1] % 60) < 10 ? "0"+(tempo_total / questoes[questoes.length - 1] % 60).toFixed(0): (tempo_total / questoes[questoes.length - 1] % 60).toFixed(0) 
    tempo_medio.innerText = min_media[0] +":"+ sec_media +' min'
    

    var hr_total =  tempo_total / 60 / 60 >= 1 ? adjustTime(tempo_total / 60 / 60) : "0"  
    
    var min_total =   tempo_total / 60 / 60 >= 1 ? (tempo_total / 60  >= 1 ? adjustTime(tempo_total / 60 % 60 ) : "0") : (tempo_total / 60  >= 1 ? adjustTime(tempo_total / 60 ) : "0")
    console.log(tempo_total)
    tempo_total_html.innerText = ((tempo_total / 60 / 60 >= 1 )? (hr_total + ":") : "") +min_total +":"+ adjustTime(tempo_total % 60)
    


    var min_rapida = (Math.min.apply(null, dados) /60) + ""  
    var sec_rapida = (Math.min.apply(null, dados) % 60) < 10 ? "0"+(Math.min.apply(null, dados) % 60).toFixed(0): (Math.min.apply(null, dados) % 60).toFixed(0) 
    
    mais_rapida.innerText  =  questoes[dados.indexOf(Math.min.apply(null, dados))] + "° - " +min_rapida[0]+":"+sec_rapida +" min"
    
    var min_lenta = (Math.max.apply(null, dados) / 60) + "" 
    var sec_lenta = (Math.max.apply(null, dados) % 60) < 10 ? "0"+(Math.max.apply(null, dados) % 60).toFixed(0): (Math.max.apply(null, dados) % 60).toFixed(0) 
    
    mais_lenta.innerText  =  questoes[dados.indexOf(Math.max.apply(null, dados))] + "° - " + min_lenta[0] +":"+ sec_lenta+ " min"
    
    
}

function new_test(){
    
    localStorage.removeItem("dados")
    location.href = "../"

}


function adjustTime(time){ 
    if(time < 10){
        time = time + ""
        time = "0"+time[0]
    }
    else{
        time = time + ""
        time = time[0] + time[1] + ""
        
    }
    return time
}