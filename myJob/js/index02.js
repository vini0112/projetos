
let body = document.querySelector('body')

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
    // console.log(dados)


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
    // (dados[i].code, dados[i].info, dados[i].marca ,dados[i].aplicacoes)
    // console.log(dados)
    
    

    filtrarFiltrosOleo()

    dialogoOleoSimples()
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


// funcao mostrando dialog oleos simples
async function dialogoOleoSimples(){
    
    const dado = await gettingApi()
    const dados = dado.filtroOleoSimples
    // console.log(dados)
    
    

    for(let i = 0;i < dados.length;i++){

        // console.log(dados.length)

        // dados especificos
        code = await dados[i].aplicacoes[0].codeApli
        montadora = await dados[i].aplicacoes[0].montadora
        nameProduct = await dados[i].info
        marcaProduct = await dados[i].marca
        codeProduct = await dados[i].code
        montadora = await dados[i].aplicacoes[0].montadora
        

        // console.log("esse é o "+ i)
        let modalDialog = document.createElement('div')

        modalDialog.innerHTML = `

    <div class="modal fade thisModal" id="${code}" aria-hidden="true" aria-labelledby="modal-filtro-label" tabindex="-1" >
        <div class="modal-dialog modal-dialog-scrollable">

            <div class="modal-content" id="modal-content">

                <div class="modal-header">
                    <h2>Aplicações</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <h5>${nameProduct}</h5>   

                    <ul id="lista-aplicacoes" class="ulListas">
                        <li class="montadora">${montadora}:</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <p><span class="carro">Marca:</span> <span class="marcas">${marcaProduct}</span></p>
                    <p class="carro">C-${codeProduct}</p>
                </div>
            </div>
        </div>
    </div>
    
    `
        
        body.append(modalDialog)


    }


    carsEapli1(await dados)
    
}

// adding carros AND aplicacoes of dialog
async function carsEapli1(dados){

    // console.log(dados)
    let allModalBody = document.querySelectorAll('.modal-body .ulListas')
    // console.log(allModalBody[0])

    let cont = 0

    // Primeira Implementação
    for(let i = 0;i < dados.length;i++){

        // APLICAÇÕES
        let aplicacao = await dados[i].aplicacoes[0].anoApli
        let aplicacoesTwo = await dados[i].aplicacoesTwo
        let aplicacoesThree = await dados[i].aplicacoesThree


        // ADDING CARROS 1
        let carros = await dados[i].aplicacoes[0].carros

        carros.map((carro, index) =>{
            // debugger
            let liLista = document.createElement('li')
            liLista.classList.add(`listCars`)

            liLista.innerHTML = `
             <span class="carro">${carro}: </span>

                `
            
            allModalBody[i].appendChild(liLista)

            // console.log(tamanhoCarros +" "+ index)
            
        })


        // ADDING APLICACOES 1

        let allLis = document.querySelectorAll(`.modal-body .ulListas .listCars`)
        // console.log(allLis.length)
        
        aplicacao.forEach((apli) =>{
            cont += 1

            let spanLi = document.createElement('span')
            spanLi.innerHTML = `${apli}`
            // console.log(cont)
            allLis[cont - 1].append(spanLi)
        })



        // SE EXISTIER APLICACAO DOIS
        if(aplicacoesTwo){

            // console.log(aplicacaoTwo[0].carros)
            montadoraTwo = await aplicacoesTwo[0].montadora
            carrosTwo = await aplicacoesTwo[0].carros
            anoApliTwo = await aplicacoesTwo[0].anoApli

        //    ADDING MONTADORA 2
            let liMontTwo = document.createElement('li')
            liMontTwo.classList.add(`montadora`)
            liMontTwo.innerHTML = `
                <li class="montadora">${montadoraTwo}:</li>
                `
            allModalBody[i].appendChild(liMontTwo)


            // ADDING CARROS 2
            carrosTwo.map((carroTwo) =>{

                let liListaTwo = document.createElement('li')
                liListaTwo.classList.add(`listCars`)

                liListaTwo.innerHTML = `
                <span class="carro">${carroTwo}: </span>
                    `
                
                allModalBody[i].appendChild(liListaTwo)
            })


            // ADDING APLICAÇAO 2
            let allLisTwo = document.querySelectorAll(`.modal-body .ulListas .listCars`)

            anoApliTwo.forEach((apliTwo) =>{

                cont += 1

                let spanLiTwo = document.createElement('span')
                spanLiTwo.innerHTML = `${apliTwo}`
                // console.log(cont)
                allLisTwo[cont - 1].append(spanLiTwo)
            })

        }


        // SE EXISTIR APLICACAO TRES
        if(aplicacoesThree){
    
            montadoraThree = await aplicacoesThree[0].montadora
            carrosThree = await aplicacoesThree[0].carros
            anoApliThree = await aplicacoesThree[0].anoApli


            //  ADDING MONTADORA 3
            let liMontThree = document.createElement('li')
            liMontThree.classList.add(`montadora`)
            liMontThree.innerHTML = `
                <li class="montadora">${montadoraThree}:</li>
                `
            allModalBody[i].appendChild(liMontThree)


            // ADDING CARROS 3
            carrosThree.map((carroThree) =>{

                let liListaThree = document.createElement('li')
                liListaThree.classList.add(`listCars`)

                liListaThree.innerHTML = `
                <span class="carro">${carroThree}: </span>
                    `
                
                allModalBody[i].appendChild(liListaThree)
            })


            // ADDING APLICAÇAO 3
            let allLisThree = document.querySelectorAll(`.modal-body .ulListas .listCars`)

            anoApliThree.forEach((apliThree) =>{

                cont += 1

                let spanLiThree = document.createElement('span')
                spanLiThree.innerHTML = `${apliThree}`
                // console.log(cont)
                allLisThree[cont - 1].append(spanLiThree)
            })



        }
        
    }


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

    // funcao filtro dos btns
    filtrandoPesados()

    // chamando dialog
    dialogFiltrosOleoPesado()
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

// dialog filtro oleo pesados
async function dialogFiltrosOleoPesado(){
    const dado = await gettingApi()
    const dados = dado.filtroOleoPesado
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){

        // console.log(dados.length)

        // dados especificos
        code = await dados[i].aplicacoes[0].codeApli
        montadora = await dados[i].aplicacoes[0].montadora
        nameProduct = await dados[i].info
        marcaProduct = await dados[i].marca
        codeProduct = await dados[i].code
        montadora = await dados[i].aplicacoes[0].montadora
        // console.log(code)

        // console.log("esse é o "+ i)
        let modalDialog = document.createElement('div')

        modalDialog.innerHTML = `

    <div class="modal fade thisModal" id="${code}" aria-hidden="true" aria-labelledby="modal-filtro-label" tabindex="-1" >
        <div class="modal-dialog modal-dialog-scrollable">

            <div class="modal-content" id="modal-content">

                <div class="modal-header">
                    <h2>Aplicações</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <h5>${nameProduct}</h5>   

                    <ul id="lista-aplicacoes" class="filtroOleoPesado">
                        <li class="montadora">${montadora}:</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <p><span class="carro">Marca:</span> <span class="marcas">${marcaProduct}</span></p>
                    <p class="carro">C-${codeProduct}</p>
                </div>
            </div>
        </div>
    </div>
    
    `
        
        body.append(modalDialog)


    }

    carsEapli2(await dados)
}

