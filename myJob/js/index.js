
// onload 
document.addEventListener('DOMContentLoaded', () =>{

    alert(`Sistema ainda em manutenção`)
    // FUCAO AO CLICAR NO TITULO PRINCIPAL
    let onloadTitlePrinc = document.querySelector('#title-princ')
    onloadTitlePrinc.addEventListener('click', () =>{
        location.reload()
    })

    // fucao do oleo 
    filtrarMarcas()

    // fucao dos filtro de oleo simples
    filtrarFiltrosOleo()

    // fucao dos filtro de oleo pesado
    filtrandoPesados()

    // funcao filtrando pesquisa dos filtros-combustivel simples
    combustSimples()

    // funcao filtrando pesquisa dos filtros-combustivel simples
    combustPesados()

    // funcao filtrando pesquisa dos filtros-ar-motor
    arMotor()

    // fucao filtrando pesquisa dos terminais de direcao
    filtroTerminais()

    //fucao filtrando pesquisa dos pivos suspensao
    filtroPivos()

    // fucao filtrando pesquisa das barras axiais
    filtroBarras()

    // fucao filtrando pesquisa dos batedores
    filtroBatedor()

    // funcao filtrando pesquisa das buchas
    filtroBuchas()

    // funcao filtrando pesquisa dos estabilizadores
    filtroEstabili()

    // funcao filtrando pesquisa das pastilhas freio
    filtroPastilha()


    // funcoes do fast-search para mostrar pagina
    mostrarInfoFastSearch()

    // DROP-TODOS DEPARTAMENTOS MOBILE
    allDepart()

})

// funcao de fade-in-out



// funcao friltrar pesquisa dos oleos! 
function filtrarMarcas(){

    let allBtnMarcas = document.querySelectorAll('#BoxBtnsDoFiltro .btn-filtro')
    //console.log(allBtnMarcas)
    let alloleos = document.querySelectorAll('.projeto-oleo')
    //console.log(alloleos)


    // btn todos 
    allBtnMarcas[0].addEventListener('click', () =>{
        // replacing active btn funcao
        for(let b = 0;b < allBtnMarcas.length;b++){
            if(allBtnMarcas[0]){
                allBtnMarcas[b].classList.remove('BtnActive')
                allBtnMarcas[0].classList.add('BtnActive')
            }
        }
        
        for(let c = 0;c < alloleos.length;c++){
            alloleos[c].style.display='block'
            
        }
    })

    // btn lubrax 
    allBtnMarcas[1].addEventListener('click', () =>{
        // replacing active btn funcao
        for(let b = 0;b < allBtnMarcas.length;b++){
            if(allBtnMarcas[1]){
                allBtnMarcas[b].classList.remove('BtnActive')
                allBtnMarcas[1].classList.add('BtnActive')
            }
        }
        
        // filtrando
        for(let c = 0;c < alloleos.length;c++){
            alloleos[c].style.display='block'
            if(!(alloleos[c]).classList.contains('lubrax')){
                alloleos[c].style.display='none'
            }
            
        }
    })

    // btn selenia
    allBtnMarcas[2].addEventListener('click', () =>{
        // replacing active btn funcao
        for(let b = 0;b < allBtnMarcas.length;b++){
            if(allBtnMarcas[2]){
                allBtnMarcas[b].classList.remove('BtnActive')
                allBtnMarcas[2].classList.add('BtnActive')
            }
        }
        
        // filtrando
        for(let c = 0;c < alloleos.length;c++){
            alloleos[c].style.display='block'
            if(!(alloleos[c]).classList.contains('selen')){
                alloleos[c].style.display='none'
            }
            
        }
    })

    // btn mobil
    allBtnMarcas[3].addEventListener('click', () =>{
        // replacing active btn funcao
        for(let b = 0;b < allBtnMarcas.length;b++){
            if(allBtnMarcas[3]){
                allBtnMarcas[b].classList.remove('BtnActive')
                allBtnMarcas[3].classList.add('BtnActive')
            }
        }
        
        // filtrando
        for(let c = 0;c < alloleos.length;c++){
            alloleos[c].style.display='block'
            if(!(alloleos[c]).classList.contains('mobil')){
                alloleos[c].style.display='none'
            }
            
        }
    })

    // btn elaion
    allBtnMarcas[4].addEventListener('click', () =>{
        // replacing active btn funcao
        for(let b = 0;b < allBtnMarcas.length;b++){
            if(allBtnMarcas[4]){
                allBtnMarcas[b].classList.remove('BtnActive')
                allBtnMarcas[4].classList.add('BtnActive')
            }
        }
        
        // filtrando
        for(let c = 0;c < alloleos.length;c++){
            alloleos[c].style.display='block'
            if(!(alloleos[c]).classList.contains('elaion')){
                alloleos[c].style.display='none'
            }
            
        }
    })

    // btn dulub
    allBtnMarcas[5].addEventListener('click', () =>{
        // replacing active btn funcao
        for(let b = 0;b < allBtnMarcas.length;b++){
            if(allBtnMarcas[5]){
                allBtnMarcas[b].classList.remove('BtnActive')
                allBtnMarcas[5].classList.add('BtnActive')
            }
        }
        
        // filtrando
        for(let c = 0;c < alloleos.length;c++){
            alloleos[c].style.display='block'
            if(!(alloleos[c]).classList.contains('lubel')){
                alloleos[c].style.display='none'
            }
            
        }
    })
   
}


