
const textTimer = document.getElementById("text_timer")
const area_click = document.getElementById('area_click')
const btn_voltar = document.getElementById("btn_voltar")
var tempos = []


btn_voltar.addEventListener('click',toResults)
area_click.addEventListener('click',countQuestion)



function toResults(){

     
    
    localStorage.setItem("dados",tempos)
    location.href = "./pages/results.html"
}



async function countQuestion(){

    
    tempos.push(tempo)
    tempo = 0
    sec = 0
    console.log(tempos)


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
        icon: 'success',
        title: 'Pergunta Registrada!'
      })
}


// ==========  TIMER  ============
var tempo = 0
var sec = 0
const timer = setInterval(function(){
    
    tempo = tempo + 0.01

    let unidade = ''

    
    if(tempo > 60){ 

        let min = tempo / 60 + ""   
        tempoStr = min[0] + ":" + (tempo % 60).toFixed(0)
        unidade = ''

    }else{
        tempoStr = tempo.toFixed(2)
        unidade = 's'
    } 
    textTimer.innerText = tempoStr + unidade
    console.log(tempo % 60)
 
}, 10)
// ================================

