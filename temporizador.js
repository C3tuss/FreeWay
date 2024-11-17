let tempoInicial;
let duracao = 40 * 1000; // 40 segundos em milissegundos
let tempoRestante;

// Função para mostrar o temporizador
function incluiTemporizador() {
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60));
    text(`Tempo: ${ceil(tempoRestante / 1000)}s`, width / 2, 27);
}
// Função pra exibir a pontuação final do jogo
function score(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60));
    text(`SCORE: ${meusPontos}`, width/2, 250);
}

// Função para exibir a tela de fim de jogo
function telaFimDeJogo() {

    //Mostra os carros de fundo
    background(imagemDaEstrada);
    mostraCarro();
    movimentaCaro();
    voltaPosicaoInicialDoCarro();

    // Sobreposição preta translúcida
    fill(0, 0, 0, 200); // Preto com transparência
    rect(0, 0, width, height);

    // Mensagem de fim de jogo
    textAlign(CENTER);
    textSize(40);
    fill(color(255, 0, 0));
    text("Fim de Jogo!", width / 2, height / 2);
    score();

    // Exibe o botão de replay
    botaoReplay.show();

}

function reiniciarJogo() {
    jogoAtivo = true;
    tempoInicial = millis();
    tempoRestante = duracao;
    vidas = 3;
    meusPontos = 0;
    botaoReplay.hide(); // Esconde o botão após o replay
}