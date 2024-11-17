let jogoAtivo = true;

function setup() {
    createCanvas(500, 400);
    somDaTrilha.loop();

    // Inicializa o tempo
    tempoInicial = millis();
}

function draw() {
    if (jogoAtivo) {
        // Calcula o tempo restante
        tempoRestante = max(0, duracao - (millis() - tempoInicial));

        background(imagemDaEstrada);

        // Enquanto o tempo não acaba, o jogo roda normalmente
        mostraAtor();
        mostraCarro();
        movimentaCaro();
        movimentaAtor();
        voltaPosicaoInicialDoCarro();
        verificaColisao();
        incluiPontos();
        marcaPonto();
        incluiTemporizador();
        desenhaVidas();

        // Verifica se o tempo acabou
        if (tempoRestante === 0 || vidas === 0) {
            jogoAtivo = false; // Alterar estado do jogo
        }
    } else {
        // Exibe a tela de fim de jogo
        telaFimDeJogo();
    }
}

