function adicionarItem() {
            const input = document.getElementById("itemInput");
            const valor = input.value.trim();

            if (valor !== "") {
                const lista = document.getElementById("lista");
                const li = document.createElement("li");
                li.textContent = valor;
                lista.appendChild(li);

                input.value = ""; // Limpa o campo
                input.focus();    // Coloca o cursor de volta
            }
        }