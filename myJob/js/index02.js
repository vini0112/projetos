
// on reload function
document.addEventListener('DOMContentLoaded', () =>{
    // SESSAO 00

    addCardsOleo()

    addBattery()


    // SESSAO 01

    addFluidos()

    addOleo2()

    // SESSAO 02

    addFiltroOleoSimp()

    addFiltroOleoPesado()


    // SESSAO O3

    filtroCombustSimples()

    filtroCombustPesado()


    // SESSAO 04

    filtroArMotor()

    filtroArCabine()

    mangotesAr()


    // SESSAO 05

    terminaisDirecao()

    barraAxiais()

    estabilazadores()

    buchaCaixaDirecao()


    // SESSAO 06

    batedores()

    pivos()

    amortecedores()

    buchasBandejaSusp()

    coxinsAmort()

    bieletas()


    // SESSAO 07

    pastilhasFreio()

    discosFreio()

    sapatasFreio()

    cilindrosFreio()

    tamboresFreio()

    reparosFreio()

    cabosFreio()

    acessoriosFreio()


    // SESSAO 08

    cabosVela()

    velas()

    bobinas()

    modulosIgnicao()

    // SESSAO 09

    tensores()

    correiaAlter()

    correiaDentada()

    regVoltagem()

    estatores()

    // SESSAO 10

    inpulsores()

    portaEscovas()

    acessoriosPart()

    // SESSAO 11

    bombasDagua()

    reservatorio()

    valvulasTermo()

    ventoinhas()

    canosDagua()

    tubosDagua()

    resistencias()

    acessoriosArref()


    // SESSAO 12

    bicos()

    bombaCombustivel()

    flangesBomb()

    acessoriosCombustivel()

    // SESSAO 13

    discosEmbre()

    reparosTrambCambio()

    // SESSAO 14

    cubosRoda()

    pontasEixo()

    juntasHomo()

    rolamentoRoda()

    rolamentoDiversos()


    // SESSAO 15

    bojos()

    intermediarios()

    conxinsEscap()

    acessoriosEscap()

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


// SESSÃO 00 
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
        // oleoCards.classList.add('fade-in-active')
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
            // allCards[c].style.display='block'

            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')


            // allCards[c].classList.add('fade-in-active')

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
            // allCards[c].style.display='block'
            //  ACTIVITING 
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')

            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c]).classList.contains('Lubrax')){


                // first click 
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )


                // allCards[c].style.display='none'
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
            // allCards[c].style.display='block'
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')

            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c]).classList.contains('Selenia')){
                // allCards[c].style.display='none'

                // first click 
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )


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
            // allCards[c].style.display='block'
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')

            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c]).classList.contains('Mobil')){
                // allCards[c].style.display='none'


                // first click 
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                
                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                },)

            
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
            // allCards[c].style.display='block'
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')

            allCards[c].classList.add('fade-in-active')

            // filtrando por marca
            if(!(allCards[c]).classList.contains('Elaion')){
                // allCards[c].style.display='none'

                // first click 
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')


                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                })
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
            // allCards[c].style.display='block'
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')

            allCards[c].classList.add('fade-in-active')

            // filtrando por marca
            if(!(allCards[c]).classList.contains('Lubel')){
                // allCards[c].style.display='none'

                // first click 
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')


                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                })
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





