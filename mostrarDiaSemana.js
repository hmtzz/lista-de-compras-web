function mostrarDataAtualPorExtenso() {
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
                  "Quinta-feira", "Sexta-feira", "Sábado"];
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                   "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const hoje = new Date();
    const diaSemana = dias[hoje.getDay()];
    const dia = hoje.getDate();
    const mes = meses[hoje.getMonth()];
    const ano = hoje.getFullYear();

    const dataPorExtenso = `${diaSemana}, ${dia} de ${mes} de ${ano}`;

    const el = document.getElementById("dataAtual");
    if (el) {
        el.textContent = dataPorExtenso;
    }
}

// Executa quando o script carregar
mostrarDataAtualPorExtenso();