// fucao filtrar pesquisa de filtros de oleo
function filtrarFiltrosOleo(){

    let allBtnFiltro = document.querySelectorAll('#estrutra-btn-filtro-oleo .btns-filtro-oleo')
    //console.log(allBtnFiltro)
    let allFiltros = document.querySelectorAll('#row-filtros .projeto-filtro-oleo')
    //console.log(allFiltros)

    // todos os filtros
    allBtnFiltro[0].addEventListener('click', () =>{
        for(let c = 0;c < allFiltros.length;c++){
            allFiltros[c].style.display='block'

            //replecing btn active
            for(let b = 0;b < allBtnFiltro.length;b++){
                if(allBtnFiltro[0]){
                    allBtnFiltro[b].classList.remove('FiltroOleoActive')
                    allBtnFiltro[0].classList.add('FiltroOleoActive')
                }
            }
        }
    })

    // filtro Fiat 
    allBtnFiltro[1].addEventListener('click', () =>{
        for(let c = 0;c < allFiltros.length;c++){
            // mostrar todos antes de filtrar 
            allFiltros[c].style.display='block'

            //replecing btn active
            for(let b = 0;b < allBtnFiltro.length;b++){
                if(allBtnFiltro[1]){
                    allBtnFiltro[b].classList.remove('FiltroOleoActive')
                    allBtnFiltro[1].classList.add('FiltroOleoActive')
                }
            }


            //filtrando
            if(!(allFiltros[c].classList.contains('fiat'))){
                allFiltros[c].style.display='none'
                
            }
        }
    })

    // filtro GM
    allBtnFiltro[2].addEventListener('click', () =>{

        for(let c = 0;c < allFiltros.length;c++){
            // mostrar todos antes de filtrar 
            allFiltros[c].style.display='block'

            //replecing btn active
            for(let b = 0;b < allBtnFiltro.length;b++){
                if(allBtnFiltro[2]){
                    allBtnFiltro[b].classList.remove('FiltroOleoActive')
                    allBtnFiltro[2].classList.add('FiltroOleoActive')
                }
            }


            //filtrando
            if(!(allFiltros[c].classList.contains('gm'))){
                allFiltros[c].style.display='none'
                
            }
        }
    })

    // btn VW
    allBtnFiltro[3].addEventListener('click', () =>{

        for(let c = 0;c < allFiltros.length;c++){
            // mostrar todos antes de filtrar 
            allFiltros[c].style.display='block'

            //replecing btn active
            for(let b = 0;b < allBtnFiltro.length;b++){
                if(allBtnFiltro[3]){
                    allBtnFiltro[b].classList.remove('FiltroOleoActive')
                    allBtnFiltro[3].classList.add('FiltroOleoActive')
                }
            }


            //filtrando
            if(!(allFiltros[c].classList.contains('vw'))){
                allFiltros[c].style.display='none'
                
            }
        }
    })

    // btn toyota
    allBtnFiltro[4].addEventListener('click', () =>{

        for(let c = 0;c < allFiltros.length;c++){
            // mostrar todos antes de filtrar 
            allFiltros[c].style.display='block'

            //replecing btn active
            for(let b = 0;b < allBtnFiltro.length;b++){
                if(allBtnFiltro[4]){
                    allBtnFiltro[b].classList.remove('FiltroOleoActive')
                    allBtnFiltro[4].classList.add('FiltroOleoActive')
                }
            }


            //filtrando
            if(!(allFiltros[c].classList.contains('toy'))){
                allFiltros[c].style.display='none'
                
            }
        }
    })

    // btn renault
    allBtnFiltro[5].addEventListener('click', () =>{

        for(let c = 0;c < allFiltros.length;c++){
            // mostrar todos antes de filtrar 
            allFiltros[c].style.display='block'

            //replecing btn active
            for(let b = 0;b < allBtnFiltro.length;b++){
                if(allBtnFiltro[5]){
                    allBtnFiltro[b].classList.remove('FiltroOleoActive')
                    allBtnFiltro[5].classList.add('FiltroOleoActive')
                }
            }


            //filtrando
            if(!(allFiltros[c].classList.contains('ren'))){
                allFiltros[c].style.display='none'
                
            }
        }
    })

    // btn ford
    allBtnFiltro[6].addEventListener('click', () =>{

        for(let c = 0;c < allFiltros.length;c++){
            // mostrar todos antes de filtrar 
            allFiltros[c].style.display='block'

            //replecing btn active
            for(let b = 0;b < allBtnFiltro.length;b++){
                if(allBtnFiltro[6]){
                    allBtnFiltro[b].classList.remove('FiltroOleoActive')
                    allBtnFiltro[6].classList.add('FiltroOleoActive')
                }
            }


            //filtrando
            if(!(allFiltros[c].classList.contains('ford'))){
                allFiltros[c].style.display='none'
                
            }
        }
    })

}


