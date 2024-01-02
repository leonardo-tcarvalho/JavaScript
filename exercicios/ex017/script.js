function Gerar() {
    let numero = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (numero.value.length == 0) {
        window.alert('Erro, Digite um numero')
    } else {
        let n = Number(numero.value)
        let c = 1
        tab.innerHTML = ''
        for (c = 1; c <= 10; c += 1) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }
}