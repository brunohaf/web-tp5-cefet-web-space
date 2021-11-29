// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const expandClassName = 'expandido';
const expandRetractButtonClassQuery = '.botao-expandir-retrair';
let expandRetractButtonEls = document.querySelectorAll(expandRetractButtonClassQuery);

const expandRetract = (evt) => {
    let targetButton = evt.currentTarget;
    targetButton.parentNode.classList.toggle(expandClassName)
}

expandRetractButtonEls.forEach((button) => {
    button.addEventListener('click', expandRetract)
})
