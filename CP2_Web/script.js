let texto = document.getElementById('texto');

function comecar() {
    let qtd_convidados = prompt('Quantas pessoas serão convidadas ?');
    let media = prompt('Quantos ml os convidados beberão em média ?');
    calcular(qtd_convidados, media);
    console.log(cal);
    texto.innerHTML = `Você precisará de ${cal} ml`;
    return(cal);
}

function calcular(conv, med) {
    cal = Math. ceil(conv * med);
}

function calcularGarrafas() {
    let precoVinho1 = 100;
    let mlVinho1 = 750;

    let precoVinho2 = 130;
    let mlVinho2 = 1500;

    let calVinho1 = Math.ceil(cal / mlVinho1);
    let calVinho2 = Math.ceil(cal / mlVinho2);

    texto.innerHTML = `<p>Você precisará de ${calVinho1} garrafas do vinho 1 com ${mlVinho1} ml, no valor total de R$${calVinho1 * precoVinho1}.</p><p>Ou ${calVinho2} garrafas do vinho 2 com ${mlVinho2/1000} L, no valor total de R$${calVinho2 * precoVinho2}</p><p>Para os ${cal} ml totais.</p>`;
}
