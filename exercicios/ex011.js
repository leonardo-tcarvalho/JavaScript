var idade = 66
var pais = 'brasil'
if (pais === 'brasil'){
    if (idade < 16 && idade > 0){
        console.log('Não vota')
    }else if(idade >= 16 && idade <= 18 || idade > 65){
        console.log('Voto opcional')
    }else if (idade >= 18 && idade <=65){
        console.log('Voto Obrigatório')
    }
}else{
    if (idade < 18 && idade > 0){
        console.log('Não vota')
    }else(
        console.log('Voto Obrigatório')
    )
}