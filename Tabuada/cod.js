function clicar(){
    var n = Number(document.getElementById('numer').value)
    var textnumber = document.getElementById('text')
    textnumber.innerHTML = ''
    var i = 1
    while (i <= 10){
        textnumber.innerHTML += `${n} X ${i} = ${n * i}\n`
        i++
    }
}