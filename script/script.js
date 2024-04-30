let entrar = document.getElementById("in");
let formentrar = document.getElementById("log");
let registrar = document.getElementById("up");
let formregistrar = document.getElementById("cadastro");


entrar.addEventListener("click", function () {
    formentrar.classList.add("troca");
    formregistrar.classList.add("troca1");
})

registrar.addEventListener("click", function () {
    formentrar.classList.remove("troca");
    formregistrar.classList.remove("troca1");
})
