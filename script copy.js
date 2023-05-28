const casas = document.querySelectorAll('.casa')
const pontosX = document.querySelector('.pontosX')
const pontosO = document.querySelector('.pontosO')
const pontosV = document.querySelector('.pontosV')
const jogador = document.querySelector('.jogada')

let marcador = "X"
let listO = []
let listX = []
let listV = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
let vitoria = 0
let vitoriasX = 0
let vitoriasO = 0
let vitoriasV = 0

casas.forEach((item, index) =>{
    item.addEventListener('click', () =>{
        marcarCasa(item, index)
    })
})

function marcarCasa(event, index){
    if(event.innerText == ""){

        event.innerText = marcador

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

        verificarGanhador()
        verificarEmpate()
        
    }
}

function verificarGanhador(){

    if(listX.length >= 3){
        listV.forEach(item => {
            vitoria = 0

            listX.forEach(escolha =>{
                if(escolha == item[0]) vitoria = vitoria + 1
                if(escolha == item[1]) vitoria = vitoria + 1
                if(escolha == item[2]) vitoria = vitoria + 1 
            })

            if(vitoria == 3){
                escreverVitoria("X")
                resetarGame()
            }
        })
    }

    if(listO.length >= 3){
        listV.forEach(item => {
            vitoria = 0

            listO.forEach(escolha =>{
                if(escolha == item[0]) vitoria = vitoria + 1
                if(escolha == item[1]) vitoria = vitoria + 1
                if(escolha == item[2]) vitoria = vitoria + 1 
            })

            if(vitoria == 3){
                escreverVitoria("O")
                resetarGame()
            }
        })
    }
}

function resetarGame(){
    vitoria = 0
    listO = []
    listX = []
    casas.forEach(item =>{
        item.innerText = ''
    })
}

function verificarEmpate(){
    if(listX.length == 5 || listO.length == 5){
        resetarGame()
        escreverVitoria("V")
    }
}

function escreverVitoria(ganhador){
    if(ganhador == "X"){
        vitoriasX++
        pontosX.innerText = vitoriasX
    }else if(ganhador == "O"){
        vitoriasO++
        pontosO.innerText = vitoriasO
    }else{
        vitoriasV++
        pontosV.innerText = vitoriasV
    }
}

function mostrarJogador(marcador){
    jogador.innerText = marcador
}

mostrarJogador(marcador)