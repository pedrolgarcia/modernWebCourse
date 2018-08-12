function comecarJogo() {
    const jogo = document.querySelector('div[wm-flappy]');
    slider();
}

function criandoObstaculo(jogo) {
    const canoCima = document.createElement('div');
    const canoBaixo = document.createElement('div');
    const canoCimaCorpo = document.createElement('div');
    const canoCimaPonta = document.createElement('div');
    const canoBaixoCorpo = document.createElement('div');
    const canoBaixoPonta = document.createElement('div');

    canoCima.classList.add('cano', 'cima');
    canoCimaCorpo.classList.add('corpo');
    canoCimaPonta.classList.add('ponta');
    canoBaixo.classList.add('cano', 'baixo');
    canoBaixoCorpo.classList.add('corpo');
    canoBaixoPonta.classList.add('ponta');

    canoCima.appendChild(canoCimaCorpo);
    canoCima.appendChild(canoCimaPonta);
    canoBaixo.appendChild(canoBaixoPonta);
    canoBaixo.appendChild(canoBaixoCorpo);

    espacoObstaculo(canoCima, canoBaixo);

    jogo.appendChild(canoCima);
    jogo.appendChild(canoBaixo);
}

function espacoObstaculo(canoCima, canoBaixo) {
    let alturaCima = Math.floor((Math.random() * 300) + 1);
    let alturaBaixo = 400 - (alturaCima + 100);

    canoCima.style.height = `${alturaCima}px`;
    canoBaixo.style.height = `${alturaBaixo}px`;
}


comecarJogo();