// SESSAO 01
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
            // allCards[c].style.display='block'

            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            
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
            // allCards[c].style.display='block'
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')

            allCards[c].classList.add('fade-in-active')


            if(!(allCards[c]).classList.contains('Lubrax')){
                // allCards[c].style.display='none'

                // first click 
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')


                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

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
            // allCards[c].style.display='block'

            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')

            allCards[c].classList.add('fade-in-active')


            if(!(allCards[c]).classList.contains('Selenia')){
                // allCards[c].style.display='none'

                // first click 
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')


                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

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
            // allCards[c].style.display='block'

            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')

            allCards[c].classList.add('fade-in-active')


            if(!(allCards[c]).classList.contains('Mobil')){
                // allCards[c].style.display='none'

                // first click 
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')


                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )


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
            // allCards[c].style.display='block'

            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')

            allCards[c].classList.add('fade-in-active')


            if(!(allCards[c]).classList.contains('Elaion')){
                // allCards[c].style.display='none'

                // first click 
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')


                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

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
            // allCards[c].style.display='block'

            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')

            allCards[c].classList.add('fade-in-active')


            if(!(allCards[c]).classList.contains('Lubel')){
                // allCards[c].style.display='none'

                // first click 
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')


                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

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


// SESSAO 02

let rowFiltroSimp = document.querySelector('#row-filtros')
let rowFiltroPesado = document.querySelector('#row-filtros-pesados')
let rowFiltroCombustSimples = document.querySelector('#row-filtro-combus-simples')
let rowFiltroCombustPesado = document.querySelector('#row-filtro-combus')



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

        // FILTRANDO
        for(let c = 0;c < allCards.length;c++){
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')

        }

        
    })

    // filtro Fiat 
    allBtns[1].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            // mostrar todos antes de filtrar 
            // allCards[c].style.display='block'

            //replecing btn active
            for(let b = 0;b < allBtns.length;b++){
                if(allBtns[1]){
                    allBtns[b].classList.remove('active')
                    allBtns[1].classList.add('active')
                }
            }



            //filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active') 

            if(!(allCards[c].classList.contains('fiat'))){

                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        }
    })

    // filtro GM
    allBtns[2].addEventListener('click', () =>{

        for(let c = 0;c < allCards.length;c++){
            // mostrar todos antes de filtrar 
            // allCards[c].style.display='block'

            //replecing btn active
            for(let b = 0;b < allBtns.length;b++){
                if(allBtns[2]){
                    allBtns[b].classList.remove('active')
                    allBtns[2].classList.add('active')
                }
            }


            //filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active') 

            if(!(allCards[c].classList.contains('gm'))){
            
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
                
            }
        }
    })

    // btn VW
    allBtns[3].addEventListener('click', () =>{

        for(let c = 0;c < allCards.length;c++){
            // mostrar todos antes de filtrar 

            //replecing btn active
            for(let b = 0;b < allBtns.length;b++){
                if(allBtns[3]){
                    allBtns[b].classList.remove('active')
                    allBtns[3].classList.add('active')
                }
            }


            //filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('vws'))){
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
                
            }
        }
    })

    // btn toyota
    allBtns[4].addEventListener('click', () =>{

        for(let c = 0;c < allCards.length;c++){
            // mostrar todos antes de filtrar 


            //replecing btn active
            for(let b = 0;b < allBtns.length;b++){
                if(allBtns[4]){
                    allBtns[b].classList.remove('active')
                    allBtns[4].classList.add('active')
                }
            }


            //filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('toyota'))){

                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
                
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
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('renault'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
                
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
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('ford'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
                
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
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
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
            
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('ford-pesado'))){

                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
                
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
           
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('hyundai'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
                
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

            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('benz'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
                
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
            
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('gm-pesado'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
                
            }
        }
    })

}



// adding filtro combust simples
async function filtroCombustSimples() {
    
    const dado = await gettingApi()
    const dados = dado.filtroCombustSimples
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add('filtro-simples')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        if(dados[i].secundLineCode){
            newDiv.classList.add(dados[i].secundLineCode)
        }

        if(dados[i].thirdLineCode){
            newDiv.classList.add(dados[i].thirdLineCode)
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


        rowFiltroCombustSimples.appendChild(newDiv)

    }


    combustSimples()
}

// funcao filtrar pesquisa dos filtros combustivel simples
function combustSimples(){
    let allBtns = document.querySelectorAll('#all-btns-combust-simples button')
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-filtro-combus-simples .filtro-simples')
    //console.log(allCards)

    // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
        }

        // REPLACING ACTIVE BTN
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
            }
        }
    })

    // BTN GM 
    allBtns[1].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('gm'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // replacing active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
            }
        }
    })

    // BTN FIAT 
    allBtns[2].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('fiat'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
            }
        }
    })

    // BTN vws
    allBtns[3].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('vws'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
            }
        }
    })

    // BTN ford
    allBtns[4].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('ford'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[4]){
                allBtns[b].classList.remove('active')
                allBtns[4].classList.add('active')
            }
        }
    })

    
}



// adding filtro combust pesado
async function filtroCombustPesado(){

    const dado = await gettingApi()
    const dados = dado.filtroCombustPesado
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add('filtro-pesado')
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


        rowFiltroCombustPesado.appendChild(newDiv)

    }

    combustPesados()
}

// funcao filtrar pesquisa dos filtros combustivel simples
function combustPesados(){
    let allBtns = document.querySelectorAll('#all-btns-combust-pesado button')
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-filtro-combus .filtro-pesado')
    //console.log(allCards)

    // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
        }

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
            }
        }
    })

    // BTN GM 
    allBtns[1].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('gm'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
            }
        }
    })

    // BTN toyota
    allBtns[2].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('toyota'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
            }
        }
    })

    // BTN MERCEDEZ
    allBtns[3].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('benz'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 
        
        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
            }
        }
    })

    // BTN FORD
    allBtns[4].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('ford'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[4]){
                allBtns[b].classList.remove('active')
                allBtns[4].classList.add('active')
            }
        }
    })




}




// SESSAO 04