// adding cars and aplications in dialog
async function carsEapli2(dados){
    // console.log(dados)

    let allModalBody = document.querySelectorAll('.modal-body .filtroOleoPesado')


    let cont = 0

    for(let i = 0;i < dados.length;i++){

        
        // APLICAÇÕES
        let aplicacao = await dados[i].aplicacoes[0].anoApli
        let aplicacoesTwo = await dados[i].aplicacoesTwo
        let aplicacoesThree = await dados[i].aplicacoesThree


        // ADDING CARROS 1
         let carros = await dados[i].aplicacoes[0].carros

         carros.map((carro, index) =>{

             
            let liLista = document.createElement('li')
            liLista.classList.add(`listCars`)
 
            liLista.innerHTML = `
              <span class="carro">${carro}: </span>
 
                 `
            //  console.log(liLista)

            allModalBody[i].appendChild(liLista)
                
         })

         
         // ADDING APLICACOES 1
        let allLis = document.querySelectorAll(`.modal-body .filtroOleoPesado .listCars`)
        // console.log(allLis.length)
        
        aplicacao.forEach((apli) =>{
            cont += 1

            let spanLi = document.createElement('span')
            spanLi.innerHTML = `${apli}`
            // console.log(cont)
            allLis[cont - 1].append(spanLi)
        })


        // SE EXISTIR APLICACAO DOIS
        if(aplicacoesTwo){

            // console.log(aplicacaoTwo[0].carros)
            montadoraTwo = await aplicacoesTwo[0].montadora
            carrosTwo = await aplicacoesTwo[0].carros
            anoApliTwo = await aplicacoesTwo[0].anoApli

            // console.log(carrosTwo)
        //    ADDING MONTADORA 2
            let liMontTwo = document.createElement('li')
            liMontTwo.classList.add(`montadora`)
            liMontTwo.innerHTML = `
                <li class="montadora">${montadoraTwo}:</li>
                `
            allModalBody[i].appendChild(liMontTwo)


            // ADDING CARROS 2
            carrosTwo.map((carroTwo) =>{

                let liListaTwo = document.createElement('li')
                liListaTwo.classList.add(`listCars`)

                liListaTwo.innerHTML = `
                <span class="carro">${carroTwo}: </span>
                    `
                
                allModalBody[i].appendChild(liListaTwo)
            })


            // ADDING APLICAÇAO 2
            let allLisTwo = document.querySelectorAll(`.modal-body .filtroOleoPesado .listCars`)

            anoApliTwo.forEach((apliTwo) =>{

                cont += 1

                let spanLiTwo = document.createElement('span')
                spanLiTwo.innerHTML = `${apliTwo}`
                // console.log(cont)
                allLisTwo[cont - 1].append(spanLiTwo)
            })

        }


        // SE EXISTIR APLICACAO TRES
        if(aplicacoesThree){
    
            montadoraThree = await aplicacoesThree[0].montadora
            carrosThree = await aplicacoesThree[0].carros
            anoApliThree = await aplicacoesThree[0].anoApli


            //  ADDING MONTADORA 3
            let liMontThree = document.createElement('li')
            liMontThree.classList.add(`montadora`)
            liMontThree.innerHTML = `
                <li class="montadora">${montadoraThree}:</li>
                `
            allModalBody[i].appendChild(liMontThree)


            // ADDING CARROS 3
            carrosThree.map((carroThree) =>{

                let liListaThree = document.createElement('li')
                liListaThree.classList.add(`listCars`)

                liListaThree.innerHTML = `
                <span class="carro">${carroThree}: </span>
                    `
                
                allModalBody[i].appendChild(liListaThree)
            })


            // ADDING APLICAÇAO 3
            let allLisThree = document.querySelectorAll(`.modal-body .filtroOleoPesado .listCars`)

            anoApliThree.forEach((apliThree) =>{

                cont += 1

                let spanLiThree = document.createElement('span')
                spanLiThree.innerHTML = `${apliThree}`
                // console.log(cont)
                allLisThree[cont - 1].append(spanLiThree)
            })



        }
        


    }

    // console.log(allModalBody[23])

}





// SESSAO 03



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

    // funcao de filtrar dos btns
    combustSimples()

    // mostrando dialog
    dialogFiltroCombustSimple()

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

// dialog filtro combust simples
async function dialogFiltroCombustSimple(){
    const dado = await gettingApi()
    const dados = dado.filtroCombustSimples
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){
        // console.log(dados.length)

        // dados especificos
        code = await dados[i].aplicacoes[0].codeApli
        montadora = await dados[i].aplicacoes[0].montadora
        nameProduct = await dados[i].info
        marcaProduct = await dados[i].marca
        codeProduct = await dados[i].code
        montadora = await dados[i].aplicacoes[0].montadora



        let modalDialog = document.createElement('div')

        modalDialog.innerHTML = `

    <div class="modal fade thisModal" id="${code}" aria-hidden="true" aria-labelledby="modal-filtro-label" tabindex="-1" >
        <div class="modal-dialog modal-dialog-scrollable">

            <div class="modal-content" id="modal-content">

                <div class="modal-header">
                    <h2>Aplicações</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <h5>${nameProduct}</h5>   

                    <ul id="lista-aplicacoes" class="filtroCombustSimple">
                        <li class="montadora">${montadora}:</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <p><span class="carro">Marca:</span> <span class="marcas">${marcaProduct}</span></p>
                    <p class="carro">C-${codeProduct}</p>
                </div>
            </div>
        </div>
    </div>
    
    `
        
        body.append(modalDialog)

    }

    carsEapli3(await dados)


}

// adding cars and aplications in dialog
async function carsEapli3(dados){
    // console.log(dados)

    let allModalBody = document.querySelectorAll('.modal-body .filtroCombustSimple')


    let cont = 0

    for(let i = 0;i < dados.length;i++){

        
        // APLICAÇÕES
        let aplicacao = await dados[i].aplicacoes[0].anoApli
        let aplicacoesTwo = await dados[i].aplicacoesTwo
        let aplicacoesThree = await dados[i].aplicacoesThree


        // ADDING CARROS 1
         let carros = await dados[i].aplicacoes[0].carros

         carros.map((carro, index) =>{

             
            let liLista = document.createElement('li')
            liLista.classList.add(`listCars`)
 
            liLista.innerHTML = `
              <span class="carro">${carro}: </span>
 
                 `
            //  console.log(liLista)

            allModalBody[i].appendChild(liLista)
                
         })

         
         // ADDING APLICACOES 1
        let allLis = document.querySelectorAll(`.modal-body .filtroCombustSimple .listCars`)
        // console.log(allLis.length)
        
        aplicacao.forEach((apli) =>{
            cont += 1

            let spanLi = document.createElement('span')
            spanLi.innerHTML = `${apli}`
            // console.log(cont)
            allLis[cont - 1].append(spanLi)
        })

        
        
        // SE EXISTIR APLICACAO DOIS
        if(aplicacoesTwo){

            // console.log(aplicacaoTwo[0].carros)
            montadoraTwo = await aplicacoesTwo[0].montadora
            carrosTwo = await aplicacoesTwo[0].carros
            anoApliTwo = await aplicacoesTwo[0].anoApli

            // console.log(carrosTwo)
        //    ADDING MONTADORA 2
            let liMontTwo = document.createElement('li')
            liMontTwo.classList.add(`montadora`)
            liMontTwo.innerHTML = `
                <li class="montadora">${montadoraTwo}:</li>
                `
            allModalBody[i].appendChild(liMontTwo)


            // ADDING CARROS 2
            carrosTwo.map((carroTwo) =>{

                let liListaTwo = document.createElement('li')
                liListaTwo.classList.add(`listCars`)

                liListaTwo.innerHTML = `
                <span class="carro">${carroTwo}: </span>
                    `
                
                allModalBody[i].appendChild(liListaTwo)
            })


            // ADDING APLICAÇAO 2
            let allLisTwo = document.querySelectorAll(`.modal-body .filtroCombustSimple .listCars`)

            anoApliTwo.forEach((apliTwo) =>{

                cont += 1

                let spanLiTwo = document.createElement('span')
                spanLiTwo.innerHTML = `${apliTwo}`
                // console.log(cont)
                allLisTwo[cont - 1].append(spanLiTwo)
            })

        }


        // SE EXISTIR APLICACAO TRES
        if(aplicacoesThree){
    
            montadoraThree = await aplicacoesThree[0].montadora
            carrosThree = await aplicacoesThree[0].carros
            anoApliThree = await aplicacoesThree[0].anoApli


            //  ADDING MONTADORA 3
            let liMontThree = document.createElement('li')
            liMontThree.classList.add(`montadora`)
            liMontThree.innerHTML = `
                <li class="montadora">${montadoraThree}:</li>
                `
            allModalBody[i].appendChild(liMontThree)


            // ADDING CARROS 3
            carrosThree.map((carroThree) =>{

                let liListaThree = document.createElement('li')
                liListaThree.classList.add(`listCars`)

                liListaThree.innerHTML = `
                <span class="carro">${carroThree}: </span>
                    `
                
                allModalBody[i].appendChild(liListaThree)
            })


            // ADDING APLICAÇAO 3
            let allLisThree = document.querySelectorAll(`.modal-body .filtroCombustSimple .listCars`)

            anoApliThree.forEach((apliThree) =>{

                cont += 1

                let spanLiThree = document.createElement('span')
                spanLiThree.innerHTML = `${apliThree}`
                // console.log(cont)
                allLisThree[cont - 1].append(spanLiThree)
            })



        }
        




    }

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

    // funcao de filtrar dos btns
    combustPesados()

    // exibindo dialog
    dialogFiltroCombustPesado()
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

// dialog filtro combust pesado
async function dialogFiltroCombustPesado(){
    const dado = await gettingApi()
    const dados = dado.filtroCombustPesado
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){
        // console.log(dados.length)

        // dados especificos
        code = await dados[i].aplicacoes[0].codeApli
        montadora = await dados[i].aplicacoes[0].montadora
        nameProduct = await dados[i].info
        marcaProduct = await dados[i].marca
        codeProduct = await dados[i].code
        montadora = await dados[i].aplicacoes[0].montadora


        let modalDialog = document.createElement('div')

        modalDialog.innerHTML = `

    <div class="modal fade thisModal" id="${code}" aria-hidden="true" aria-labelledby="modal-filtro-label" tabindex="-1" >
        <div class="modal-dialog modal-dialog-scrollable">

            <div class="modal-content" id="modal-content">

                <div class="modal-header">
                    <h2>Aplicações</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <h5>${nameProduct}</h5>   

                    <ul id="lista-aplicacoes" class="filtroCombustPesado">
                        <li class="montadora">${montadora}:</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <p><span class="carro">Marca:</span> <span class="marcas">${marcaProduct}</span></p>
                    <p class="carro">C-${codeProduct}</p>
                </div>
            </div>
        </div>
    </div>
    
    `
        
        body.append(modalDialog)

    }

    carsEapli4(dados)
}

