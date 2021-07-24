let num = document.getElementById('number')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function inNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (inNumber(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `valor ${num.value} adicionado`
    lista.appendChild(item)
    res.innerHTML = ''
  } else {
    window.alert('Valor inválido ou ja encontrado na lista.')
  }

  num.value = ''
  num.focus()
}
function finalizar() {
  if (valores.length == 0) {
    window.alert('Adicione valores antes de finalizar')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    for (let pos in valores) {
      if (valores[pos] > maior) maior = valores[pos]
      if (valores[pos] < menor) menor = valores[pos]
    }
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
  }
}
