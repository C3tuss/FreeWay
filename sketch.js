function setup(){
    createCanvas(500, 400);
    somDaTrilha.loop();
}

function draw(){
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCaro();
    movimentaAtor();
    voltaPosicaoInicialDoCarro();
    verificaColisao();
    incluiPontos();
    marcaPonto();
}



