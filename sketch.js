let jogoAtivo = true;

function setup() {
    createCanvas(500, 400);
    // Ajustar volume
    somDaTrilha.setVolume(0.1);
    somDaTrilha.loop();

    // Inicializa o tempo
    tempoInicial = millis();

    // Cria o botão de replay
    botaoReplay = createButton('Replay');
    botaoReplay.position(width / 2 - 50, 290);
    botaoReplay.size(100, 40);
    botaoReplay.mousePressed(reiniciarJogo); // Define a ação quando pressionado
    botaoReplay.hide(); // Esconde o botão no início do jogo
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