// adding cars and aplications in dialog
async function carsEapli4(dados){
    // console.log(dados)

    // filtroCombustPesado

    let allModalBody = document.querySelectorAll('.modal-body .filtroCombustPesado')
    // console.log(allModalBody)

    let cont = 0

    for(let i = 0;i < dados.length;i++){

        // APLICAÇÕES
        let aplicacao = await dados[i].aplicacoes[0].anoApli
        let aplicacoesTwo = await dados[i].aplicacoesTwo
        let aplicacoesThree = await dados[i].aplicacoesThree


        // ADDING CARROS 1
         let carros = await dados[i].aplicacoes[0].carros

         carros.map((carro, index) =>{

             
            let liLista = document.createElement('li')
            liLista.classList.add(`listCars`)
 
            liLista.innerHTML = `
              <span class="carro">${carro}: </span>
 
                 `
            //  console.log(liLista)

            allModalBody[i].appendChild(liLista)
                
         })

         
         // ADDING APLICACOES 1
        let allLis = document.querySelectorAll(`.modal-body .filtroCombustPesado .listCars`)
        // console.log(allLis.length)
        
        aplicacao.forEach((apli) =>{
            cont += 1

            let spanLi = document.createElement('span')
            spanLi.innerHTML = `${apli}`
            // console.log(cont)
            allLis[cont - 1].append(spanLi)
        })



        // SE EXISTIR APLICACAO DOIS
        if(aplicacoesTwo){

            // console.log(aplicacaoTwo[0].carros)
            montadoraTwo = await aplicacoesTwo[0].montadora
            carrosTwo = await aplicacoesTwo[0].carros
            anoApliTwo = await aplicacoesTwo[0].anoApli

            // console.log(carrosTwo)
        //    ADDING MONTADORA 2
            let liMontTwo = document.createElement('li')
            liMontTwo.classList.add(`montadora`)
            liMontTwo.innerHTML = `
                <li class="montadora">${montadoraTwo}:</li>
                `
            allModalBody[i].appendChild(liMontTwo)


            // ADDING CARROS 2
            carrosTwo.map((carroTwo) =>{

                let liListaTwo = document.createElement('li')
                liListaTwo.classList.add(`listCars`)

                liListaTwo.innerHTML = `
                <span class="carro">${carroTwo}: </span>
                    `
                
                allModalBody[i].appendChild(liListaTwo)
            })


            // ADDING APLICAÇAO 2
            let allLisTwo = document.querySelectorAll(`.modal-body .filtroCombustPesado .listCars`)

            anoApliTwo.forEach((apliTwo) =>{

                cont += 1

                let spanLiTwo = document.createElement('span')
                spanLiTwo.innerHTML = `${apliTwo}`
                // console.log(cont)
                allLisTwo[cont - 1].append(spanLiTwo)
            })

        }



        // SE EXISTIR APLICACAO TRES
        if(aplicacoesThree){
    
            montadoraThree = await aplicacoesThree[0].montadora
            carrosThree = await aplicacoesThree[0].carros
            anoApliThree = await aplicacoesThree[0].anoApli


            //  ADDING MONTADORA 3
            let liMontThree = document.createElement('li')
            liMontThree.classList.add(`montadora`)
            liMontThree.innerHTML = `
                <li class="montadora">${montadoraThree}:</li>
                `
            allModalBody[i].appendChild(liMontThree)


            // ADDING CARROS 3
            carrosThree.map((carroThree) =>{

                let liListaThree = document.createElement('li')
                liListaThree.classList.add(`listCars`)

                liListaThree.innerHTML = `
                <span class="carro">${carroThree}: </span>
                    `
                
                allModalBody[i].appendChild(liListaThree)
            })


            // ADDING APLICAÇAO 3
            let allLisThree = document.querySelectorAll(`.modal-body .filtroCombustPesado .listCars`)

            anoApliThree.forEach((apliThree) =>{

                cont += 1

                let spanLiThree = document.createElement('span')
                spanLiThree.innerHTML = `${apliThree}`
                // console.log(cont)
                allLisThree[cont - 1].append(spanLiThree)
            })



        }



    }

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

    // funcao de filtrar dos btns
    arMotor()

    // mostrando dialog
    dialogFiltroArMotor()

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

// dialog filtro ar motor
async function dialogFiltroArMotor(){
    const dado = await gettingApi()
    const dados = dado.filtroArMotor
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){
        // console.log(dados.length)

        // dados especificos
        code = await dados[i].aplicacoes[0].codeApli
        montadora = await dados[i].aplicacoes[0].montadora
        nameProduct = await dados[i].info
        marcaProduct = await dados[i].marca
        codeProduct = await dados[i].code
        montadora = await dados[i].aplicacoes[0].montadora


        let modalDialog = document.createElement('div')

        modalDialog.innerHTML = `

    <div class="modal fade thisModal" id="${code}" aria-hidden="true" aria-labelledby="modal-filtro-label" tabindex="-1" >
        <div class="modal-dialog modal-dialog-scrollable">

            <div class="modal-content" id="modal-content">

                <div class="modal-header">
                    <h2>Aplicações</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <h5>${nameProduct}</h5>   

                    <ul id="lista-aplicacoes" class="filtroArMotor">
                        <li class="montadora">${montadora}:</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <p><span class="carro">Marca:</span> <span class="marcas">${marcaProduct}</span></p>
                    <p class="carro">C-${codeProduct}</p>
                </div>
            </div>
        </div>
    </div>
    
    `
        
        body.append(modalDialog)


    }

    // especificaçoes
    carsEapli5(dados)

}

