const casas = document.querySelectorAll('.casa')
const pontosX = document.querySelector('.pontosX')
const pontosO = document.querySelector('.pontosO')
const pontosV = document.querySelector('.pontosV')
const jogador = document.querySelector('.jogada')
const resetarButton = document.querySelector('.buttonResetar')
const novoJogoButton = document.querySelector('.novoJogo')
const atualVencedor = document.querySelector('h3 span')

let marcador = "X"
let listO = []
let listX = []
let listV = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
let vitoria = 0
let vitoriasX = 0
let vitoriasO = 0
let vitoriasV = 0
let isVencedor = false
let jogoAberto = true

resetarButton.addEventListener("click", resetarGeral)

casas.forEach((item, index) =>{
    item.addEventListener('click', () =>{
        marcarCasa(item, index)
    })
})

function marcarCasa(event, index){
    if(event.innerText == "" && jogoAberto){
        event.innerText = marcador

        trocarJogador(index)
        verificarGanhador()
        verificarEmpate()
        
    }
}

function trocarJogador(index){
    if(marcador == "X"){
        listX.push(index)
        marcador = "O"
        mostrarJogador(marcador)
    } 
    else {
        listO.push(index)
        marcador = "X"
        mostrarJogador(marcador)
    }
}

function verificarGanhador(){

    if(listX.length >= 3){
        listV.forEach(item => {
            vitoria = 0

            listX.forEach(escolha =>{
                if(escolha == item[0]) vitoria++
                if(escolha == item[1]) vitoria++
                if(escolha == item[2]) vitoria++ 
            })

            if(vitoria == 3){
                escreverVitoria("X")
                fecharJogo()
                isVencedor = true
            }
        })
    }

    if(listO.length >= 3){
        listV.forEach(item => {
            vitoria = 0

            listO.forEach(escolha =>{
                if(escolha == item[1]) vitoria++
                if(escolha == item[2]) vitoria++ 
                if(escolha == item[0]) vitoria++
            })

            if(vitoria == 3){
                escreverVitoria("O")
                fecharJogo()
                isVencedor = true
            }
        })
    }
}

function resetarGame(){
    vitoria = 0
    listO = []
    listX = []
    isVencedor = false
    casas.forEach(item =>{
        item.innerText = ''
    })
}

function verificarEmpate(){
    if((listX.length == 5 || listO.length == 5) && !isVencedor){
        escreverVitoria("V")
        fecharJogo()
    }
}

function escreverVitoria(ganhador){
    if(ganhador == "X"){
        vitoriasX++
        pontosX.innerText = vitoriasX
        atualVencedor.innerText = "X"
    }else if(ganhador == "O"){
        vitoriasO++
        pontosO.innerText = vitoriasO
        atualVencedor.innerText = "O"
    }else{
        vitoriasV++
        pontosV.innerText = vitoriasV
        atualVencedor.innerText = "V"
    }
}

function resetarGeral(){
    vitoriasO = 0
    pontosO.innerText = vitoriasO
    vitoriasV = 0 
    pontosV.innerText = vitoriasV
    vitoriasX = 0
    pontosX.innerText = vitoriasX
    marcador = "X"
    mostrarJogador(marcador)
    novoJogoButton.style.backgroundColor = "transparent"
    jogoAberto = true
    atualVencedor.innerText = ""
    resetarGame()
}

function mostrarJogador(marcador){
    jogador.innerText = marcador
}

function fecharJogo(){
    jogoAberto = false
    novoJogoButton.style.backgroundColor = "rgb(60,156,222)"
}

function abrirJogo(){
    atualVencedor.innerText = ""
    jogoAberto = true
    novoJogoButton.style.backgroundColor = "transparent"
    resetarGame()
}

novoJogoButton.addEventListener('click', abrirJogo)

mostrarJogador(marcador)