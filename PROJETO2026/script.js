let agendamentos = [];

const botao = document.getElementById("btnAgendar");
const modal = document.getElementById("modal");
const fechar = document.getElementById("fechar");
const form = document.getElementById("formAgendamento");
const mensagemForm = document.getElementById("mensagemForm");

botao.addEventListener("click", function() {
    modal.style.display = "flex";
});

fechar.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const servico = document.getElementById("servico").value;

    if (nome === "" || telefone === "" || servico === "") {
        mensagemForm.style.color = "red";
        mensagemForm.textContent = "Preencha todos os campos!";
        return;
    }

  const novoAgendamento = {
    nome,
    telefone,
    servico
};

agendamentos.push(novoAgendamento);

console.log(agendamentos);

mensagemForm.style.color = "green";
mensagemForm.textContent = "Agendamento salvo com sucesso!";

form.reset();
});