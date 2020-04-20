function calcularPreco() {
    var km = parseFloat(document.getElementById("km").value)
    var min = parseFloat(document.getElementById("min").value)
    var combustivel = parseFloat(document.getElementById("combustivel").value)
    var kmPorLitro = parseFloat(document.getElementById("kmPorLitro").value)

    var valorUber = 2+1.4*km+0.26*min
    var valorCarro = (km/kmPorLitro)*combustivel

    var resultadoFinal = document.getElementById("resultadoFinal")

    resultadoFinal.innerHTML = 'Se você usar um aplicativo, sua corrida vai custar aproximadamente R$ '+valorUber.toFixed(2).replace(".", ",")+'. Porém, se você escolher ir com o seu carro, vai gastar R$ '+valorCarro.toFixed(2).replace(".", ",")+'.'
}