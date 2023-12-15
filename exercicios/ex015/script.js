function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var idade = ano - fano.value
    var sexo = document.getElementsByName('radsex')
    var genero = ''
    var pronome = ''
    if (fano.value <= 1900) {
        alert('Insira uma data valida')
    } else if (fano.value > ano) {
        alert('Insira uma data valida')
    }
    if (sexo[0].checked) {
        if (idade >= 0 && idade < 12) {
            genero = 'Menino'
        } else if (idade < 18) {
            genero = 'Adolescente'
        } else if (idade <= 60) {
            genero = 'Homem'
        } else if (idade > 60) {
            genero = 'Senhor'
        }
        pronome = 'um'
        res.innerHTML = `A pessoa identificada é ${pronome} ${genero} de ${idade} anos.`
    } else if (sexo[1].checked) {
        if (idade >= 0 && idade < 12) {
            genero = 'Menina'
        } else if (idade < 18) {
            genero = 'Adolescente'
        } else if (idade <= 60) {
            genero = 'Mulher'
        } else if (idade > 60) {
            genero = 'Senhora'
        }
        pronome = 'uma'
        res.innerHTML = `A pessoa identificada é ${pronome} ${genero} de ${idade} anos.`
    }
}