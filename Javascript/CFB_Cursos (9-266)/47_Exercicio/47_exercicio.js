// Pegando os botoes
const btn_soma = document.querySelector("#btn_soma");
const btn_subt = document.querySelector("#btn_subt");
const btn_mult = document.querySelector("#btn_mult");
const btn_divi = document.querySelector("#btn_divi");

const valores = [
document.querySelector("#valor1").value,
document.querySelector("#valor2").value
]

let ress = document.querySelector("#ress");

const op = [
    (a,b) => {
        const somando = Number(a) + Number(b);
        console.log(ress);
        ress.textContent = `A somas de ${a} + ${b} = ${somando}`;
    },
    (a,b) => {

    },
    (a,b) => {

    },
    (a,b) => {

    }
]



// Adicionaodo os eventos 
btn_soma.addEventListener("click", (evento)=>{
    op[0](...valores)
});
btn_subt.addEventListener("click", op[1]);
btn_mult.addEventListener("click", op[2]);
btn_divi.addEventListener("click", op[3]);
