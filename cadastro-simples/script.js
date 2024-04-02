
let agora = new Date
let ano = agora.getFullYear()

let nome = document.getElementById('nomeid')
let nasc = document.getElementById('nasc')
let resp2 = document.getElementById('resp2')
let resp1 = document.getElementById('resp1')
let seletor = document.getElementById('selectid')
let nomes = []
let idades = []


function cada(){
    if(isidade(nasc.value) && innome(nome.value.trim())){

        let idade = ano - nasc.value
        
        nomes.push(nome.value)
        idades.push(idade)
        
        let item = document.createElement('option')
        item.text = `Nome " ${nome.value}" cadastrado!`
        seletor.appendChild(item)

        
        nome.value = ''
        nasc.value = ''
        nome.focus()
        
    }  
    
    else{

    }
    
}

function innome(nom){
    if(nom.length == 0){
        return alert('Nome não adicionado!')
    } else{
        return true
    }
}


function isidade(nasciment){
    if(Number(nasciment) < 2024 && Number(nasciment) >= 1400 && Number(nasciment) != 0){
        return true
    }else{
        return alert('Ano de nascimento não valido ou adicionado!')
    }
}

function finish(){
    let tot = nomes.length

    resp2.innerHTML = `<p>Total de cadastros: ${tot}</p>`
    resp2.innerHTML += `<p>Cadastrados: </p>`
    for(let pos in nomes, idades){
        resp2.innerHTML += `<p>Nome: ${nomes[pos]};  idade ${idades[pos]} anos.</p>`
    }

}

