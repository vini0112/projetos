

let sexom = document.getElementById('mascid')
let sexof = document.getElementById('femid')
let peso = document.querySelector('#pesoid')
let altura = document.querySelector('#alturaid')
let res = document.querySelector('#res')



function calcular(){
    res.innerHTML = ''
    if(ispeso(peso.value) && isaltura(altura.value)){
        let imc = peso.value / (altura.value * 2)
        
        document.getElementById('res').classList.remove('hidden');
        if(imc < 20){
            res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} <br></p>`
            res.innerHTML += `<p>Você está abaixo do peso!</p>`
        }else if(imc >= 20 && imc < 24){
            res.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)} <br></p>`
            res.innerHTML += `<p>Você está com o peso normal! </p>`         
        }else if(imc >= 24 && imc < 30){         
            res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} <br></p>`
            res.innerHTML += `<p>Você está com começo de obesidade! </p>`
        }else if(imc >= 30 && imc < 40){
            res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} <br></p>`
            res.innerHTML += `<p>Você está no segundo nível de obesidade! </p>`
        }else if(imc >= 40){
            res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} <br></p>`
            res.innerHTML += `<p>Você está no grau crítico de obesidade! </p>`
        }
    }
}

function ispeso(p){
    if(Number(p) < 0){
        return alert('Peso abaixo de zero!')

    }else if(Number(p) == 0){
        return alert('Peso inválido')
    }
    else{
        return true
    }
}

function isaltura(al){
    if(Number(al) < 1){
        return alert('Altura precisa ser maior que 1 metro!')

}else if(Number(al) >= 3){
    return alert('A altura precisa ser menor que 3 metros!')
}else{
    return true
}
}

function limpar(){
    if(limpar){
        res.innerHTML = ''
        peso.value = ''
        altura.value = ''
        peso.focus()
    }
}