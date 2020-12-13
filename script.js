var jogEscolha = 0;
var jogPlacar = 0;
var ComEscolha = 0;
var ComPlacar = 0;
var resultado = -1;

//1.papel 2.pedra 3.tesoura
function jogar(escolha){
    jogEscolha = escolha;
    ComEscolha = Math.floor((Math.random()* (3-1 + 1)))+ 1;

    if((jogEscolha == 1) && (ComEscolha==1)){
        resultado = 0;
    }
    else if((jogEscolha == 2) && (ComEscolha==2)){
        resultado = 0;
    }
    else if((jogEscolha == 3) && (ComEscolha==3)){
        resultado = 0;
    }
    else if((jogEscolha == 1) && (ComEscolha==2)){
        resultado = 1;
    }
    else if((jogEscolha == 1) && (ComEscolha==3)){
        resultado = 2;
    }
    else if((jogEscolha == 2) && (ComEscolha==1)){
        resultado = 2;
    }
    else if((jogEscolha == 2) && (ComEscolha==3)){
        resultado = 1;
    }
    else if((jogEscolha == 3) && (ComEscolha==1)){
        resultado = 1;
    }
    else if((jogEscolha == 3) && (ComEscolha==2)){
        resultado = 2;
    }
    //remover

    document.getElementById("jog-escolha-1").classList.remove('selecionado');
    document.getElementById("com-escolha-1").classList.remove('selecionado');
    document.getElementById("jog-escolha-2").classList.remove('selecionado');
    document.getElementById("com-escolha-2").classList.remove('selecionado');
    document.getElementById("jog-escolha-3").classList.remove('selecionado');
    document.getElementById("com-escolha-3").classList.remove('selecionado');

    //adicionar

    document.getElementById("jog-escolha-" + jogEscolha).classList.add('selecionado');
    document.getElementById("com-escolha-" + ComEscolha).classList.add('selecionado');


    //vitoria e placar

    if(resultado == 0){
        document.getElementById('status').innerHTML = 'Empate';
    }

    else if(resultado == 1){
        document.getElementById('status').innerHTML = 'Jogador ganhou';
        jogPlacar++;
    }
    if(resultado == 2){
        document.getElementById('status').innerHTML = 'Computador ganhou';
        ComPlacar++;
    }

    document.getElementById('jog-placar').innerHTML = jogPlacar;
    document.getElementById('com-placar').innerHTML = ComPlacar;
}