let rowFiltroArMotor = document.querySelector('#row-filtros-ar-motor')
let rowFiltroArCabine = document.querySelector('#row-filtros-ar-cabine')
let rowMangotesAr = document.querySelector('#row-mangotesAr')


// adding filtro de Ar motor
async function filtroArMotor(){

    const dado = await gettingApi()
    const dados = dado.filtroArMotor
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add('filtro-ar-motor')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
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


        rowFiltroArMotor.appendChild(newDiv)

    }

    arMotor()
}

// funcao filtrar pesquisa dos filtros de ar motor
function arMotor(){
    let allBtns = document.querySelectorAll("#all-btns-filtro-ar-motor button")
    //console.log(allBtnsFiltroMotor)

    let allCards = document.querySelectorAll('#row-filtros-ar-motor .filtro-ar-motor')
    //console.log(allCards)

    // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
        }

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
            }
        }
    })

    // BTN GM
    allBtns[1].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('gm'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
            }
        }
    })

    // BTN VWS
    allBtns[2].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('vws'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
            }
        }
    })

    // BTN FIAT
    allBtns[3].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('fiat'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
            }
        }
    })

    // BTN FORD
    allBtns[4].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('ford'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[4]){
                allBtns[b].classList.remove('active')
                allBtns[4].classList.add('active')
            }
        }
    })

    // BTN RENAULT
    allBtns[5].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('renault'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
            }
        } 

        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[5]){
                allBtns[b].classList.remove('active')
                allBtns[5].classList.add('active')
            }
        }
    })

    // BTN mecedez
    allBtns[6].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('benz'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
            }
        } 

        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[6]){
                allBtns[b].classList.remove('active')
                allBtns[6].classList.add('active')
            }
        }
    })

}



// adding filtro de ar cabine
async function filtroArCabine(){

    const dado = await gettingApi()
    const dados = dado.filtroArCabine
    // console.log(dados)



    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
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

        rowFiltroArCabine.appendChild(newDiv)

    }




}


// adding mangotes de ar
async function mangotesAr(){

    const dado = await gettingApi()
    const dados = dado.mangoteAR
    // console.log(dados)



    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
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

        rowMangotesAr.appendChild(newDiv)

    }
}


// SESSAO 05

let rowTerminaisDir = document.querySelector('#row-terminais')
let rowBarraAxiais = document.querySelector('#row-axiais')
let rowEstabilizadores = document.querySelector('#row-estabilizadores')
let rowBuchaCaixaDir = document.querySelector('#row-buchas-reparos')


// adding terminais direção
async function terminaisDirecao(){

    const dado = await gettingApi()
    const dados = dado.terminaisDirecao
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info} ${dados[i].lados}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowTerminaisDir.appendChild(newDiv)

    }

    filtroTerminais()
}

// funcao filtrar pesquisa dos terminais
function filtroTerminais(){

    let allBtns = document.querySelectorAll("#btns-terminais button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-terminais .card')
    //console.log(allCards)

     // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
        }

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
            }
        }
    })

    // BTN fiat
    allBtns[1].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('fiat'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
            }
        } 

        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
            }
        }
    })

    // BTN vws
    allBtns[2].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('vws'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
            }
        }
    })

    // BTN GM
    allBtns[3].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('gm'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
            }
        }
    })

    // BTN nissan
    allBtns[4].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('nissan'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[4]){
                allBtns[b].classList.remove('active')
                allBtns[4].classList.add('active')
            }
        }
    })


}



// adding barra axiais
async function barraAxiais(){

    const dado = await gettingApi()
    const dados = dado.barrasAxiais
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
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
            <p class="card-text">${dados[i].sistema}</p>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowBarraAxiais.appendChild(newDiv)

    }
    filtroBarras()

}

// fucao filtrando pesquisa das barras axiais
function filtroBarras(){

    let allBtns = document.querySelectorAll("#row-axiais #sistema-btns button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-axiais .card')
    //console.log(allCards)

    

    // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
        }

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
            }
        }
    })

    // BTN fiat
    allBtns[1].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando 
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('fiat'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
                
            }
        } 

        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
            }
        }
    })

    // BTN vws
    allBtns[2].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando 
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('vws'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
            }
        }
    })

    // BTN GM
    allBtns[3].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando 
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('gm'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
            }
        }
    })

    // BTN Ford
    allBtns[4].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando 
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('ford'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[4]){
                allBtns[b].classList.remove('active')
                allBtns[4].classList.add('active')
            }
        }

    })
}



// adding estabilizadores
async function estabilazadores(){

    const dado = await gettingApi()
    const dados = dado.estabilizadores
    // console.log(dados)



    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowEstabilizadores.appendChild(newDiv)

    }

    filtroEstabili()
}

