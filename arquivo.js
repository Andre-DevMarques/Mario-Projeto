let formulario = document.querySelector(".pedidos");
let fundo = document.querySelector(".fundo-input");

const pedidos = () => {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    fundo.style.visibility = "visible";
};

const esconder = () => {
    formulario.style.left = "-300%";
    formulario.style.transform = "translateX(0)";
    fundo.style.visibility = "hidden";
};
