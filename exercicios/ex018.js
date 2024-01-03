let num = [85, 9, 3, 6, 3]
num[3] = 80
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} elementos`)

for (n in num) {
    console.log(`O numero da posição ${n} é ${num[n]}`)
}