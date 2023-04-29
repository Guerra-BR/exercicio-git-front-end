const form = document.getElementById('formulario')
let linhas = ''
let erro = false
let numero = ''
const inputNumeroContato = document.getElementById('input-telefone')
const inputNomeContato = document.getElementById('input-nome')

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    document.querySelector('.nota').style.display = 'none'
    
    ajustaTelefone()
    if(erro == false){
        adicionaLinha()
        atualizaContatos()
    }
    
})

inputNumeroContato.addEventListener('focus', function(e){
    document.querySelector('.nota').style.display = 'block'
    document.getElementById('importante').classList.remove('erro')
})

inputNomeContato.addEventListener('focus', function(e){
    document.querySelector('.nota').style.display = 'none'
    document.getElementById('importante').classList.remove('erro')
})

function adicionaLinha(){
    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}</td>`
    linha += `<td class="linha-vertical">${numero}</td>`
    linha += '</tr>'
    linhas += linha

    inputNomeContato.value = ''
    inputNumeroContato.value = ''
}

function atualizaContatos(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function ajustaTelefone(){
    let numeros = inputNumeroContato.value
    let qntCaracteres = numeros.length

    let global = ''
    let DDD = ''
    let telParte1 = ''
    let telParte2 = ''

    if(qntCaracteres == 8){
        telParte1 = numeros.substring(0, 4)
        telParte2 = numeros.substring(4)
        numero = telParte1 + "-" + telParte2
        erro = false
    }else if(qntCaracteres == 9){
        telParte1 = numeros.substring(0, 5)
        telParte2 = numeros.substring(5)
        numero = telParte1 + "-" + telParte2
        erro = false
    }else if(qntCaracteres == 10){
        telParte1 = numeros.substring(2, 6)
        telParte2 = numeros.substring(6)
        DDD = numeros.substring(0,2)
        numero = "(" + DDD + ") " + telParte1 + "-" + telParte2
        erro = false
    }else if(qntCaracteres == 11){
        telParte1 = numeros.substring(2, 7)
        telParte2 = numeros.substring(7)
        DDD = numeros.substring(0,2)
        numero = "(" + DDD + ") " + telParte1 + "-" + telParte2
        erro = false
    }else if(qntCaracteres == 12){
        telParte1 = numeros.substring(4, 8)
        telParte2 = numeros.substring(8)
        DDD = numeros.substring(2,4)
        global = numeros.substring(0,2)
        numero = "+" + global + " (" + DDD + ") " + telParte1 + "-" + telParte2
        erro = false
    }else if(qntCaracteres == 13){
        global = numeros.substring(0,2)
        telParte1 = numeros.substring(4, 9)
        telParte2 = numeros.substring(9)
        DDD = numeros.substring(2,4)
        numero = "+" + global + " (" + DDD + ") " + telParte1 + "-" + telParte2
        erro = false
    }else{
        document.querySelector('.nota').style.display = 'block'
        document.getElementById('importante').classList.add('erro')
        erro = true
    }
}