// fucao filtrando pesquisa dos estabilizadores
function filtroEstabili(){

    let allBtns = document.querySelectorAll("#row-estabilizadores #btn-estabili button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-estabilizadores .card')
    //console.log(allCards)


     // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
        }

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
            }
        }
    })

    // BTN fiat
    allBtns[1].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando 
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('fiat'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

                
            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
            }
        }
    })

    // BTN vws
    allBtns[2].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando 
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('vws'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
            }
        }
    })

    // BTN GM
    allBtns[3].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando 
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('gm'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
            }
        }
    })
}



// adding buchas caixa-direçao
async function buchaCaixaDirecao(){

    const dado = await gettingApi()
    const dados = dado.BuchaCaixaDirecao
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowBuchaCaixaDir.appendChild(newDiv)

    }
}


// SESSAO 06

let rowBatedores = document.querySelector('#row-batedores')
let rowPivos = document.querySelector('#row-pivos')
let rowAmortecedores = document.querySelector('#row-amortecedores')
let rowBuchas = document.querySelector('#row-buchas')
let rowCoxinsAmort = document.querySelector('#row-coxins-amort')
let rowBieleta = document.querySelector('#row-bieleta')


// adding batedores
async function batedores(){

    const dado = await gettingApi()
    const dados = dado.batedores
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome} ${dados[i].position}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowBatedores.appendChild(newDiv)

    }

    filtroBatedor()
}

// fucao filtrando pesquisa dos batedores
function filtroBatedor(){
    let allBtns = document.querySelectorAll("#row-batedores #btns-batedores button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-batedores .card')
    //console.log(allCards)


    // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
        }

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
            }
        }
    })

    // BTN fiat
    allBtns[1].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando 
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('fiat'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
            }
        }
    })

    // BTN vws
    allBtns[2].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando 
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('vws'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
            }
        }
    })

    // BTN GM
    allBtns[3].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando 
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('gm'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
            }
        }
    })
}


// adding pivos
async function pivos(){
    const dado = await gettingApi()
    const dados = dado.pivos
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info} - ${dados[i].lados}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowPivos.appendChild(newDiv)

    }
    filtroPivos()

}

// funcao filtrar pesquisa dos pivos
function filtroPivos(){

    let allBtns = document.querySelectorAll("#btns-pivos button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-pivos .card')
    //console.log(allCards)


    // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
        }

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
            }
        }
    })

    // BTN fiat
    allBtns[1].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('fiat'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
            }
        }
    })

    // BTN vws
    allBtns[2].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('vws'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
            }
        }
    })

    // BTN GM
    allBtns[3].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('gm'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
            }
        }
    })

    // BTN Ford
    allBtns[4].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
             // filtrando
             allCards[c].classList.remove('positionAbsolute')
             allCards[c].classList.remove('fade-out-active')
             allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('ford'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[4]){
                allBtns[b].classList.remove('active')
                allBtns[4].classList.add('active')
            }
        }
    })


}


// adding amortecedores
async function amortecedores(){

    const dado = await gettingApi()
    const dados = dado.amortecedores
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome} ${dados[i].position}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowAmortecedores.appendChild(newDiv)

    }

}



// adding buchas da bandeja suspensao
async function buchasBandejaSusp(){

    const dado = await gettingApi()
    const dados = dado.buchaSusp
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
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
            <h5 class="card-title">${dados[i].nome} ${dados[i].position}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowBuchas.appendChild(newDiv)

    }

    filtroBuchas()
}

// fucao filtrando pesquisa das buchas
function filtroBuchas(){

    let allBtns = document.querySelectorAll("#row-buchas #btns-buchas button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-buchas .card')
    //console.log(allCards)

    // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
        }

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
            }
        }
    })

    // BTN fiat
    allBtns[1].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('fiat'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

                
            }
        } 

        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
            }
        }
    })

    // BTN vws
    allBtns[2].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('vws'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
            }
        }
    })

    // BTN GM
    allBtns[3].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('gm'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
            }
        }
    })

    // BTN Ford
    allBtns[4].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('ford'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[4]){
                allBtns[b].classList.remove('active')
                allBtns[4].classList.add('active')
            }
        }
        
    })

}



// adding coxins motor/amortecedor
async function coxinsAmort(){

    const dado = await gettingApi()
    const dados = dado.coxinsAmort
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome} ${dados[i].position}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowCoxinsAmort.appendChild(newDiv)

    }
}



// adding bieletas
async function bieletas(){

    const dado = await gettingApi()
    const dados = dado.bieletas
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowBieleta.appendChild(newDiv)

    }
}




// SESSAO 07

