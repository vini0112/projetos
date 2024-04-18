// min e max
let minc = -273
let maxc = 100 

// inputs 
let cnum = document.querySelector('#cnum')
let fnum = document.querySelector('#fnum')
let knum = document.querySelector('#knum')

// ranges
let crange = document.querySelector('#crange')
let frange = document.querySelector('#frange')
let krange = document.querySelector('#krange')

// btn converter
let convert = document.querySelector('.convert')

// range recebe o valor de input

crange.value = cnum.value
frange.value = fnum.value
krange.value = knum.value

// input recebe modificação do range
function atuac(){
    cnum.value = crange.value
}

function atuaf(){
    let cnum_fahren = (cnum.value * 9/5) + 32
    frange.value = cnum_fahren
    fnum.value = (cnum_fahren).toFixed(2)
}
function atuak(){
    let cnum_kelv = parseFloat(cnum.value) + 273
    krange.value = cnum_kelv
    knum.value = (cnum_kelv).toFixed(2)
}

// limpar
function limpar(){
    cnum.value = 0
    crange.value = cnum.value
    fnum.value = 32
    frange.value = fnum.value
    knum.value = 273
    krange.value = knum.value
    convert.style.display='none'
    cnum.setAttribute('disabled', 'disabled')
    cnum.style.cursor='not-allowed'

    // tirar as modificaçoes do btn definir
    crange.removeAttribute('disabled')
    crange.style.cursor='pointer'
    frange.removeAttribute('disabled')
    frange.style.cursor='pointer'
    krange.removeAttribute('disabled')
    krange.style.cursor='pointer'
    cnum.style.textAlign='right'
}

// configurar btn manual
function definir(){
    cnum.style.textAlign='center'
    cnum.removeAttribute('disabled')
    cnum.style.cursor='pointer'
    cnum.value = ''
    cnum.focus()
    fnum.value = 32
    frange.value = fnum.value
    knum.value = 273
    krange.value = knum.value

    // desabilitar os ranges
    crange.setAttribute('disabled', 'disabled')
    crange.style.cursor='not-allowed'
    frange.setAttribute('disabled', 'disabled')
    frange.style.cursor='not-allowed'
    krange.setAttribute('disabled', 'disabled')
    krange.style.cursor='not-allowed'

    convert.style.display='inline-block'

}

function calcular(){
    if(cnum.value >= minc && cnum.value <= maxc && cnum.value != ''){
        crange.value = cnum.value

        // convertendo fahrenheit manual
    let cnum_fahren = (cnum.value * 9/5) + 32
    frange.value = cnum_fahren
    fnum.value = (cnum_fahren).toFixed(2)
    // convertendo kelvin manual
    let cnum_kelv = parseFloat(cnum.value) + 273
    krange.value = cnum_kelv
    knum.value = (cnum_kelv).toFixed(2)

    }else{
        alert('Digite o valor de acordo com a tabela!')
        // voltar ao padrao de definir
        cnum.value = ''
        cnum.focus()
        fnum.value = 32
        frange.value = fnum.value
        knum.value = 273
        krange.value = knum.value
    
    }  
}

