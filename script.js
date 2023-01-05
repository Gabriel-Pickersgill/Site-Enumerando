
let num = document.querySelector('input#txtn')
let lista =  document.querySelector('select#sel')
let res = document.querySelector('div#res')
let valores = []

/* função para verificar se o input é um número
e se ele está dentro das regras estipuladas */
function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

/* função para verificar se o número ja se encontra na lista */
function inList(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}


/* essa função adiciona o número do primeiro input na lista.
Para fazer isso, ela primeiro salva o número na mémoria
e depois cria uma lista visual dentro do <select> para visualizar
os números*/ 
function adicionar(){
    if (isNumero(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' //quando um elemento é adicionado, o resultado é limpado

    }else{
        window.alert('[ERRO] digite um valor válido.')
    }

/*depois de digitar o número e clicar no botão, o valor digitado volta a ser vazio
mantém o foco do indicador de digitação na caixa do input number*/
num.value = ''
num.focus()
}

function finalizar(){
    if(valores.length == 0){
        console.log('[ERRO] Digite valores para começar')
    }else{
        let tot = valores.length

        //analisar os valores um por um e verificar qual é o maior e menor:
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            media = (soma / tot)
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, você cadastrou ${tot} números</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informadofoi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>` 
        res.innerHTML += `<p>A media entre os elementos é ${media}</p>`

    }
}