let rowPastilhas = document.querySelector('#row-pastilhas')
let rowDiscos = document.querySelector('#row-discos')
let rowSapatas = document.querySelector('#row-sapatas')
let rowCilindros = document.querySelector('#row-cilindros')
let rowTamboresFreio = document.querySelector('#row-tambores')
let rowReparosFreio = document.querySelector('#row-reparos')
let rowCabos = document.querySelector('#row-cabos')
let rowAcessoriosFreio = document.querySelector('#row-acessorios-freio')



// adding pastilhas
async function pastilhasFreio(){

    const dado = await gettingApi()
    const dados = dado.pastilhaFreio
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
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
            <h5 class="card-title">${dados[i].nome} ${dados[i].position}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowPastilhas.appendChild(newDiv)

    }

    filtroPastilha()
}

// fucao filtrando pesquisa das pastilhas de freio
function filtroPastilha(){
    let allBtns = document.querySelectorAll("#row-pastilhas #btns-pastilha button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-pastilhas .card')
    //console.log(allCards)



    // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
        }

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
            }
        }
    })

    // BTN fiat
    allBtns[1].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('fiat'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
                
            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
            }
        }
    })

    // BTN vws
    allBtns[2].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('vws'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
            }
        }
    })

    // BTN GM
    allBtns[3].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('gm'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
            }
        }
    })

    // BTN Toyota
    allBtns[4].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
           
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('toyota'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[4]){
                allBtns[b].classList.remove('active')
                allBtns[4].classList.add('active')
            }
        }
    })

    // BTN ford
    allBtns[5].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('ford'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[5]){
                allBtns[b].classList.remove('active')
                allBtns[5].classList.add('active')
            }
        }
    })

    // BTN citroen
    allBtns[6].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('renault'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[6]){
                allBtns[b].classList.remove('active')
                allBtns[6].classList.add('active')
            }
        }
    })

}


// adding discos freio
async function discosFreio(){

    const dado = await gettingApi()
    const dados = dado.discosFreio
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
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
            <h5 class="card-title">${dados[i].nome} ${dados[i].position}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowDiscos.appendChild(newDiv)

    }


}


// adding sapatas freio
async function sapatasFreio(){

    const dado = await gettingApi()
    const dados = dado.sapatasFreio
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
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
            <h5 class="card-title">${dados[i].nome} ${dados[i].position}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowSapatas.appendChild(newDiv)

    }
}


// adding cilindros freio
async function cilindrosFreio(){

    const dado = await gettingApi()
    const dados = dado.cilindros
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
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
            <h5 class="card-title">${dados[i].nome} ${dados[i].position}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowCilindros.appendChild(newDiv)

    }
}



// adding tambores freio
async function tamboresFreio(){

    const dado = await gettingApi()
    const dados = dado.tamboresFreio
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome} ${dados[i].position}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowTamboresFreio.appendChild(newDiv)

    }
}


// adding reparos freio
async function reparosFreio(){

    const dado = await gettingApi()
    const dados = dado.reparosFreio
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
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
            <h5 class="card-title">${dados[i].nome} ${dados[i].position}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowReparosFreio.appendChild(newDiv)

    }

    filtroReparo()
}

// fucao filtrando pesquisa dos reparos
function filtroReparo(){
    let allBtns = document.querySelectorAll("#row-reparos #btns-reparos button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-reparos .card')
    //console.log(allCards)


    // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
        }

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
            }
        }
    })

    // BTN fiat
    allBtns[1].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('fiat'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

                
            }
        } 

        // BTN ACTIVE
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
            }
        }
    })

    // BTN vws
    allBtns[2].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('vws'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
            }
        }
    })

    // BTN GM
    allBtns[3].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('gm'))){
               
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
            }
        }
    })

    // BTN ford
    allBtns[4].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('ford'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[4]){
                allBtns[b].classList.remove('active')
                allBtns[4].classList.add('active')
            }
        }
    })

    // BTN renault
    allBtns[5].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('renault'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[5]){
                allBtns[b].classList.remove('active')
                allBtns[5].classList.add('active')
            }
        }
    })

}



// adding cabos freio 
async function cabosFreio(){

    const dado = await gettingApi()
    const dados = dado.cabosEflexiveis
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
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
            <h5 class="card-title">${dados[i].nome} ${dados[i].Lado}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowCabos.appendChild(newDiv)

    }

    filtroCabos()
}

// fucao filtrando pesquisa dos cabos
function filtroCabos(){

    let allBtns = document.querySelectorAll("#row-cabos #btns-cabos button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-cabos .card')
    //console.log(allCards)



    // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
        }

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
            }
        }
    })

    // BTN fiat
    allBtns[1].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('fiat'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
                
            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
            }
        }
    })

    // BTN vws
    allBtns[2].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('vws'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
            }
        }
    })

    // BTN GM
    allBtns[3].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('gm'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
            }
        }
    })

}



