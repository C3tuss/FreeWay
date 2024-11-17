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
let somDaTrilha2;
let somDaColisao;
let somDoPonto;
let somDoGrito;


function preload(){
    //Carregar imagens
    imagemDaEstrada = loadImage("Imagens/estrada.png");
    imagemDoAtor = loadImage("Imagens/ator-1.png");
    imagemCarro1 = loadImage("Imagens/carro-1.png");
    imagemCarro2 = loadImage("Imagens/carro-2.png");
    imagemCarro3 = loadImage("Imagens/carro-3.png");
    imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
    imagemCoracao = loadImage("Imagens/coracao.png");

    // Carregar sons
    somDaTrilha = loadSound("sons/trilha2.mp3");
    somDaColisao = loadSound("sons/explosao.mp3");
    somDoPonto = loadSound("sons/pontos.wav");
    somDoGrito = loadSound("sons/grito.mp3");

    
}

