
// on reload function
document.addEventListener('DOMContentLoaded', () =>{
    // SESSAO 0

    // adding oleos
    addCardsOleo()

    // adding batteries
    addBattery()


    // SESSAO 1

    // adding fluido
    addFluidos()

    // adding oleo 2
    addOleo2()

    // SESSAO 2

    // adding filtro Oleo Simples
    addFiltroOleoSimp()

    // adding filtro oleo pesado
    addFiltroOleoPesado()

})

// API REQUEST
const api = 'allpeaces.json'


async function gettingApi(){
    const resp = await fetch(api)
    const dado = await resp.json()
    // console.log(dado.oleos[1].marca)
    return dado
    
    
}

gettingApi()


// SESSÃO 0 
const estruturaOleo = document.querySelector('#row-inicio-oleos')
const estruturaBatery = document.querySelector('#row-inicio-baterias')



// adding oleos
async function addCardsOleo(){
    const dados = await gettingApi()
    const dadosOleo = dados.oleos

    // console.log(dadosOleo)
    // console.log(dadosOleo.length)

    for(let i = 0;i < dadosOleo.length;i++){

        let oleoCards = document.createElement('div')
        oleoCards.classList.add('col-md-3')
        oleoCards.classList.add('card')
        oleoCards.classList.add('projeto-oleo')
        oleoCards.classList.add(dadosOleo[i].marca)

        if(dadosOleo[i].qtd == 0){
            oleoCards.classList.add('acabou')
        }
        

        oleoCards.innerHTML = `

        <img src="${dadosOleo[i].image}" alt="" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dadosOleo[i].nome} ${dadosOleo[i].marca} ${dadosOleo[i].viscosidade}</h5>
            <p class="card-text">${dadosOleo[i].info}</p>
        </div>
        `


        estruturaOleo.appendChild(oleoCards)
        
    }

    filtroIniciar()
    
}

// funcao filtrar oleos da primeira pagina
function filtroIniciar(){
                    
    let allBtns = document.querySelectorAll("#row-inicio-oleos #btns-iniciar-oleos button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-inicio-oleos .card')
    // console.log(allCards)


    // btn todos 
    allBtns[0].addEventListener('click', () =>{
        // replacing active btn funcao
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
            }
        }
        
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
            
        }
    })


    // btn lubrax 
    allBtns[1].addEventListener('click', () =>{
        // replacing active btn funcao
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
            }
        }
        
        // filtrando
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
            if(!(allCards[c]).classList.contains('Lubrax')){
                allCards[c].style.display='none'
            }
            
        }
    })

    
    // btn selenia
    allBtns[2].addEventListener('click', () =>{
        // replacing active btn funcao
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
            }
        }
        
        // filtrando
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
            if(!(allCards[c]).classList.contains('Selenia')){
                allCards[c].style.display='none'
            }
            
        }
    })


    // btn mobil
    allBtns[3].addEventListener('click', () =>{
        // replacing active btn funcao
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
            }
        }
        
        // filtrando
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
            if(!(allCards[c]).classList.contains('Mobil')){
                allCards[c].style.display='none'
            }
            
        }
    })


    // btn elaion
    allBtns[4].addEventListener('click', () =>{
        // replacing active btn funcao
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[4]){
                allBtns[b].classList.remove('active')
                allBtns[4].classList.add('active')
            }
        }
        
        // elaion
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
            if(!(allCards[c]).classList.contains('Elaion')){
                allCards[c].style.display='none'
            }
            
        }

    })


    // btn dulub
    allBtns[5].addEventListener('click', () =>{
        // replacing active btn funcao
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[5]){
                allBtns[b].classList.remove('active')
                allBtns[5].classList.add('active')
            }
        }
        
        // filtrando
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
            if(!(allCards[c]).classList.contains('Lubel')){
                allCards[c].style.display='none'
            }
            
        }
    })


}