// adding acessorios freio
async function acessoriosFreio() {
    const dado = await gettingApi()
    const dados = dado.acessoriosFreio
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
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

        rowAcessoriosFreio.appendChild(newDiv)

    }
}



// SESSAO 08

let rowCabosVela = document.querySelector('#row-cabo-vela')
let rowVelaIgnicao = document.querySelector('#row-vela-ignicao')
let rowBobinas = document.querySelector('#row-bobinas')
let rowModoloIgnicao = document.querySelector('#row-modolo-ignicao')



// adding cabos velas 
async function cabosVela(){
    const dado = await gettingApi()
    const dados = dado.cabosDvela
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowCabosVela.appendChild(newDiv)

    }
}


// adding velas igniçao
async function velas(){
    const dado = await gettingApi()
    const dados = dado.velas
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
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

        rowVelaIgnicao.appendChild(newDiv)

    }
}


// adding bobinas ignicao
async function bobinas(){
    const dado = await gettingApi()
    const dados = dado.bobinasIgnicao
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
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

        rowBobinas.appendChild(newDiv)

    }

}


// adding modulos igniçao
async function modulosIgnicao(){
    const dado = await gettingApi()
    const dados = dado.modulosIgnicao
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
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

        rowModoloIgnicao.appendChild(newDiv)

    }

}



// SESSAO 09

let rowTensores = document.querySelector('#row-tensores')
let rowCorreiaAlter = document.querySelector('#row-correia-alter')
let rowCorreiaDent = document.querySelector('#row-correia-dent')
let rowRegVolt = document.querySelector('#row-reg-volt')
let rowEstator = document.querySelector('#row-estatores')


// adding tensores correia
async function tensores(){
    const dado = await gettingApi()
    const dados = dado.tensoresCorreia
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
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

        rowTensores.appendChild(newDiv)

    }
}


// adding correias Alternador
async function correiaAlter(){
    const dado = await gettingApi()
    const dados = dado.correiaAlternador
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
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

        rowCorreiaAlter.appendChild(newDiv)

    }

    filtroCorreiaAlter()
}

// fucao filtrando pesquisa correias alternador
function filtroCorreiaAlter(){
    let allBtns = document.querySelectorAll("#row-correia-alter #btns-correia-alter button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-correia-alter .card')
    //console.log(allCards)



    // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
        }

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
            }
        }
    })

    // BTN fiat
    allBtns[1].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('fiat'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

                
            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
            }
        }
    })


    // BTN GM
    allBtns[2].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('gm'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
            }
        }
    })

    // BTN vws
    allBtns[3].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('vws'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
            }
        }
    })


    // BTN ford
    allBtns[4].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('ford'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[4]){
                allBtns[b].classList.remove('active')
                allBtns[4].classList.add('active')
            }
        }
    })



}


// adding correias dentada
async function correiaDentada(){
    const dado = await gettingApi()
    const dados = dado.correiasDentada
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
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

        rowCorreiaDent.appendChild(newDiv)

    }

    
}


// adding regulador voltagem
async function regVoltagem(){
    const dado = await gettingApi()
    const dados = dado.reguladorVolt
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
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

        rowRegVolt.appendChild(newDiv)

    }
}


// adding estatores
async function estatores(){
    const dado = await gettingApi()
    const dados = dado.estatores
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
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

        rowEstator.appendChild(newDiv)

    }
}




// SESSAO 10

let rowImpulsores = document.querySelector('#row-impulsores')
let rowPortaEscovas = document.querySelector('#row-porta-escova')
let rowAcessoriosPart = document.querySelector('#row-acessorios-partida')


// adding inpulsores (bendix)
async function inpulsores(){
    const dado = await gettingApi()
    const dados = dado.bendix
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowImpulsores.appendChild(newDiv)

    }
}


// adding porta escovas
async function portaEscovas(){
    const dado = await gettingApi()
    const dados = dado.portaEscovas
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowPortaEscovas.appendChild(newDiv)

    }
}

// adding acessorios motor partida
async function acessoriosPart(){
    const dado = await gettingApi()
    const dados = dado.acessoriosMotorPart
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowAcessoriosPart.appendChild(newDiv)

    }
}



// SESSAO 11

let rowBombasDagua = document.querySelector('#row-bombas-dagua')
let rowReservatorios = document.querySelector('#row-reservatorios')
let rowValvulas = document.querySelector('#row-valvulas')
let rowVentoinha = document.querySelector('#row-ventoinha')
let rowCanos = document.querySelector('#row-canos')
let rowTubos = document.querySelector('#row-tubos')
let rowResistencia = document.querySelector('#row-resistencia')
let rowAcessoriosArref = document.querySelector('#row-acessorios')



