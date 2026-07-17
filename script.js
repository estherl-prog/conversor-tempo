function converter() {

    const valor = parseFloat(document.getElementById("valor").value);
    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;
    const resultado = document.getElementById("resultado");

    if (isNaN(valor)) {
        resultado.innerHTML = "Digite um valor válido.";
        return;
    }

    // Converter para segundos
    let segundos = 0;

    if (origem == "segundo") {
        segundos = valor;
    } else if (origem == "minuto") {
        segundos = valor * 60;
    } else if (origem == "hora") {
        segundos = valor * 3600;
    } else if (origem == "dia") {
        segundos = valor * 86400;
    }

    // Converter para a unidade desejada
    let resposta = 0;

    if (destino == "segundo") {
        resposta = segundos;
    } else if (destino == "minuto") {
        resposta = segundos / 60;
    } else if (destino == "hora") {
        resposta = segundos / 3600;
    } else if (destino == "dia") {
        resposta = segundos / 86400;
    }

    resultado.innerHTML = `
        <h3>Resultado</h3>
        <p>${valor} ${origem}(s) equivalem a:</p>
        <h2>${resposta} ${destino}(s)</h2>
    `;
}