// adding batteries
async function addBattery(){
    const dado = await gettingApi()
    const dadoBatery = dado.baterias
    // console.log(dadoBatery)


    for(let i = 0;i < dadoBatery.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dadoBatery[i].marca)

        if(dadoBatery[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        newDiv.innerHTML = `
        <img src="${dadoBatery[i].image}" alt="${dadoBatery[i].info}" class="img-fluid">
        <div class="card-body">
        <h5 class="card-title">${dadoBatery[i].nome}</h5>
        <p class="card-text">${dadoBatery[i].info}</p>
        </div>
        `


        estruturaBatery.appendChild(newDiv)

    }


}





// SESSAO 1
const estrutura2Oleo = document.querySelector('#row-oleos')
const estruturaFluido = document.querySelector('#row-fluido-oleo')

// adding oleo 2
async function addOleo2(){

    const dados = await gettingApi()
    const dadosOleo = dados.oleos

    // console.log(dadosOleo)
    // console.log(dadosOleo.length)

    for(let i = 0;i < dadosOleo.length;i++){

        let oleoCards = document.createElement('div')
        oleoCards.classList.add('col-md-3')
        oleoCards.classList.add('card')
        oleoCards.classList.add('projeto-oleo')
        oleoCards.classList.add(dadosOleo[i].marca)

        if(dadosOleo[i].qtd == 0){
            oleoCards.classList.add('acabou')
        }

        oleoCards.innerHTML = `

        <img src="${dadosOleo[i].image}" alt="" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dadosOleo[i].nome} ${dadosOleo[i].marca} ${dadosOleo[i].viscosidade}</h5>
            <p class="card-text">${dadosOleo[i].info}</p>
        </div>
        `


        estrutura2Oleo.appendChild(oleoCards)

    }
    filtrarMarcas()
}


// funcao filtrar pesquisa dos oleos! 
function filtrarMarcas(){

    let allBtns = document.querySelectorAll("#row-oleos #BoxBtnsDoFiltro button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-oleos .card')
    //console.log(allCards)


    // btn todos 
    allBtns[0].addEventListener('click', () =>{
        // replacing active btn funcao
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
            }
        }
        
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
            
        }
    })

    // btn lubrax 
    allBtns[1].addEventListener('click', () =>{
        // replacing active btn funcao
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
            }
        }
        
        // filtrando
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
            if(!(allCards[c]).classList.contains('Lubrax')){
                allCards[c].style.display='none'
            }
            
        }
    })

    // btn selenia
    allBtns[2].addEventListener('click', () =>{
        // replacing active btn funcao
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
            }
        }
        
        // filtrando
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
            if(!(allCards[c]).classList.contains('Selenia')){
                allCards[c].style.display='none'
            }
            
        }
    })

    // btn mobil
    allBtns[3].addEventListener('click', () =>{
        // replacing active btn funcao
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
            }
        }
        
        // filtrando
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
            if(!(allCards[c]).classList.contains('Mobil')){
                allCards[c].style.display='none'
            }
            
        }
    })

    // btn elaion
    allBtns[4].addEventListener('click', () =>{
        // replacing active btn funcao
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[4]){
                allBtns[b].classList.remove('active')
                allBtns[4].classList.add('active')
            }
        }
        
        // filtrando
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
            if(!(allCards[c]).classList.contains('Elaion')){
                allCards[c].style.display='none'
            }
            
        }
    })

    // btn dulub
    allBtns[5].addEventListener('click', () =>{
        // replacing active btn funcao
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[5]){
                allBtns[b].classList.remove('active')
                allBtns[5].classList.add('active')
            }
        }
        
        // filtrando
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
            if(!(allCards[c]).classList.contains('Lubel')){
                allCards[c].style.display='none'
            }
            
        }
    })

}