// adding cars and aplications in dialog
async function carsEapli5(dados){
    
    let allModalBody = document.querySelectorAll('.modal-body .filtroArMotor')
    // console.log(allModalBody)

    let cont = 0

    for(let i = 0;i < dados.length;i++){

        // APLICAÇÕES
        let aplicacao = await dados[i].aplicacoes[0].anoApli
        let aplicacoesTwo = await dados[i].aplicacoesTwo
        // let aplicacoesThree = await dados[i].aplicacoesThree


        // ADDING CARROS 1
         let carros = await dados[i].aplicacoes[0].carros

         carros.map((carro, index) =>{

             
            let liLista = document.createElement('li')
            liLista.classList.add(`listCars`)
 
            liLista.innerHTML = `
              <span class="carro">${carro}: </span>
 
                 `
            //  console.log(liLista)

            allModalBody[i].appendChild(liLista)
                
         })

         
         // ADDING APLICACOES 1
        let allLis = document.querySelectorAll(`.modal-body .filtroArMotor .listCars`)
        // console.log(allLis.length)
        
        aplicacao.forEach((apli) =>{
            cont += 1

            let spanLi = document.createElement('span')
            spanLi.innerHTML = `${apli}`
            // console.log(cont)
            allLis[cont - 1].append(spanLi)
        })


        // SE EXISTIR APLICACAO DOIS
        if(aplicacoesTwo){

            // console.log(aplicacaoTwo[0].carros)
            montadoraTwo = await aplicacoesTwo[0].montadora
            carrosTwo = await aplicacoesTwo[0].carros
            anoApliTwo = await aplicacoesTwo[0].anoApli

            // console.log(carrosTwo)
        //    ADDING MONTADORA 2
            let liMontTwo = document.createElement('li')
            liMontTwo.classList.add(`montadora`)
            liMontTwo.innerHTML = `
                <li class="montadora">${montadoraTwo}:</li>
                `
            allModalBody[i].appendChild(liMontTwo)


            // ADDING CARROS 2
            carrosTwo.map((carroTwo) =>{

                let liListaTwo = document.createElement('li')
                liListaTwo.classList.add(`listCars`)

                liListaTwo.innerHTML = `
                <span class="carro">${carroTwo}: </span>
                    `
                
                allModalBody[i].appendChild(liListaTwo)
            })


            // ADDING APLICAÇAO 2
            let allLisTwo = document.querySelectorAll(`.modal-body .filtroArMotor .listCars`)

            anoApliTwo.forEach((apliTwo) =>{

                cont += 1

                let spanLiTwo = document.createElement('span')
                spanLiTwo.innerHTML = `${apliTwo}`
                // console.log(cont)
                allLisTwo[cont - 1].append(spanLiTwo)
            })


        }



    }
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

    // chamando dialog
    dialogFiltroArCabine()

}

// adding dialog filtros de ar cabine
async function dialogFiltroArCabine(){
    const dado = await gettingApi()
    const dados = dado.filtroArCabine
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){
        // console.log(dados.length)

        // dados especificos
        code = await dados[i].aplicacoes[0].codeApli
        montadora = await dados[i].aplicacoes[0].montadora
        nameProduct = await dados[i].info
        marcaProduct = await dados[i].marca
        codeProduct = await dados[i].code
        montadora = await dados[i].aplicacoes[0].montadora


        let modalDialog = document.createElement('div')

        modalDialog.innerHTML = `

    <div class="modal fade thisModal" id="${code}" aria-hidden="true" aria-labelledby="modal-filtro-label" tabindex="-1" >
        <div class="modal-dialog modal-dialog-scrollable">

            <div class="modal-content" id="modal-content">

                <div class="modal-header">
                    <h2>Aplicações</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <h5>${nameProduct}</h5>   

                    <ul id="lista-aplicacoes" class="filtroArCabine">
                        <li class="montadora">${montadora}:</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <p><span class="carro">Marca:</span> <span class="marcas">${marcaProduct}</span></p>
                    <p class="carro">C-${codeProduct}</p>
                </div>
            </div>
        </div>
    </div>
    
    `
        
        body.append(modalDialog)

    }

    // adding aplications
    carsEapli6(dados)

}

// adding cars and aplications in dialog
async function carsEapli6(dados){
    // console.log(dados) filtroArCabine

    let allModalBody = document.querySelectorAll('.modal-body .filtroArCabine')
    // console.log(allModalBody)

    let cont = 0

    for(let i = 0;i < dados.length;i++){

        // APLICAÇÕES
        let aplicacao = await dados[i].aplicacoes[0].anoApli
        // let aplicacoesTwo = await dados[i].aplicacoesTwo
        // let aplicacoesThree = await dados[i].aplicacoesThree


        // ADDING CARROS 1
         let carros = await dados[i].aplicacoes[0].carros

         carros.map((carro, index) =>{

             
            let liLista = document.createElement('li')
            liLista.classList.add(`listCars`)
 
            liLista.innerHTML = `
              <span class="carro">${carro}: </span>
 
                 `
            //  console.log(liLista)

            allModalBody[i].appendChild(liLista)
                
         })

         
         // ADDING APLICACOES 1
        let allLis = document.querySelectorAll(`.modal-body .filtroArCabine .listCars`)
        // console.log(allLis.length)
        
        aplicacao.forEach((apli) =>{
            cont += 1

            let spanLi = document.createElement('span')
            spanLi.innerHTML = `${apli}`
            // console.log(cont)
            allLis[cont - 1].append(spanLi)
        })


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

    // adding dialog
    dialogMangoteAr()
}

// adding dialog de mangotes de ar
async function dialogMangoteAr(){
    const dado = await gettingApi()
    const dados = dado.mangoteAR
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){
        // console.log(dados.length)

        // dados especificos
        code = await dados[i].aplicacoes[0].codeApli
        montadora = await dados[i].aplicacoes[0].montadora
        nameProduct = await dados[i].info
        marcaProduct = await dados[i].marca
        codeProduct = await dados[i].code
        montadora = await dados[i].aplicacoes[0].montadora


        let modalDialog = document.createElement('div')

        modalDialog.innerHTML = `

    <div class="modal fade thisModal" id="${code}" aria-hidden="true" aria-labelledby="modal-filtro-label" tabindex="-1" >
        <div class="modal-dialog modal-dialog-scrollable">

            <div class="modal-content" id="modal-content">

                <div class="modal-header">
                    <h2>Aplicações</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <h5>${nameProduct}</h5>   

                    <ul id="lista-aplicacoes" class="mangoteAR">
                        <li class="montadora">${montadora}:</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <p><span class="carro">Marca:</span> <span class="marcas">${marcaProduct}</span></p>
                    <p class="carro">C-${codeProduct}</p>
                </div>
            </div>
        </div>
    </div>
    
    `
        
        body.append(modalDialog)

    }
    
    // adding aplications
    carsEapli7(dados)

}

