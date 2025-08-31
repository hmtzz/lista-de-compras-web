function calcularEntrega() {
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
                  "Quinta-feira", "Sexta-feira", "Sábado"];
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                   "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const hoje = new Date();
    const diasParaEntrega = 7; // você pode mudar isso
    const entrega = new Date(hoje);
    entrega.setDate(entrega.getDate() + diasParaEntrega);

    const diaSemana = dias[entrega.getDay()];
    const dia = entrega.getDate();
    const mes = meses[entrega.getMonth()];
    const ano = entrega.getFullYear();

    const dataEntregaExtenso = `${diaSemana}, ${dia} de ${mes} de ${ano}`;

    const el = document.getElementById("dataEntrega");
    el.textContent = `Sua compra chegará em: ${dataEntregaExtenso}`;
}