// adding bombas dagua
async function bombasDagua(){
    const dado = await gettingApi()
    const dados = dado.bombasDgua
    // console.log(dados)
    
    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
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

        rowBombasDagua.appendChild(newDiv)

    }
}


// adding reservatorios
async function reservatorio(){
    const dado = await gettingApi()
    const dados = dado.reservatorioDagua
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowReservatorios.appendChild(newDiv)

    }
}

// adding valvulasTermo
async function valvulasTermo(){

    const dado = await gettingApi()
    const dados = dado.valvulasTermo
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowValvulas.appendChild(newDiv)

    }
}


// adding ventoinha
async function ventoinhas(){

    const dado = await gettingApi()
    const dados = dado.eletroventiladores
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowVentoinha.appendChild(newDiv)

    }
}



// adding canos dagua
async function canosDagua(){

    const dado = await gettingApi()
    const dados = dado.canosDagua
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowCanos.appendChild(newDiv)

    }

    filtroCanos()
}

// fucao filtrando pesquisa de canos
function filtroCanos(){

    let allBtns = document.querySelectorAll("#row-canos #btns-canos button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-canos .card')
    //console.log(allCards)



     // BTN TODOS
     allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
        }

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
            }
        }
    })

    // BTN fiat
    allBtns[1].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('fiat'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
                
            }
        } 

        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
            }
        }
    })

    // BTN ford
    allBtns[2].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('ford'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
            }
        }
    })

    // BTN GM
    allBtns[3].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('gm'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
            }
        }
    })


}



// adding tubos dagua
async function tubosDagua(){

    const dado = await gettingApi()
    const dados = dado.tubosDagua
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowTubos.appendChild(newDiv)

    }

}




// adding resistencias
async function resistencias(){

    const dado = await gettingApi()
    const dados = dado.resistenciaEletro
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowResistencia.appendChild(newDiv)

    }
}



// adding acessorios de arrefecimento
async function acessoriosArref(){

    const dado = await gettingApi()
    const dados = dado.diversasArrefeci
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowAcessoriosArref.appendChild(newDiv)

    }
}




// SESSAO 12

let rowBicos = document.querySelector('#row-bicos')
let rowBombaCombust = document.querySelector('#row-bomba-combust')
let rowFlange = document.querySelector('#row-flange')
let rowAcessoriosCombust = document.querySelector('#row-acessocios-combust')



// adding bicos injecao
async function bicos(){

    const dado = await gettingApi()
    const dados = dado.bicosInjecao
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowBicos.appendChild(newDiv)

    }

}


// adding bomba combustivel
async function bombaCombustivel(){

    const dado = await gettingApi()
    const dados = dado.bombaCombust
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowBombaCombust.appendChild(newDiv)

    }

}



// adding flanges bomba
async function flangesBomb(){

    const dado = await gettingApi()
    const dados = dado.flangeBombaCombust
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowFlange.appendChild(newDiv)

    }
}



// adding acessorios combustivel
async function acessoriosCombustivel(){

    const dado = await gettingApi()
    const dados = dado.acessoriosCombust
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowAcessoriosCombust.appendChild(newDiv)

    }
}



// SESSAO 13

let rowDiscosEmbre = document.querySelector('#row-discos-embre')
let rowReparosCeT = document.querySelector('#row-reparos-CeT')

// adding discos embreagem
async function discosEmbre(){

    const dado = await gettingApi()
    const dados = dado.discosEmbreagem
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowDiscosEmbre.appendChild(newDiv)

    }
}



// adding reparos trambulador e cambio
async function reparosTrambCambio(){

    const dado = await gettingApi()
    const dados = dado.reparoCambioTrabulador
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowReparosCeT.appendChild(newDiv)

    }
}




// SESSAO 14

let rowCubos = document.querySelector('#row-cubos')
let rowPontas = document.querySelector('#row-pontas')
let rowJuntas = document.querySelector('#row-juntas')
let rowRolamentosRoda = document.querySelector('#row-rolamento-roda')
let rowRolamentosDiversos = document.querySelector('#row-rolamento-diversos')



// adding cubos roda
async function cubosRoda(){

    const dado = await gettingApi()
    const dados = dado.cubosRoda
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowCubos.appendChild(newDiv)

    }
}



// adding pontas Eixo
async function pontasEixo(){

    const dado = await gettingApi()
    const dados = dado.pontasEixo
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowPontas.appendChild(newDiv)

    }
}



// adding juntas Homocineticas
async function juntasHomo(){

    const dado = await gettingApi()
    const dados = dado.juntasHomocinetica
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowJuntas.appendChild(newDiv)

    }
}