// adding fluidos freio
async function addFluidos(){
    const dado = await gettingApi()
    const dadoFluido = dado.fluidos 
    // console.log(dadoFluido)


    for(let i = 0;i < dadoFluido.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dadoFluido[i].marca)

        if(dadoFluido[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        newDiv.innerHTML = `
        <img src="${dadoFluido[i].image}" alt="${dadoFluido[i].viscosidade}" class="img-fluid">
        <h5 class="card-title">${dadoFluido[i].nome} ${dadoFluido[i].viscosidade}</h5>
        `


        estruturaFluido.appendChild(newDiv)

    }

}


// SESSAO 2

let rowFiltroSimp = document.querySelector('#row-filtros')
let rowFiltroPesado = document.querySelector('#row-filtros-pesados')


// adding filtros oleo simples
async function addFiltroOleoSimp(){
    const dado = await gettingApi()
    const dados = dado.filtroOleoSimples
    // console.log(dadoFluido)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add('projeto-filtro-oleo')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        if(dados[i].secundLineCode){
            newDiv.classList.add(dados[i].secundLineCode)
        }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `


        rowFiltroSimp.appendChild(newDiv)

    }

    filtrarFiltrosOleo()
}

// fucao filtrar pesquisa de filtros de oleo
function filtrarFiltrosOleo(){

    let allBtns = document.querySelectorAll("#row-filtros #estrutra-btn-filtro-oleo button")
    // console.log(allBtns)

    let allCards = document.querySelectorAll('#row-filtros .card')
    //console.log(allCards)

    // todos os filtros
    allBtns[0].addEventListener('click', () =>{

        //replecing btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                
                allBtns[0].classList.add('active')
            }
        }

        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
        }

        
    })

    // filtro Fiat 
    allBtns[1].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            // mostrar todos antes de filtrar 
            allCards[c].style.display='block'

            //replecing btn active
            for(let b = 0;b < allBtns.length;b++){
                if(allBtns[1]){
                    allBtns[b].classList.remove('active')
                    allBtns[1].classList.add('active')
                }
            }


            //filtrando
            if(!(allCards[c].classList.contains('fiat'))){
                allCards[c].style.display='none'
                
            }
        }
    })

    // filtro GM
    allBtns[2].addEventListener('click', () =>{

        for(let c = 0;c < allCards.length;c++){
            // mostrar todos antes de filtrar 
            allCards[c].style.display='block'

            //replecing btn active
            for(let b = 0;b < allBtns.length;b++){
                if(allBtns[2]){
                    allBtns[b].classList.remove('active')
                    allBtns[2].classList.add('active')
                }
            }


            //filtrando
            if(!(allCards[c].classList.contains('gm'))){
                allCards[c].style.display='none'
                
            }
        }
    })

    // btn VW
    allBtns[3].addEventListener('click', () =>{

        for(let c = 0;c < allCards.length;c++){
            // mostrar todos antes de filtrar 
            allCards[c].style.display='block'

            //replecing btn active
            for(let b = 0;b < allBtns.length;b++){
                if(allBtns[3]){
                    allBtns[b].classList.remove('active')
                    allBtns[3].classList.add('active')
                }
            }


            //filtrando
            if(!(allCards[c].classList.contains('vws'))){
                allCards[c].style.display='none'
                
            }
        }
    })

    // btn toyota
    allBtns[4].addEventListener('click', () =>{

        for(let c = 0;c < allCards.length;c++){
            // mostrar todos antes de filtrar 
            allCards[c].style.display='block'

            //replecing btn active
            for(let b = 0;b < allBtns.length;b++){
                if(allBtns[4]){
                    allBtns[b].classList.remove('active')
                    allBtns[4].classList.add('active')
                }
            }


            //filtrando
            if(!(allCards[c].classList.contains('toyota'))){
                allCards[c].style.display='none'
                
            }
        }
    })

    // btn renault
    allBtns[5].addEventListener('click', () =>{

        for(let c = 0;c < allCards.length;c++){
            // mostrar todos antes de filtrar 
            allCards[c].style.display='block'

            //replecing btn active
            for(let b = 0;b < allBtns.length;b++){
                if(allBtns[5]){
                    allBtns[b].classList.remove('active')
                    allBtns[5].classList.add('active')
                }
            }


            //filtrando
            if(!(allCards[c].classList.contains('renault'))){
                allCards[c].style.display='none'
                
            }
        }
    })

    // btn ford
    allBtns[6].addEventListener('click', () =>{

        for(let c = 0;c < allCards.length;c++){
            // mostrar todos antes de filtrar 
            allCards[c].style.display='block'

            //replecing btn active
            for(let b = 0;b < allBtns.length;b++){
                if(allBtns[6]){
                    allBtns[b].classList.remove('active')
                    allBtns[6].classList.add('active')
                }
            }


            //filtrando
            if(!(allCards[c].classList.contains('ford'))){
                allCards[c].style.display='none'
                
            }
        }
    })

}



// adding filtros oleo pesado
async function addFiltroOleoPesado(){

    const dado = await gettingApi()
    const dados = dado.filtroOleoPesado
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add('filtros-pesados')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        if(dados[i].secundLineCode){
            newDiv.classList.add(dados[i].secundLineCode)
        }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `


        rowFiltroPesado.appendChild(newDiv)

    }

    filtrandoPesados()
}

// funcao filtrar pesquisa dos filtros pesados
function filtrandoPesados(){

    let allBtns = document.querySelectorAll("#row-filtros-pesados #btn-filtros-pesados button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-filtros-pesados .card')
    //console.log(allCards)

    // todos 
    allBtns[0].addEventListener('click', () =>{
        // replecing active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
                
            }
        }

        // filtrando filtros 
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
        }



    })


    // btn ford pesado 
    allBtns[1].addEventListener('click', () =>{

        // replecing active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
                
            }
        }


        // filtrando filtros 
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('ford-pesado'))){
                allCards[c].style.display='none'
                
            }
        }
    })

    // btn hyundai 
    allBtns[2].addEventListener('click', () =>{

        // replecing active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
                
            }
        }


        // filtrando filtros 
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('hyundai'))){
                allCards[c].style.display='none'
                
            }
        }
    })

    // btn mercedez
    allBtns[3].addEventListener('click', () =>{

        // replecing active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
                
            }
        }


        // filtrando filtros
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('benz'))){
                allCards[c].style.display='none'
                
            }
        }
    })

    // gm pesados 
    allBtns[4].addEventListener('click', () =>{

        // replecing active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[4]){
                allBtns[b].classList.remove('active')
                allBtns[4].classList.add('active')
                
            }
        }


        // filtrando filtros
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('gm-pesado'))){
                allCards[c].style.display='none'
                
            }
        }
    })

}




{/* <div class="col-md-3 card filtros-pesados hyun">
<img src="photos/filtros/oleo/w9020.png" alt="w9020" class="img-fluid">
<div class="card-body">
    <h5 class="card-title">Filtro Óleo</h5>
    <h5 class="card-title">W-9020</h5>
    <p class="card-text">Linha Hyundai</p>

    <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="#w9020">Aplicações</button>
</div>
</div> */}
