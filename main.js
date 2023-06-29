const posClick = document.getElementById('jogoVelha')
const elementoJogador = document.querySelector('p#elementoJogador')
const btnLimpar = document.getElementById('limpar')

btnLimpar.addEventListener('click',limpar)
posClick.addEventListener('click', pegarClick)

let jogador = 1

//função que captura o click do mouse
function pegarClick(evento){
    const posicao = evento.target.id
    if(!verificarMarcado(posicao)){
        let jogadorVez = verificarJogador(jogador)
        marcarPosicao(jogadorVez,posicao)
        colocarClassPlayer(posicao,jogador)
        trocarJogador()
        verificarGanhador(posicao)
    } else {
        alert('Local já marcado')
    }
}

//função que verificar qual é o jogador da vez
function verificarJogador(jogador){
    if(jogador == 1){
        return 1
    } else if (jogador == 2){
        return 2
    }
}

//função que faz a troca entre os jogadores
function trocarJogador(){
    if (jogador == 1){
        jogador = 2
    } else if (jogador == 2){
        jogador = 1
    }
}

//função que marca X ou O na tabuleiro
function marcarPosicao(jogadorVez,posicao){
    if(jogador == 1){
        document.getElementById(posicao).textContent = 'X'
    } else if (jogador == 2){
        document.getElementById(posicao).textContent = 'O'
    }
}

//Função de adiciona Classe player 1 ou player 2 quando é marcada a posição
function colocarClassPlayer(posicao, jogador){
    const posClass = document.querySelector(`button#${posicao}`)
    if(jogador == 1){
        posClass.classList.add('player1')
    } else if (jogador == 2){
        posClass.classList.add('player2')
    }
}

//Função de verifica se o local ja foi marcado
function verificarMarcado(posicao){
    const posMarcado = document.querySelector(`button#${posicao}`)
    if(posMarcado.textContent == 'X' || posMarcado.textContent == 'O'){
        return true
    } else {
        return false
    }
}

//Função que verifica quando um jogador ganha ou se é velha
function verificarGanhador(posicao){
    const pos1 = document.getElementById('pos1')
    const pos2 = document.getElementById('pos2')
    const pos3 = document.getElementById('pos3')
    const pos4 = document.getElementById('pos4')
    const pos5 = document.getElementById('pos5')
    const pos6 = document.getElementById('pos6')
    const pos7 = document.getElementById('pos7')
    const pos8 = document.getElementById('pos8')
    const pos9 = document.getElementById('pos9')
    let ganhou = false

    if(!ganhou){
        if(pos1.textContent == 'X' && pos2.textContent == 'X' && pos3.textContent == 'X'){
            alert('JOGADOR 1 GANHOU!')
            ganhou = true
        } else if (pos4.textContent == 'X' && pos5.textContent == 'X' && pos6.textContent == 'X'){
            alert('JOGADOR 1 GANHOU!')
            ganhou = true
        } else if (pos7.textContent == 'X' && pos8.textContent == 'X' && pos9.textContent == 'X'){
            alert('JOGADOR 1 GANHOU!')
            ganhou = true
        } else if (pos4.textContent == 'X' && pos5.textContent == 'X' && pos6.textContent == 'X'){
            alert('JOGADOR 1 GANHOU!')
            ganhou = true
        } else if (pos1.textContent == 'X' && pos4.textContent == 'X' && pos7.textContent == 'X'){
            alert('JOGADOR 1 GANHOU!')
            ganhou = true
        } else if (pos4.textContent == 'X' && pos5.textContent == 'X' && pos6.textContent == 'X'){
            alert('JOGADOR 1 GANHOU!')
            ganhou = true
        } else if (pos2.textContent == 'X' && pos5.textContent == 'X' && pos8.textContent == 'X'){
            alert('JOGADOR 1 GANHOU!')
            ganhou = true
        } else if (pos3.textContent == 'X' && pos6.textContent == 'X' && pos9.textContent == 'X'){
            alert('JOGADOR 1 GANHOU!')
            ganhou = true
        } else if (pos1.textContent == 'X' && pos5.textContent == 'X' && pos9.textContent == 'X'){
            alert('JOGADOR 1 GANHOU!')
            ganhou = true
        } else if (pos3.textContent == 'X' && pos5.textContent == 'X' && pos7.textContent == 'X'){
            alert('JOGADOR 1 GANHOU!')
            ganhou = true
        } else if(pos1.textContent == 'O' && pos2.textContent == 'O' && pos3.textContent == 'O'){
            alert('JOGADOR 2 GANHOU!')
            ganhou = true
        } else if (pos4.textContent == 'O' && pos5.textContent == 'O' && pos6.textContent == 'O'){
            alert('JOGADOR 2 GANHOU!')
            ganhou = true
        } else if (pos7.textContent == 'O' && pos8.textContent == 'O' && pos9.textContent == 'O'){
            alert('JOGADOR 2 GANHOU!')
            ganhou = true
        } else if (pos4.textContent == 'O' && pos5.textContent == 'O' && pos6.textContent == 'O'){
            alert('JOGADOR 2 GANHOU!')
            ganhou = true
        } else if (pos1.textContent == 'O' && pos4.textContent == 'O' && pos7.textContent == 'O'){
            alert('JOGADOR 2 GANHOU!')
            ganhou = true
        } else if (pos4.textContent == 'O' && pos5.textContent == 'O' && pos6.textContent == 'O'){
            alert('JOGADOR 2 GANHOU!')
            ganhou = true
        } else if (pos2.textContent == 'O' && pos5.textContent == 'O' && pos8.textContent == 'O'){
            alert('JOGADOR 2 GANHOU!')
            ganhou = true
        } else if (pos3.textContent == 'O' && pos6.textContent == 'O' && pos9.textContent == 'O'){
            alert('JOGADOR 2 GANHOU!')
            ganhou = true
        } else if (pos1.textContent == 'O' && pos5.textContent == 'O' && pos9.textContent == 'O'){
            alert('JOGADOR 2 GANHOU!')
            ganhou = true
        } else if (pos3.textContent == 'O' && pos5.textContent == 'O' && pos7.textContent == 'O'){
            alert('JOGADOR 2 GANHOU!')
            ganhou = true
        } else if((pos1.textContent == 'X' || pos1.textContent == 'O') && (pos2.textContent == 'X' || pos2.textContent == 'O') && (pos3.textContent == 'X' || pos3.textContent == 'O') && (pos4.textContent == 'X' || pos4.textContent == 'O') && (pos5.textContent == 'X' || pos5.textContent == 'O') && (pos6.textContent == 'X' || pos6.textContent == 'O') && (pos7.textContent == 'X' || pos7.textContent == 'O') && (pos8.textContent == 'X' || pos8.textContent == 'O') && (pos9.textContent == 'X' || pos9.textContent == 'O') && ganhou == false){
            alert('DEU VELHA!')
        }
    }
}

//Função que reinicia o jogo.
function limpar(){
    window.location.reload()
}