// funcao filtrar pesquisa dos filtros pesados
function filtrandoPesados(){

    let allBtns = document.querySelectorAll('#btn-filtros-pesados .btn-filtros-pesados')
    //console.log(allBtns)
    let allFiltroPesado = document.querySelectorAll('#row-filtros-pesados .filtros-pesados')
    //console.log(allFiltroPesado)

    // todos 
    allBtns[0].addEventListener('click', () =>{
        // replecing active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('pesadoActive')
                allBtns[0].classList.add('pesadoActive')
                
            }
        }

        // filtrando filtros 
        for(let c = 0;c < allFiltroPesado.length;c++){
            allFiltroPesado[c].style.display='block'
        }



    })


    // btn ford pesado 
    allBtns[1].addEventListener('click', () =>{

        // replecing active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[1]){
                allBtns[b].classList.remove('pesadoActive')
                allBtns[1].classList.add('pesadoActive')
                
            }
        }


        // filtrando filtros 
        for(let c = 0;c < allFiltroPesado.length;c++){
            allFiltroPesado[c].style.display='block'

            if(!(allFiltroPesado[c].classList.contains('ford-pesado'))){
                allFiltroPesado[c].style.display='none'
                
            }
        }
    })

    // btn hyundai 
    allBtns[2].addEventListener('click', () =>{

        // replecing active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[2]){
                allBtns[b].classList.remove('pesadoActive')
                allBtns[2].classList.add('pesadoActive')
                
            }
        }


        // filtrando filtros 
        for(let c = 0;c < allFiltroPesado.length;c++){
            allFiltroPesado[c].style.display='block'

            if(!(allFiltroPesado[c].classList.contains('hyun'))){
                allFiltroPesado[c].style.display='none'
                
            }
        }
    })

    // btn mercedez
    allBtns[3].addEventListener('click', () =>{

        // replecing active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[3]){
                allBtns[b].classList.remove('pesadoActive')
                allBtns[3].classList.add('pesadoActive')
                
            }
        }


        // filtrando filtros
        for(let c = 0;c < allFiltroPesado.length;c++){
            allFiltroPesado[c].style.display='block'

            if(!(allFiltroPesado[c].classList.contains('benz'))){
                allFiltroPesado[c].style.display='none'
                
            }
        }
    })

    // gm pesados 
    allBtns[4].addEventListener('click', () =>{

        // replecing active
        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[4]){
                allBtns[b].classList.remove('pesadoActive')
                allBtns[4].classList.add('pesadoActive')
                
            }
        }


        // filtrando filtros
        for(let c = 0;c < allFiltroPesado.length;c++){
            allFiltroPesado[c].style.display='block'

            if(!(allFiltroPesado[c].classList.contains('gm-pesado'))){
                allFiltroPesado[c].style.display='none'
                
            }
        }
    })

}


