//imagens e sons do jogo

//imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarros;
let imagemCoracao;

//sons
let somDaTrilha;
let somDaColisao;
let somDoPonto;


function preload(){
    imagemDaEstrada = loadImage("Imagens/estrada.png");
    imagemDoAtor = loadImage("Imagens/ator-1.png");
    imagemCarro1 = loadImage("Imagens/carro-1.png");
    imagemCarro2 = loadImage("Imagens/carro-2.png");
    imagemCarro3 = loadImage("Imagens/carro-3.png");
    imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
    imagemCoracao = loadImage("Imagens/coracao.png");

    somDaTrilha = loadSound("sons/trilha.mp3");
    somDaColisao = loadSound("sons/colidiu.mp3");
    somDoPonto= loadSound("sons/pontos.wav");
}

