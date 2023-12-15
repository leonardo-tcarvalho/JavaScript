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
            document.body.style.backgroundColor = '#b8fdff'
        } else if (idade < 18) {
            genero = 'Adolescente'
            document.body.style.backgroundColor = '#86f9fd'
        } else if (idade <= 60) {
            genero = 'Homem'
            document.body.style.backgroundColor = '#4ff9ff'
        } else if (idade > 60) {
            genero = 'Senhor'
            document.body.style.backgroundColor = '#00f7ff'
        }
        pronome = 'um'
        res.innerHTML = `A pessoa identificada é ${pronome} ${genero} de ${idade} anos.`
    } else if (sexo[1].checked) {
        if (idade >= 0 && idade < 12) {
            genero = 'Menina'
            document.body.style.backgroundColor = '#ffc0cb'
        } else if (idade < 18) {
            genero = 'Adolescente'
            document.body.style.backgroundColor = '##ff758c'
        } else if (idade <= 60) {
            genero = 'Mulher'
            document.body.style.backgroundColor = '#ff4060'
        } else if (idade > 60) {
            genero = 'Senhora'
            document.body.style.backgroundColor = '#ff002b'
        }
        pronome = 'uma'
        res.innerHTML = `A pessoa identificada é ${pronome} ${genero} de ${idade} anos.`
    }
}