// funcao das sessoes da pagina
function mostrarInfoFastSearch(){
    // SESSOES
    let allSessoes = document.querySelectorAll('main .sessao')
    //console.log(allSessoes)

    // SEM OS DROPS-DOWN
    let estruturasNAV = document.querySelectorAll('#estrutura-fast-src .estrutura')
    //console.log(estruturasNAV)


    // DROPS-DOWN
    let allLinkDrop = document.querySelectorAll(`.dropdown-menu .dropdown-link`)
    //console.log(allLinkDrop)

    // DROPS de todos os departamento
    let allDepart = document.querySelectorAll('.dropdown-menu .no-mobile')
    //console.log(allDepart)



    // ACAO DOS DROPS-DOWN

    // mostrando oleos 
    allLinkDrop[0].addEventListener(`click`, () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display=`none`
            allSessoes[0].style.display=`block`
        }
    })

     // mostrando fluidos de freio
    allLinkDrop[1].addEventListener(`click`, () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display=`none`
            allSessoes[1].style.display=`block`
        }
    })

    // mostrando filtro oleo
    allLinkDrop[2].addEventListener(`click`, () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display=`none`
            allSessoes[2].style.display=`block`
        }
    })

    // mostrando filtros combustivel
    allLinkDrop[3].addEventListener(`click`, () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display=`none`
            allSessoes[3].style.display=`block`
        }
    })

    // mostrando filtros de ar
    allLinkDrop[4].addEventListener(`click`, () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display=`none`
            allSessoes[4].style.display=`block`
        }
    })




    // ACAO DOS LINKS SEM DROP-DOWN

    // mostrar baterias
    estruturasNAV[0].addEventListener('click', () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display='none'
            allSessoes[5].style.display='block'
        }
        
    })

    
    //ACAO DOS LINKS DA PARTE - TODOS OS DEPARTAMENTOS

    // mostrando sistema de direção
    allDepart[0].addEventListener('click', () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display='none'
            allSessoes[6].style.display='block'
        }
    })

    // mostrando sistema de suspensão
    allDepart[1].addEventListener('click', () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display='none'
            allSessoes[7].style.display='block'
        }
    })

    // mostrando sistema de freios
    allDepart[2].addEventListener('click', () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display='none'
            allSessoes[8].style.display='block'
        }
    })
    

    
}