// adding cars and aplications in dialog
async function carsEapli7(dados){
    // console.log(dados)

    let allModalBody = document.querySelectorAll('.modal-body .mangoteAR')
    // console.log(allModalBody)

    let cont = 0

    for(let i = 0;i < dados.length;i++){

        // APLICAÇÕES
        let aplicacao = await dados[i].aplicacoes[0].anoApli
        // let aplicacoesTwo = await dados[i].aplicacoesTwo
        // let aplicacoesThree = await dados[i].aplicacoesThree


        // ADDING CARROS 1
         let carros = await dados[i].aplicacoes[0].carros

         carros.map((carro, index) =>{

             
            let liLista = document.createElement('li')
            liLista.classList.add(`listCars`)
 
            liLista.innerHTML = `
              <span class="carro">${carro}: </span>
 
                 `
            //  console.log(liLista)

            allModalBody[i].appendChild(liLista)
                
         })

         
         // ADDING APLICACOES 1
        let allLis = document.querySelectorAll(`.modal-body .mangoteAR .listCars`)
        // console.log(allLis.length)
        
        aplicacao.forEach((apli) =>{
            cont += 1

            let spanLi = document.createElement('span')
            spanLi.innerHTML = `${apli}`
            // console.log(cont)
            allLis[cont - 1].append(spanLi)
        })


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

    // funcao filtro dos btns
    filtroTerminais()

    // dialog
    dialogTerminaisDirecao()
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

// adding dialog dos terminais direcao
async function dialogTerminaisDirecao(){
    const dado = await gettingApi()
    const dados = dado.terminaisDirecao
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){
        // console.log(dados.length)

        // dados especificos
        code = await dados[i].aplicacoes[0].codeApli
        montadora = await dados[i].aplicacoes[0].montadora
        nameProduct = await dados[i].info
        marcaProduct = await dados[i].marca
        codeProduct = await dados[i].code
        montadora = await dados[i].aplicacoes[0].montadora


        let modalDialog = document.createElement('div')

        modalDialog.innerHTML = `

    <div class="modal fade thisModal" id="${code}" aria-hidden="true" aria-labelledby="modal-filtro-label" tabindex="-1" >
        <div class="modal-dialog modal-dialog-scrollable">

            <div class="modal-content" id="modal-content">

                <div class="modal-header">
                    <h2>Aplicações</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <h5>${nameProduct}</h5>   

                    <ul id="lista-aplicacoes" class="terminaisDirecao">
                        <li class="montadora">${montadora}:</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <p><span class="carro">Marca:</span> <span class="marcas">${marcaProduct}</span></p>
                    <p class="carro">C-${codeProduct}</p>
                </div>
            </div>
        </div>
    </div>
    
    `
        
        body.append(modalDialog)

    }
    
    carsEapli8(dados)

}

// adding cars and aplications in dialog
async function carsEapli8(dados){
    // console.log(dados)

    let allModalBody = document.querySelectorAll('.modal-body .terminaisDirecao')
    // console.log(allModalBody)

    let cont = 0

    for(let i = 0;i < dados.length;i++){

        // APLICAÇÕES
        let aplicacao = await dados[i].aplicacoes[0].anoApli
        // let aplicacoesTwo = await dados[i].aplicacoesTwo
        // let aplicacoesThree = await dados[i].aplicacoesThree


        // ADDING CARROS 1
         let carros = await dados[i].aplicacoes[0].carros

         carros.map((carro, index) =>{

             
            let liLista = document.createElement('li')
            liLista.classList.add(`listCars`)
 
            liLista.innerHTML = `
              <span class="carro">${carro}: </span>
 
                 `
            //  console.log(liLista)

            allModalBody[i].appendChild(liLista)
                
         })

         
         // ADDING APLICACOES 1
        let allLis = document.querySelectorAll(`.modal-body .terminaisDirecao .listCars`)
        // console.log(allLis.length)
        
        aplicacao.forEach((apli) =>{
            cont += 1

            let spanLi = document.createElement('span')
            spanLi.innerHTML = `${apli}`
            // console.log(cont)
            allLis[cont - 1].append(spanLi)
        })


    }

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

    // funcao de filtrar dos btns
    filtroBarras()

    // dialog
    dialogBarraAxiais()
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

// dialog das barras axiais
async function dialogBarraAxiais(){
    const dado = await gettingApi()
    const dados = dado.barrasAxiais
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){
        // console.log(dados.length)

        // dados especificos
        code = await dados[i].aplicacoes[0].codeApli
        montadora = await dados[i].aplicacoes[0].montadora
        nameProduct = await dados[i].info
        marcaProduct = await dados[i].marca
        codeProduct = await dados[i].code
        montadora = await dados[i].aplicacoes[0].montadora


        let modalDialog = document.createElement('div')

        modalDialog.innerHTML = `

    <div class="modal fade thisModal" id="${code}" aria-hidden="true" aria-labelledby="modal-filtro-label" tabindex="-1" >
        <div class="modal-dialog modal-dialog-scrollable">

            <div class="modal-content" id="modal-content">

                <div class="modal-header">
                    <h2>Aplicações</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <h5>${nameProduct}</h5>   

                    <ul id="lista-aplicacoes" class="barrasAxiais">
                        <li class="montadora">${montadora}:</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <p><span class="carro">Marca:</span> <span class="marcas">${marcaProduct}</span></p>
                    <p class="carro">C-${codeProduct}</p>
                </div>
            </div>
        </div>
    </div>
    
    `
        
        body.append(modalDialog)

    }
    // aplications 
    carsEapli9(dados)
}

// adding cars and aplications in dialog
async function carsEapli9(dados){

    let allModalBody = document.querySelectorAll('.modal-body .barrasAxiais')
    // console.log(allModalBody)

    let cont = 0

    for(let i = 0;i < dados.length;i++){

        // APLICAÇÕES
        let aplicacao = await dados[i].aplicacoes[0].anoApli
        let aplicacoesTwo = await dados[i].aplicacoesTwo
        let aplicacoesThree = await dados[i].aplicacoesThree


        // ADDING CARROS 1
         let carros = await dados[i].aplicacoes[0].carros

         carros.map((carro, index) =>{

             
            let liLista = document.createElement('li')
            liLista.classList.add(`listCars`)
 
            liLista.innerHTML = `
              <span class="carro">${carro}: </span>
 
                 `
            //  console.log(liLista)

            allModalBody[i].appendChild(liLista)
                
         })

         
         // ADDING APLICACOES 1
        let allLis = document.querySelectorAll(`.modal-body .barrasAxiais .listCars`)
        // console.log(allLis.length)
        
        aplicacao.forEach((apli) =>{
            cont += 1

            let spanLi = document.createElement('span')
            spanLi.innerHTML = `${apli}`
            // console.log(cont)
            allLis[cont - 1].append(spanLi)
        })


        // SE EXISTIR APLICACAO DOIS
        if(aplicacoesTwo){

            // console.log(aplicacaoTwo[0].carros)
            montadoraTwo = await aplicacoesTwo[0].montadora
            carrosTwo = await aplicacoesTwo[0].carros
            anoApliTwo = await aplicacoesTwo[0].anoApli

            // console.log(carrosTwo)
        //    ADDING MONTADORA 2
            let liMontTwo = document.createElement('li')
            liMontTwo.classList.add(`montadora`)
            liMontTwo.innerHTML = `
                <li class="montadora">${montadoraTwo}:</li>
                `
            allModalBody[i].appendChild(liMontTwo)


            // ADDING CARROS 2
            carrosTwo.map((carroTwo) =>{

                let liListaTwo = document.createElement('li')
                liListaTwo.classList.add(`listCars`)

                liListaTwo.innerHTML = `
                <span class="carro">${carroTwo}: </span>
                    `
                
                allModalBody[i].appendChild(liListaTwo)
            })


            // ADDING APLICAÇAO 2
            let allLisTwo = document.querySelectorAll(`.modal-body .barrasAxiais .listCars`)

            anoApliTwo.forEach((apliTwo) =>{

                cont += 1

                let spanLiTwo = document.createElement('span')
                spanLiTwo.innerHTML = `${apliTwo}`
                // console.log(cont)
                allLisTwo[cont - 1].append(spanLiTwo)
            })


        }


        // SE EXISTIR APLICACAO TRES
        if(aplicacoesThree){
    
            montadoraThree = await aplicacoesThree[0].montadora
            carrosThree = await aplicacoesThree[0].carros
            anoApliThree = await aplicacoesThree[0].anoApli


            //  ADDING MONTADORA 3
            let liMontThree = document.createElement('li')
            liMontThree.classList.add(`montadora`)
            liMontThree.innerHTML = `
                <li class="montadora">${montadoraThree}:</li>
                `
            allModalBody[i].appendChild(liMontThree)


            // ADDING CARROS 3
            carrosThree.map((carroThree) =>{

                let liListaThree = document.createElement('li')
                liListaThree.classList.add(`listCars`)

                liListaThree.innerHTML = `
                <span class="carro">${carroThree}: </span>
                    `
                
                allModalBody[i].appendChild(liListaThree)
            })


            // ADDING APLICAÇAO 3
            let allLisThree = document.querySelectorAll(`.modal-body .barrasAxiais .listCars`)

            anoApliThree.forEach((apliThree) =>{

                cont += 1

                let spanLiThree = document.createElement('span')
                spanLiThree.innerHTML = `${apliThree}`
                // console.log(cont)
                allLisThree[cont - 1].append(spanLiThree)
            })



        }


    }

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
    // funcao filtrar dos btnc
    filtroEstabili()

    // dialog
    dialogEstabilizadores()
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

// dialog dos estabilizadores
async function dialogEstabilizadores(){

    const dado = await gettingApi()
    const dados = dado.estabilizadores
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){
        // console.log(dados.length)

        // dados especificos
        code = await dados[i].aplicacoes[0].codeApli
        montadora = await dados[i].aplicacoes[0].montadora
        nameProduct = await dados[i].info
        marcaProduct = await dados[i].marca
        codeProduct = await dados[i].code
        montadora = await dados[i].aplicacoes[0].montadora


        let modalDialog = document.createElement('div')

        modalDialog.innerHTML = `

    <div class="modal fade thisModal" id="${code}" aria-hidden="true" aria-labelledby="modal-filtro-label" tabindex="-1" >
        <div class="modal-dialog modal-dialog-scrollable">

            <div class="modal-content" id="modal-content">

                <div class="modal-header">
                    <h2>Aplicações</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <h5>${nameProduct}</h5>   

                    <ul id="lista-aplicacoes" class="estabilizadores">
                        <li class="montadora">${montadora}:</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <p><span class="carro">Marca:</span> <span class="marcas">${marcaProduct}</span></p>
                    <p class="carro">C-${codeProduct}</p>
                </div>
            </div>
        </div>
    </div>
    
    `
        
        body.append(modalDialog)

    }

    carsEapli10(dados)

}

// adding cars and aplications in dialog
async function carsEapli10(dados){
    // console.log(dados)

    let allModalBody = document.querySelectorAll('.modal-body .estabilizadores')
    // console.log(allModalBody)

    let cont = 0

    for(let i = 0;i < dados.length;i++){

        // APLICAÇÕES
        let aplicacao = await dados[i].aplicacoes[0].anoApli
        // let aplicacoesTwo = await dados[i].aplicacoesTwo
        // let aplicacoesThree = await dados[i].aplicacoesThree


        // ADDING CARROS 1
         let carros = await dados[i].aplicacoes[0].carros

         carros.map((carro, index) =>{

             
            let liLista = document.createElement('li')
            liLista.classList.add(`listCars`)
 
            liLista.innerHTML = `
              <span class="carro">${carro}: </span>
 
                 `
            //  console.log(liLista)

            allModalBody[i].appendChild(liLista)
                
         })

         
         // ADDING APLICACOES 1
        let allLis = document.querySelectorAll(`.modal-body .estabilizadores .listCars`)
        // console.log(allLis.length)
        
        aplicacao.forEach((apli) =>{
            cont += 1

            let spanLi = document.createElement('span')
            spanLi.innerHTML = `${apli}`
            // console.log(cont)
            allLis[cont - 1].append(spanLi)
        })

    }



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

    dialogBuchaCaixaDir()
}

// dialog caixa direcao
async function dialogBuchaCaixaDir(){
    const dado = await gettingApi()
    const dados = dado.BuchaCaixaDirecao
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){
        // console.log(dados.length)

        // dados especificos
        code = await dados[i].aplicacoes[0].codeApli
        montadora = await dados[i].aplicacoes[0].montadora
        nameProduct = await dados[i].info
        marcaProduct = await dados[i].marca
        codeProduct = await dados[i].code
        montadora = await dados[i].aplicacoes[0].montadora


        let modalDialog = document.createElement('div')

        modalDialog.innerHTML = `

    <div class="modal fade thisModal" id="${code}" aria-hidden="true" aria-labelledby="modal-filtro-label" tabindex="-1" >
        <div class="modal-dialog modal-dialog-scrollable">

            <div class="modal-content" id="modal-content">

                <div class="modal-header">
                    <h2>Aplicações</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <h5>${nameProduct}</h5>   

                    <ul id="lista-aplicacoes" class="buchasCaixaDir">
                        <li class="montadora">${montadora}:</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <p><span class="carro">Marca:</span> <span class="marcas">${marcaProduct}</span></p>
                    <p class="carro">C-${codeProduct}</p>
                </div>
            </div>
        </div>
    </div>
    
    `
        
        body.append(modalDialog)

    }

    // aplications 
    carsEapli11(dados)
}