// adding rolamento da roda
async function rolamentoRoda(){

    const dado = await gettingApi()
    const dados = dado.rolamentosRoda
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowRolamentosRoda.appendChild(newDiv)

    }
}



// adding rolamento diversos
async function rolamentoDiversos(){

    const dado = await gettingApi()
    const dados = dado.rolamentoDiversos
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowRolamentosDiversos.appendChild(newDiv)

    }
}




// SESSAO 15

let rowBojos = document.querySelector('#row-bojos')
let rowInter = document.querySelector('#row-inter')
let rowCoxinsEscap = document.querySelector('#row-coxin-escap')
let rowAcessoriosEscap = document.querySelector('#row-acessorios-escap')


// adding bojos
async function bojos(){
    const dado = await gettingApi()
    const dados = dado.bojosTras
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowBojos.appendChild(newDiv)

    }

    filtroBojos()
}


// fucao filtrando pesquisa dos bojos
function filtroBojos(){
    let allBtns = document.querySelectorAll("#row-bojos #btns-bojos button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-bojos .card')
    //console.log(allCards)



       // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
        }

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
            }
        }
    })

    // BTN fiat
    allBtns[1].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('fiat'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
                
            }
        } 

        // ACTIVE BTN
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
            }
        }
    })

    // BTN gm
    allBtns[2].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('gm'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
            }
        }
    })

    // BTN vws
    allBtns[3].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('vws'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // active btn
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
            }
        }
    })



}




// adding intermediarios
async function intermediarios(){

    const dado = await gettingApi()
    const dados = dado.canosIntermediario
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowInter.appendChild(newDiv)

    }

    filtroInter()

}


// funcao filtrando pesquisa dos intermediarios
function filtroInter(){
    let allBtns = document.querySelectorAll("#row-inter #btns-inter button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-inter .card')
    //console.log(allCards)


      // BTN TODOS
      allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
        }

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
            }
        }
    })


    // BTN fiat
    allBtns[1].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
             // filtrando
             allCards[c].classList.remove('positionAbsolute')
             allCards[c].classList.remove('fade-out-active')
             allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('fiat'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
                
            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
            }
        }
    })


    // BTN gm
    allBtns[2].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('gm'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
            }
        }
    })


    // BTN vws
    allBtns[3].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('vws'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
            }
        }
    })

}



// adding coxins escapamento
async function conxinsEscap(){

    const dado = await gettingApi()
    const dados = dado.coxinsEscap
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome} ${dados[i].position}</h5>
            <h5 class="card-title">${dados[i].info}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

            <button type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${dados[i].linkApli}">Aplicações</button>
        </div>
        
        `

        rowCoxinsEscap.appendChild(newDiv)

    }

    filtroCoxinEscap()
}


//funcao filtrando pesquisa dos coxins escapes
function filtroCoxinEscap(){

    let allBtns = document.querySelectorAll("#row-coxin-escap #btns-coxins-escap button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-coxin-escap .card')
    //console.log(allCards)


     // BTN TODOS
     allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
        }

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[0]){
                allBtns[b].classList.remove('active')
                allBtns[0].classList.add('active')
            }
        }
    })


    // BTN fiat
    allBtns[1].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('fiat'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )
                
            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('active')
                allBtns[1].classList.add('active')
            }
        }
    })


    // BTN gm
    allBtns[2].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('gm'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        // btn active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('active')
                allBtns[2].classList.add('active')
            }
        }
    })


    // BTN vws
    allBtns[3].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            
            // filtrando
            allCards[c].classList.remove('positionAbsolute')
            allCards[c].classList.remove('fade-out-active')
            allCards[c].classList.add('fade-in-active')

            if(!(allCards[c].classList.contains('vws'))){
                
                allCards[c].classList.remove('fade-in-active')
                allCards[c].classList.add('fade-out-active')

                setTimeout(function(){
                    allCards[c].classList.add('positionAbsolute')
                }, )

            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('active')
                allBtns[3].classList.add('active')
            }
        }
    })


}



// adding acessorios dos escapes
async function acessoriosEscap(){

    const dado = await gettingApi()
    const dados = dado.acessoriosEscap
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        let newDiv = document.createElement('div')
        newDiv.classList.add('col-md-3')
        newDiv.classList.add('card')
        newDiv.classList.add(dados[i].linhaCode)

        if(dados[i].qtd == 0){
            newDiv.classList.add('acabou')
        }

        // if(dados[i].secundLineCode){
        //     newDiv.classList.add(dados[i].secundLineCode)
        // }


        newDiv.innerHTML = `
        <img src="${dados[i].image}" alt="${dados[i].info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${dados[i].nome}</h5>
            <p class="card-text">Linha ${dados[i].linha}</p>

        </div>
        
        `

        rowAcessoriosEscap.appendChild(newDiv)

    }
}