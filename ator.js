//ator
let yAtor = 366;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;
let vidas = 3;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
        yAtor -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
        if(podeSeMover()){
            yAtor += 3;
        }
    }
}

function verificaColisao(){
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
      if (colisao){
        voltaAtorPosicaoInicial();
        somDaColisao.play();
        if(meusPontos > 0){
            meusPontos --;
        }
        if(vidas > 0){
            vidas --;
        }
      }
    }
}

function voltaAtorPosicaoInicial(){
    yAtor = 366;
}

function podeSeMover(){
    return yAtor < 366;
}

function incluiPontos(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60))
    text(meusPontos, width / 5, 27);
}

function marcaPonto(){
    if (yAtor < 15){
      meusPontos += 1;
      somDoPonto.play();
      voltaAtorPosicaoInicial();
      
    }
}

function desenhaVidas() {
    for (let i = 0; i < vidas; i++) {
        image(imagemCoracao, 400 + i * 20, 5, 30, 30); // Desenha os corações em linha
    }
}