// DROP-TODOS DEPARTAMENTOS MOBILE
function allDepart(){

    let allSessoes = document.querySelectorAll('main .sessao')
    //console.log(allSessoes)


    let allMobileLinks = document.querySelectorAll('.dropdown-menu .mobile')
    //console.log(allMobileLinks)

    // BTN-OLEO-MOBILE 
    allMobileLinks[0].addEventListener(`click`, () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display=`none`
            allSessoes[0].style.display=`block`
        }
    })

    // BTN-OLEO-FREIO 
    allMobileLinks[1].addEventListener(`click`, () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display=`none`
            allSessoes[1].style.display=`block`
        }
    })

    // BTN-BATERIA
    allMobileLinks[2].addEventListener(`click`, () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display='none'
            allSessoes[5].style.display='block'
        }
    })

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
            allCards[c].style.display='block'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('gm'))){
                allCards[c].style.display='none'
            }
        } 

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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('fiat'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('vws'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('ford'))){
                allCards[c].style.display='none'
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
       
// funcao filtrar pesquisa dos filtros combustivel simples
function combustPesados(){
    let allBtns = document.querySelectorAll('#all-btns-combust-pesado button')
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-filtro-combus .filtro-pesado')
    //console.log(allCards)

    // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('gm'))){
                allCards[c].style.display='none'
            }
        } 

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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('toy'))){
                allCards[c].style.display='none'
            }
        } 

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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('benz'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('ford'))){
                allCards[c].style.display='none'
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
        
// funcao filtrar pesquisa dos filtros de ar motor
function arMotor(){
    let allBtns = document.querySelectorAll("#all-btns-filtro-ar-motor button")
    //console.log(allBtnsFiltroMotor)

    let allCards = document.querySelectorAll('#row-filtros-ar-motor .filtro-ar-motor')
    //console.log(allCards)

    // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('gm'))){
                allCards[c].style.display='none'
            }
        } 

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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('vws'))){
                allCards[c].style.display='none'
            }
        } 

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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('fiat'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('ford'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('rena'))){
                allCards[c].style.display='none'
            }
        } 

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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('benz'))){
                allCards[c].style.display='none'
            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[6]){
                allBtns[b].classList.remove('active')
                allBtns[6].classList.add('active')
            }
        }
    })

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
            allCards[c].style.display='block'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('fiat'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('vws'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('gm'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('nissan'))){
                allCards[c].style.display='none'
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
        
// funcao filtrar pesquisa dos pivos
function filtroPivos(){

    let allBtns = document.querySelectorAll("#btns-pivos button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-pivos .card')
    //console.log(allCards)


    // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('fiat'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('vws'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('gm'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('ford'))){
                allCards[c].style.display='none'
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

// fucao filtrando pesquisa das barras axiais
function filtroBarras(){

    let allBtns = document.querySelectorAll("#row-axiais #sistema-btns button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-axiais .card')
    //console.log(allCards)

    

    // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('fiat'))){
                allCards[c].style.display='none'
                
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('vws'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('gm'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('ford'))){
                allCards[c].style.display='none'
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

// fucao filtrando pesquisa dos batedores
function filtroBatedor(){
    let allBtns = document.querySelectorAll("#row-batedores #btns-batedores button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-batedores .card')
    //console.log(allCards)


    // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('fiat'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('vws'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('gm'))){
                allCards[c].style.display='none'
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

// fucao filtrando pesquisa das buchas
function filtroBuchas(){

    let allBtns = document.querySelectorAll("#row-buchas #btns-buchas button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-buchas .card')
    //console.log(allCards)

    // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('fiat'))){
                allCards[c].style.display='none'
                
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('vws'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('gm'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('ford'))){
                allCards[c].style.display='none'
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

// fucao filtrando pesquisa dos estabilizadores
function filtroEstabili(){

    let allBtns = document.querySelectorAll("#row-estabilizadores #btn-estabili button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-estabilizadores .card')
    //console.log(allCards)


     // BTN TODOS
     allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('fiat'))){
                allCards[c].style.display='none'
                
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('vws'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('gm'))){
                allCards[c].style.display='none'
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

// fucao filtrando pesquisa das pastilhas de freio
function filtroPastilha(){
    let allBtns = document.querySelectorAll("#row-pastilhas #btns-pastilha button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-pastilhas .card')
    //console.log(allCards)



    // BTN TODOS
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('fiat'))){
                allCards[c].style.display='none'
                
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('vws'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('gm'))){
                allCards[c].style.display='none'
            }
        } 

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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('toy'))){
                allCards[c].style.display='none'
            }
        } 

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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('ford'))){
                allCards[c].style.display='none'
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
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('rena'))){
                allCards[c].style.display='none'
            }
        } 

        for(let b = 0;b < allBtns.length;b++){
            if(allBtns[6]){
                allBtns[b].classList.remove('active')
                allBtns[6].classList.add('active')
            }
        }
    })

}




// logica offcanvas 
document.addEventListener('DOMContentLoaded', () =>{

    let myOffCanvas = document.querySelectorAll('.myOffCanvas')
    //console.log(myOffCanvas)

    let bsOffCanvas = new bootstrap.Offcanvas(myOffCanvas[0]);
    let bsOffCanvas2 = new bootstrap.Offcanvas(myOffCanvas[1]);
    let bsOffCanvas3 = new bootstrap.Offcanvas(myOffCanvas[2])

    let allBtnOff = document.querySelectorAll('.btn-open-offcanvas')
    //console.log(allBtnOff)


    // terminais 
    allBtnOff[0].addEventListener('click', (e) =>{
        e.preventDefault()
        e.stopPropagation()
        bsOffCanvas.toggle()
    })

    // Suspensao
    allBtnOff[1].addEventListener('click', (e) =>{
        e.preventDefault()
        e.stopPropagation()
        bsOffCanvas2.toggle()
    })


    allBtnOff[2].addEventListener('click', (e) =>{

        e.preventDefault()
        e.stopPropagation()
        bsOffCanvas3.toggle()
    })

    

    // document.querySelector('.btn-open-offcanvas').addEventListener('click', (e) =>{
    //     e.preventDefault();
    //     e.stopPropagation();
    //     bsOffCanvas.toggle();
    // })

})



