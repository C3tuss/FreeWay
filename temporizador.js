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

// Função para exibir a tela de fim de jogo
function telaFimDeJogo() {
    background(0, 0, 0, 200); // Fundo semi-transparente
    textAlign(CENTER);
    textSize(40);
    fill(color(255, 0, 0));
    text("Fim de Jogo!", width / 2, height / 2);
}