function carregar(){
    document.getElementById('msg')
    var data = new Date()
    var horas = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    msg.innerHTML = `Agora são ${horas}:${min}:${seg}`
    if (horas >= 0 && horas <= 12){
        msg.innerHTML = 'Bom dia'
        document.body.style.background = '#e2cd9f'
    } else if (horas > 12 && horas < 18){
        msg.innerHTML = 'Boa tarde'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML = 'Boa noite'
        document.body.style.background = '#515154'
    }
}