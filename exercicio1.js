// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
// Constantes de query para facilitar alterações.
const resultIdQuery = '#resultado';
const m1IdQuery = '#massa1';
const m2IdQuery = '#massa2';
const distanceIdQuery = '#distancia';
const calculateButtonIdQuery = '#calcular';
const universalGravityConstant = 6.67e-11;

const proccessGravitationLawResult = () => {
    let resultEl = document.querySelector(resultIdQuery);
    let m1 = document.querySelector(m1IdQuery).value;
    let m2 = document.querySelector(m2IdQuery).value;
    let distance = document.querySelector(distanceIdQuery).value;
    //let gravity = parseFloat(document.querySelector('#constante').value);
    resultEl.value = (universalGravityConstant*m1*m2)/(distance**2);
}

let calculateButtonEl = document.querySelector(calculateButtonIdQuery);
calculateButtonEl.addEventListener('click', proccessGravitationLawResult)