// adding cars and aplications in dialog
async function carsEapli11(dados){
    // console.log(dados)


    let allModalBody = document.querySelectorAll('.modal-body .buchasCaixaDir')
    // console.log(allModalBody)

    let cont = 0

    for(let i = 0;i < dados.length;i++){

        // APLICAÇÕES
        let aplicacao = await dados[i].aplicacoes[0].anoApli
        // let aplicacoesTwo = await dados[i].aplicacoesTwo
        // let aplicacoesThree = await dados[i].aplicacoesThree


        // ADDING CARROS 1
         let carros = await dados[i].aplicacoes[0].carros

         carros.map((carro, index) =>{

             
            let liLista = document.createElement('li')
            liLista.classList.add(`listCars`)
 
            liLista.innerHTML = `
              <span class="carro">${carro}: </span>
 
                 `
            //  console.log(liLista)

            allModalBody[i].appendChild(liLista)
                
         })

         
         // ADDING APLICACOES 1
        let allLis = document.querySelectorAll(`.modal-body .buchasCaixaDir .listCars`)
        // console.log(allLis.length)
        
        aplicacao.forEach((apli) =>{
            cont += 1

            let spanLi = document.createElement('span')
            spanLi.innerHTML = `${apli}`
            // console.log(cont)
            allLis[cont - 1].append(spanLi)
        })

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
    // funcao de filtrar dos btns
    filtroBatedor()

    // dialog
    dialogBatedores()

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

// dialog batedores
async function dialogBatedores(){
    const dado = await gettingApi()
    const dados = dado.batedores
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){
        // console.log(dados.length)

        // dados especificos
        code = await dados[i].aplicacoes[0].codeApli
        montadora = await dados[i].aplicacoes[0].montadora
        nameProduct = await dados[i].info
        marcaProduct = await dados[i].marca
        codeProduct = await dados[i].code
        montadora = await dados[i].aplicacoes[0].montadora


        let modalDialog = document.createElement('div')

        modalDialog.innerHTML = `

    <div class="modal fade thisModal" id="${code}" aria-hidden="true" aria-labelledby="modal-filtro-label" tabindex="-1" >
        <div class="modal-dialog modal-dialog-scrollable">

            <div class="modal-content" id="modal-content">

                <div class="modal-header">
                    <h2>Aplicações</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <h5>${nameProduct}</h5>   

                    <ul id="lista-aplicacoes" class="batedores">
                        <li class="montadora">${montadora}:</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <p><span class="carro">Marca:</span> <span class="marcas">${marcaProduct}</span></p>
                    <p class="carro">C-${codeProduct}</p>
                </div>
            </div>
        </div>
    </div>
    
    `
        
        body.append(modalDialog)

    }

    carsEapli12(dados)
}

// adding cars and aplications in dialog
async function carsEapli12(dados){


    let allModalBody = document.querySelectorAll('.modal-body .batedores')
    // console.log(allModalBody)

    let cont = 0

    for(let i = 0;i < dados.length;i++){

        // APLICAÇÕES
        let aplicacao = await dados[i].aplicacoes[0].anoApli
        let aplicacoesTwo = await dados[i].aplicacoesTwo
        let aplicacoesThree = await dados[i].aplicacoesThree


        // ADDING CARROS 1
         let carros = await dados[i].aplicacoes[0].carros

         carros.map((carro, index) =>{

             
            let liLista = document.createElement('li')
            liLista.classList.add(`listCars`)
 
            liLista.innerHTML = `
              <span class="carro">${carro}: </span>
 
                 `
            //  console.log(liLista)

            allModalBody[i].appendChild(liLista)
                
         })

         
         // ADDING APLICACOES 1
        let allLis = document.querySelectorAll(`.modal-body .batedores .listCars`)
        // console.log(allLis.length)
        
        aplicacao.forEach((apli) =>{
            cont += 1

            let spanLi = document.createElement('span')
            spanLi.innerHTML = `${apli}`
            // console.log(cont)
            allLis[cont - 1].append(spanLi)
        })


        // SE EXISTIER APLICACAO DOIS
        if(aplicacoesTwo){

            // console.log(aplicacaoTwo[0].carros)
            montadoraTwo = await aplicacoesTwo[0].montadora
            carrosTwo = await aplicacoesTwo[0].carros
            anoApliTwo = await aplicacoesTwo[0].anoApli

        //    ADDING MONTADORA 2
            let liMontTwo = document.createElement('li')
            liMontTwo.classList.add(`montadora`)
            liMontTwo.innerHTML = `
                <li class="montadora">${montadoraTwo}:</li>
                `
            allModalBody[i].appendChild(liMontTwo)


            // ADDING CARROS 2
            carrosTwo.map((carroTwo) =>{

                let liListaTwo = document.createElement('li')
                liListaTwo.classList.add(`listCars`)

                liListaTwo.innerHTML = `
                <span class="carro">${carroTwo}: </span>
                    `
                
                allModalBody[i].appendChild(liListaTwo)
            })


            // ADDING APLICAÇAO 2
            let allLisTwo = document.querySelectorAll(`.modal-body .batedores .listCars`)

            anoApliTwo.forEach((apliTwo) =>{

                cont += 1

                let spanLiTwo = document.createElement('span')
                spanLiTwo.innerHTML = `${apliTwo}`
                // console.log(cont)
                allLisTwo[cont - 1].append(spanLiTwo)
            })

        }


        // SE EXISTIR APLICACAO TRES
        if(aplicacoesThree){
    
            montadoraThree = await aplicacoesThree[0].montadora
            carrosThree = await aplicacoesThree[0].carros
            anoApliThree = await aplicacoesThree[0].anoApli


            //  ADDING MONTADORA 3
            let liMontThree = document.createElement('li')
            liMontThree.classList.add(`montadora`)
            liMontThree.innerHTML = `
                <li class="montadora">${montadoraThree}:</li>
                `
            allModalBody[i].appendChild(liMontThree)


            // ADDING CARROS 3
            carrosThree.map((carroThree) =>{

                let liListaThree = document.createElement('li')
                liListaThree.classList.add(`listCars`)

                liListaThree.innerHTML = `
                <span class="carro">${carroThree}: </span>
                    `
                
                allModalBody[i].appendChild(liListaThree)
            })


            // ADDING APLICAÇAO 3
            let allLisThree = document.querySelectorAll(`.modal-body .batedores .listCars`)

            anoApliThree.forEach((apliThree) =>{

                cont += 1

                let spanLiThree = document.createElement('span')
                spanLiThree.innerHTML = `${apliThree}`
                // console.log(cont)
                allLisThree[cont - 1].append(spanLiThree)
            })



        }



    }

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

    // funcao de filtrar dos btns
    filtroPivos()

    // dialog
    dialogPivos()

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

// dialog pivos
async function dialogPivos(){
    const dado = await gettingApi()
    const dados = dado.pivos
    // console.log(dados)


    for(let i = 0;i < dados.length;i++){
        // console.log(dados.length)

        // dados especificos
        code = await dados[i].aplicacoes[0].codeApli
        montadora = await dados[i].aplicacoes[0].montadora
        nameProduct = await dados[i].info
        marcaProduct = await dados[i].marca
        codeProduct = await dados[i].code
        montadora = await dados[i].aplicacoes[0].montadora


        let modalDialog = document.createElement('div')

        modalDialog.innerHTML = `

    <div class="modal fade thisModal" id="${code}" aria-hidden="true" aria-labelledby="modal-filtro-label" tabindex="-1" >
        <div class="modal-dialog modal-dialog-scrollable">

            <div class="modal-content" id="modal-content">

                <div class="modal-header">
                    <h2>Aplicações</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <h5>${nameProduct}</h5>   

                    <ul id="lista-aplicacoes" class="pivos">
                        <li class="montadora">${montadora}:</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <p><span class="carro">Marca:</span> <span class="marcas">${marcaProduct}</span></p>
                    <p class="carro">C-${codeProduct}</p>
                </div>
            </div>
        </div>
    </div>
    
    `
        
        body.append(modalDialog)

    }


    carsEapli13(dados)
}

// adding cars and aplications in dialog
async function carsEapli13(dados){
    // console.log(dados)

    let allModalBody = document.querySelectorAll('.modal-body .pivos')
    // console.log(allModalBody)

    let cont = 0

    for(let i = 0;i < dados.length;i++){

        // APLICAÇÕES
        let aplicacao = await dados[i].aplicacoes[0].anoApli
        // let aplicacoesTwo = await dados[i].aplicacoesTwo
        // let aplicacoesThree = await dados[i].aplicacoesThree


        // ADDING CARROS 1
         let carros = await dados[i].aplicacoes[0].carros

         carros.map((carro, index) =>{

             
            let liLista = document.createElement('li')
            liLista.classList.add(`listCars`)
 
            liLista.innerHTML = `
              <span class="carro">${carro}: </span>
 
                 `
            //  console.log(liLista)

            allModalBody[i].appendChild(liLista)
                
         })

         
         // ADDING APLICACOES 1
        let allLis = document.querySelectorAll(`.modal-body .pivos .listCars`)
        // console.log(allLis.length)
        
        aplicacao.forEach((apli) =>{
            cont += 1

            let spanLi = document.createElement('span')
            spanLi.innerHTML = `${apli}`
            // console.log(cont)
            allLis[cont - 1].append(spanLi)
        })
    }


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
    // dialog
    dialogAmortecedor(dados)
}

// dialog amortecedor
async function dialogAmortecedor(){
    const dado = await gettingApi()
    const dados = dado.amortecedores
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){
        // console.log(dados.length)

        // dados especificos
        code = await dados[i].aplicacoes[0].codeApli
        montadora = await dados[i].aplicacoes[0].montadora
        nameProduct = await dados[i].info
        marcaProduct = await dados[i].marca
        codeProduct = await dados[i].code
        montadora = await dados[i].aplicacoes[0].montadora


        let modalDialog = document.createElement('div')

        modalDialog.innerHTML = `

    <div class="modal fade thisModal" id="${code}" aria-hidden="true" aria-labelledby="modal-filtro-label" tabindex="-1" >
        <div class="modal-dialog modal-dialog-scrollable">

            <div class="modal-content" id="modal-content">

                <div class="modal-header">
                    <h2>Aplicações</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <h5>${nameProduct}</h5>   

                    <ul id="lista-aplicacoes" class="amortecedores">
                        <li class="montadora">${montadora}:</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <p><span class="carro">Marca:</span> <span class="marcas">${marcaProduct}</span></p>
                    <p class="carro">C-${codeProduct}</p>
                </div>
            </div>
        </div>
    </div>
    
    `
        
        body.append(modalDialog)

    }

    // dialog 
    carsEapli14(dados)

}

// adding cars and aplications in dialog
async function carsEapli14(dados){
    
    let allModalBody = document.querySelectorAll('.modal-body .amortecedores')
    // console.log(allModalBody)

    let cont = 0

    for(let i = 0;i < dados.length;i++){

        // APLICAÇÕES
        let aplicacao = await dados[i].aplicacoes[0].anoApli
        // let aplicacoesTwo = await dados[i].aplicacoesTwo
        // let aplicacoesThree = await dados[i].aplicacoesThree


        // ADDING CARROS 1
         let carros = await dados[i].aplicacoes[0].carros

         carros.map((carro, index) =>{

             
            let liLista = document.createElement('li')
            liLista.classList.add(`listCars`)
 
            liLista.innerHTML = `
              <span class="carro">${carro}: </span>
 
                 `
            //  console.log(liLista)

            allModalBody[i].appendChild(liLista)
                
         })

         
         // ADDING APLICACOES 1
        let allLis = document.querySelectorAll(`.modal-body .amortecedores .listCars`)
        // console.log(allLis.length)
        
        aplicacao.forEach((apli) =>{
            cont += 1

            let spanLi = document.createElement('span')
            spanLi.innerHTML = `${apli}`
            // console.log(cont)
            allLis[cont - 1].append(spanLi)
        })
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

    // funcao filtrar do btns
    filtroBuchas()

    // dialog
    dialogBuchaBandeja()
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

// dialog buchas da bandeja
async function dialogBuchaBandeja(){

    const dado = await gettingApi()
    const dados = dado.buchaSusp
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){
        // console.log(dados.length)

        // dados especificos
        code = await dados[i].aplicacoes[0].codeApli
        montadora = await dados[i].aplicacoes[0].montadora
        nameProduct = await dados[i].info
        marcaProduct = await dados[i].marca
        codeProduct = await dados[i].code
        montadora = await dados[i].aplicacoes[0].montadora


        let modalDialog = document.createElement('div')

        modalDialog.innerHTML = `

    <div class="modal fade thisModal" id="${code}" aria-hidden="true" aria-labelledby="modal-filtro-label" tabindex="-1" >
        <div class="modal-dialog modal-dialog-scrollable">

            <div class="modal-content" id="modal-content">

                <div class="modal-header">
                    <h2>Aplicações</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <h5>${nameProduct}</h5>   

                    <ul id="lista-aplicacoes" class="buchaBandeja">
                        <li class="montadora">${montadora}:</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <p><span class="carro">Marca:</span> <span class="marcas">${marcaProduct}</span></p>
                    <p class="carro">C-${codeProduct}</p>
                </div>
            </div>
        </div>
    </div>
    
    `
        
        body.append(modalDialog)

    }

    // aplications
    carsEapli15(dados)
}

// adding cars and aplications in dialog
async function carsEapli15(dados){
    // console.log(dados)

    let allModalBody = document.querySelectorAll('.modal-body .buchaBandeja')
    // console.log(allModalBody)

    let cont = 0

    for(let i = 0;i < dados.length;i++){

        // APLICAÇÕES
        let aplicacao = await dados[i].aplicacoes[0].anoApli
        let aplicacoesTwo = await dados[i].aplicacoesTwo
        // let aplicacoesThree = await dados[i].aplicacoesThree


        // ADDING CARROS 1
         let carros = await dados[i].aplicacoes[0].carros

         carros.map((carro, index) =>{

             
            let liLista = document.createElement('li')
            liLista.classList.add(`listCars`)
 
            liLista.innerHTML = `
              <span class="carro">${carro}: </span>
 
                 `
            //  console.log(liLista)

            allModalBody[i].appendChild(liLista)
                
         })

         
         // ADDING APLICACOES 1
        let allLis = document.querySelectorAll(`.modal-body .buchaBandeja .listCars`)
        // console.log(allLis.length)
        
        aplicacao.forEach((apli) =>{
            cont += 1

            let spanLi = document.createElement('span')
            spanLi.innerHTML = `${apli}`
            // console.log(cont)
            allLis[cont - 1].append(spanLi)
        })


        // SE EXISTIER APLICACAO DOIS
        if(aplicacoesTwo){

            // console.log(aplicacaoTwo[0].carros)
            montadoraTwo = await aplicacoesTwo[0].montadora
            carrosTwo = await aplicacoesTwo[0].carros
            anoApliTwo = await aplicacoesTwo[0].anoApli

        //    ADDING MONTADORA 2
            let liMontTwo = document.createElement('li')
            liMontTwo.classList.add(`montadora`)
            liMontTwo.innerHTML = `
                <li class="montadora">${montadoraTwo}:</li>
                `
            allModalBody[i].appendChild(liMontTwo)


            // ADDING CARROS 2
            carrosTwo.map((carroTwo) =>{

                let liListaTwo = document.createElement('li')
                liListaTwo.classList.add(`listCars`)

                liListaTwo.innerHTML = `
                <span class="carro">${carroTwo}: </span>
                    `
                
                allModalBody[i].appendChild(liListaTwo)
            })


            // ADDING APLICAÇAO 2
            let allLisTwo = document.querySelectorAll(`.modal-body .buchaBandeja .listCars`)

            anoApliTwo.forEach((apliTwo) =>{

                cont += 1

                let spanLiTwo = document.createElement('span')
                spanLiTwo.innerHTML = `${apliTwo}`
                // console.log(cont)
                allLisTwo[cont - 1].append(spanLiTwo)
            })

        }


    }



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

    dialogCoxinAmort()
}

// dialog coxins amortecedor
async function dialogCoxinAmort(){
    
    const dado = await gettingApi()
    const dados = dado.coxinsAmort
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){
        // console.log(dados.length)

        // dados especificos
        code = await dados[i].aplicacoes[0].codeApli
        montadora = await dados[i].aplicacoes[0].montadora
        nameProduct = await dados[i].info
        marcaProduct = await dados[i].marca
        codeProduct = await dados[i].code
        montadora = await dados[i].aplicacoes[0].montadora


        let modalDialog = document.createElement('div')

        modalDialog.innerHTML = `

    <div class="modal fade thisModal" id="${code}" aria-hidden="true" aria-labelledby="modal-filtro-label" tabindex="-1" >
        <div class="modal-dialog modal-dialog-scrollable">

            <div class="modal-content" id="modal-content">

                <div class="modal-header">
                    <h2>Aplicações</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <h5>${nameProduct}</h5>   

                    <ul id="lista-aplicacoes" class="coxinsMotor">
                        <li class="montadora">${montadora}:</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <p><span class="carro">Marca:</span> <span class="marcas">${marcaProduct}</span></p>
                    <p class="carro">C-${codeProduct}</p>
                </div>
            </div>
        </div>
    </div>
    
    `
        
        body.append(modalDialog)

    }

    // aplications 
    carsEapli16(dados)
}

// adding cars and aplications in dialog
async function carsEapli16(dados){
    // console.log(dados)

    let allModalBody = document.querySelectorAll('.modal-body .coxinsMotor')
    // console.log(allModalBody)

    let cont = 0

    for(let i = 0;i < dados.length;i++){

        // APLICAÇÕES
        let aplicacao = await dados[i].aplicacoes[0].anoApli
        let aplicacoesTwo = await dados[i].aplicacoesTwo
        // let aplicacoesThree = await dados[i].aplicacoesThree


        // ADDING CARROS 1
         let carros = await dados[i].aplicacoes[0].carros

         carros.map((carro, index) =>{

             
            let liLista = document.createElement('li')
            liLista.classList.add(`listCars`)
 
            liLista.innerHTML = `
              <span class="carro">${carro}: </span>
 
                 `
            //  console.log(liLista)

            allModalBody[i].appendChild(liLista)
                
         })

         
         // ADDING APLICACOES 1
        let allLis = document.querySelectorAll(`.modal-body .coxinsMotor .listCars`)
        // console.log(allLis.length)
        
        aplicacao.forEach((apli) =>{
            cont += 1

            let spanLi = document.createElement('span')
            spanLi.innerHTML = `${apli}`
            // console.log(cont)
            allLis[cont - 1].append(spanLi)
        })

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

    // dialog
    dialogBieletas()
}

// dialog bieletas
async function dialogBieletas(){

    const dado = await gettingApi()
    const dados = dado.bieletas
    // console.log(dados)

    for(let i = 0;i < dados.length;i++){
        // console.log(dados.length)

        // dados especificos
        code = await dados[i].aplicacoes[0].codeApli
        montadora = await dados[i].aplicacoes[0].montadora
        nameProduct = await dados[i].info
        marcaProduct = await dados[i].marca
        codeProduct = await dados[i].code
        montadora = await dados[i].aplicacoes[0].montadora


        let modalDialog = document.createElement('div')

        modalDialog.innerHTML = `

    <div class="modal fade thisModal" id="${code}" aria-hidden="true" aria-labelledby="modal-filtro-label" tabindex="-1" >
        <div class="modal-dialog modal-dialog-scrollable">

            <div class="modal-content" id="modal-content">

                <div class="modal-header">
                    <h2>Aplicações</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <h5>${nameProduct}</h5>   

                    <ul id="lista-aplicacoes" class="bieletas">
                        <li class="montadora">${montadora}:</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <p><span class="carro">Marca:</span> <span class="marcas">${marcaProduct}</span></p>
                    <p class="carro">C-${codeProduct}</p>
                </div>
            </div>
        </div>
    </div>
    
    `
        
        body.append(modalDialog)

    }

    // aplications
    carsEapli17(dados)

}

// adding cars and aplications in dialog
async function carsEapli17(dados){
    // console.log(dados)

    let allModalBody = document.querySelectorAll('.modal-body .bieletas')
    // console.log(allModalBody)

    let cont = 0

    for(let i = 0;i < dados.length;i++){

        // APLICAÇÕES
        let aplicacao = await dados[i].aplicacoes[0].anoApli
        let aplicacoesTwo = await dados[i].aplicacoesTwo
        // let aplicacoesThree = await dados[i].aplicacoesThree


        // ADDING CARROS 1
         let carros = await dados[i].aplicacoes[0].carros

         carros.map((carro, index) =>{

             
            let liLista = document.createElement('li')
            liLista.classList.add(`listCars`)
 
            liLista.innerHTML = `
              <span class="carro">${carro}: </span>
 
                 `
            //  console.log(liLista)

            allModalBody[i].appendChild(liLista)
                
         })

         
         // ADDING APLICACOES 1
        let allLis = document.querySelectorAll(`.modal-body .bieletas .listCars`)
        // console.log(allLis.length)
        
        aplicacao.forEach((apli) =>{
            cont += 1

            let spanLi = document.createElement('span')
            spanLi.innerHTML = `${apli}`
            // console.log(cont)
            allLis[cont - 1].append(spanLi)
        })

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




//  FIM DA INTEGRAÇÃO DA API !!!
















