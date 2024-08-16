
// onload 
document.addEventListener('DOMContentLoaded', () =>{

    //alert(`Sistema ainda em manutenção`)
    // FUCAO AO CLICAR NO TITULO PRINCIPAL

    let allSessoes = document.querySelectorAll('main .sessao')
    let onloadTitlePrinc = document.querySelector('#title-princ')

    onloadTitlePrinc.addEventListener('click', () =>{

        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display=`none`
            allSessoes[0].style.display=`block`
        }
        location.reload()
    })

    // funcao filtrando pesquisa oleos da primeira pagina
    filtroIniciar()

    // funcao filtrando pesquisa dos oleos
    filtrarMarcas()

    // fucao dos filtros de oleo simples
    filtrarFiltrosOleo()

    // fucao dos filtros de oleo pesado
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

    //fucao filtrando pesquisa dos reparos
    filtroReparo()

    // fucao filtrando pesquisa dos cabos
    filtroCabos()

    // fucao filtrando pesquisa dos cabos
    filtroCanos()

    // fucao filtrando pesquisa dos cabos
    filtroCorreiaAlter()




    // funcoes do fast-search para mostrar pagina
    mostrarInfoFastSearch()

    // funcao dos links carousel
    carouselBanners()

})


// funcao das sessoes da pagina
function mostrarInfoFastSearch(){
    // all links A clicando no LI
    let allSetLinks = document.querySelectorAll(`.dropdown-menu .setLink`)
    //console.log(allSetLinks)

    // all links dos filtros clicando no LI
    let allLinksFiltros = document.querySelectorAll('#drop-filtro .btnFiltros')
    //console.log(allLinksFiltros)




    
    // SESSOES
    let allSessoes = document.querySelectorAll('main .sessao')
    //console.log(allSessoes)

    // SEM OS DROPS-DOWN
    let estruturasNAV = document.querySelectorAll('#estrutura-fast-src .estrutura')
    //console.log(estruturasNAV)


    // DROPS-DOWN - filtros
    let allLinkDrop = document.querySelectorAll(`.dropdown-menu .dropdown-link`)
    //console.log(allLinkDrop)

    // DROPS de todos os departamento
    let allDepart = document.querySelectorAll('.dropdown-menu .no-mobile')
    //console.log(allDepart)



    // ACAO DOS DROPS-DOWN -filtros

    // mostrando filtros de oleos 
    allLinkDrop[0].addEventListener(`click`, () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display=`none`
            allSessoes[2].style.display=`block`

            if(allLinksFiltros[0]){
                window.location.href = '#area-filtros'
            }
            
        }
    })


     // mostrando filtros de combustivel
    allLinkDrop[1].addEventListener(`click`, () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display=`none`
            allSessoes[3].style.display=`block`

            if(allLinksFiltros[1]){
                window.location.href = '#area-filtro-combus'
            }
        }
    })


     // mostrando filtros de ar
    allLinkDrop[2].addEventListener(`click`, () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display=`none`
            allSessoes[4].style.display=`block`

            if(allLinksFiltros[2]){
                window.location.href = '#area-filtro-ar'
            }
        }
    })

    

    


    // ACAO DOS LINKS SEM DROP-DOWN

    // mostrar OLEOS
    estruturasNAV[0].addEventListener('click', () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display='none'
            allSessoes[1].style.display='block'
        }
        
    })

    
    //ACAO DOS LINKS DA PARTE - TODOS OS DEPARTAMENTOS
    // mostrando sistema de direção
    allDepart[0].addEventListener('click', () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display='none'
            allSessoes[5].style.display='block'
            
            if(allSetLinks[0]){
                window.location.href = '#area-sistema-direcao'
            }
        
            
            


        }
    })

    // mostrando sistema de suspensão
    allDepart[1].addEventListener('click', () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display='none'
            allSessoes[6].style.display='block'

            if(allSetLinks[1]){
                window.location.href = '#area-sistema-suspensao'
            }
            
        }

        
    })

    // mostrando sistema de freios
    allDepart[2].addEventListener('click', () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display='none'
            allSessoes[7].style.display='block'

            if(allSetLinks[2]){
                window.location.href = '#area-sistema-freios'
            }
        }
    })

    // mostrando sistema de ignição
    allDepart[3].addEventListener('click', () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display='none'
            allSessoes[8].style.display='block'

            if(allSetLinks[3]){
                window.location.href = '#area-sistema-ignicao'
            }
        }
    })

    // mostrando sistema de carga
    allDepart[4].addEventListener('click', () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display='none'
            allSessoes[9].style.display='block'

            if(allSetLinks[4]){
                window.location.href = '#area-sistema-carga'
            }
        }
    })

    // mostrando sistema de partida
    allDepart[5].addEventListener('click', () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display='none'
            allSessoes[10].style.display='block'


            if(allSetLinks[5]){
                window.location.href = '#area-sistema-partida'
            }
           
        }
    })

    // mostrando arrefecimento
    allDepart[6].addEventListener('click', () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display='none'
            allSessoes[11].style.display='block'


            if(allSetLinks[6]){
                window.location.href = '#area-arrefecimento'
            }
        }
    })

    // mostrando combustivel
    allDepart[7].addEventListener('click', () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display='none'
            allSessoes[12].style.display='block'


            if(allSetLinks[7]){
                window.location.href = '#area-combustivel'
            }
        }
    })

    // mostrando transmiçao
    allDepart[8].addEventListener('click', () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display='none'
            allSessoes[13].style.display='block'


            if(allSetLinks[8]){
                window.location.href = '#area-transmissao'
            }
        }
    })


    // mostrando rodagem
    allDepart[9].addEventListener('click', () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display='none'
            allSessoes[14].style.display='block'


            if(allSetLinks[9]){
                window.location.href = '#area-rodagem'
            }
        }
    })
    

    
}


// funcao filtrar oleos da primeira pagina
function filtroIniciar(){
                    
    let allBtns = document.querySelectorAll("#row-inicio-oleos #btns-iniciar-oleos button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-inicio-oleos .card')
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
            if(!(allCards[c]).classList.contains('lubrax')){
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
            if(!(allCards[c]).classList.contains('selen')){
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
            if(!(allCards[c]).classList.contains('mobil')){
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
            if(!(allCards[c]).classList.contains('elaion')){
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
            if(!(allCards[c]).classList.contains('lubel')){
                allCards[c].style.display='none'
            }
            
        }
    })
   

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
            if(!(allCards[c]).classList.contains('lubrax')){
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
            if(!(allCards[c]).classList.contains('selen')){
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
            if(!(allCards[c]).classList.contains('mobil')){
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
            if(!(allCards[c]).classList.contains('elaion')){
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
            if(!(allCards[c]).classList.contains('lubel')){
                allCards[c].style.display='none'
            }
            
        }
    })
   
}


// fucao filtrar pesquisa de filtros de oleo
function filtrarFiltrosOleo(){

    let allBtns = document.querySelectorAll("#row-filtros #estrutra-btn-filtro-oleo button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-filtros .card')
    //console.log(allCards)

    // todos os filtros
    allBtns[0].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'

            //replecing btn active
            for(let b = 0;b < allBtns.length;b++){
                if(allBtns[0]){
                    allBtns[b].classList.remove('.active')
                    allBtns[0].classList.add('.active')
                }
            }
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
            if(!(allCards[c].classList.contains('vw'))){
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
            if(!(allCards[c].classList.contains('toy'))){
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
            if(!(allCards[c].classList.contains('ren'))){
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

            if(!(allCards[c].classList.contains('hyun'))){
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


// fucao filtrando pesquisa dos reparos
function filtroReparo(){
    let allBtns = document.querySelectorAll("#row-reparos #btns-reparos button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-reparos .card')
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

    // BTN renault
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

// fucao filtrando pesquisa correias alternador
function filtroCorreiaAlter(){
    let allBtns = document.querySelectorAll("#row-correia-alter #btns-correia-alter button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-correia-alter .card')
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


    // BTN GM
    allBtns[2].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('gm'))){
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


// fucao filtrando pesquisa de canos
function filtroCanos(){

    let allBtns = document.querySelectorAll("#row-canos #btns-canos button")
    //console.log(allBtns)

    let allCards = document.querySelectorAll('#row-canos .card')
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

    // BTN ford
    allBtns[2].addEventListener('click', () =>{
        for(let c = 0;c < allCards.length;c++){
            allCards[c].style.display='block'

            if(!(allCards[c].classList.contains('ford'))){
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


// logica offcanvas 
document.addEventListener('DOMContentLoaded', () =>{

    let myOffCanvas = document.querySelectorAll('.myOffCanvas')
    //console.log(myOffCanvas)

    let bsOffCanvas = new bootstrap.Offcanvas(myOffCanvas[0]);
    let bsOffCanvas2 = new bootstrap.Offcanvas(myOffCanvas[1]);
    let bsOffCanvas3 = new bootstrap.Offcanvas(myOffCanvas[2])
    let bsOffCanvas4 = new bootstrap.Offcanvas(myOffCanvas[3])
    let bsOffCanvas5 = new bootstrap.Offcanvas(myOffCanvas[4])
    let bsOffCanvas6 = new bootstrap.Offcanvas(myOffCanvas[5])
    let bsOffCanvas7 = new bootstrap.Offcanvas(myOffCanvas[6])
    let bsOffCanvas8 = new bootstrap.Offcanvas(myOffCanvas[7])
    let bsOffCanvas9 = new bootstrap.Offcanvas(myOffCanvas[8])
    let bsOffCanvas10 = new bootstrap.Offcanvas(myOffCanvas[9])
    let bsOffCanvas11 = new bootstrap.Offcanvas(myOffCanvas[10])
    let bsOffCanvas12 = new bootstrap.Offcanvas(myOffCanvas[11])


    let allBtnOff = document.querySelectorAll('.btn-open-offcanvas')
    //console.log(allBtnOff)


    //  filtros ar
    allBtnOff[0].addEventListener('click', (e) =>{
        e.preventDefault()
        e.stopPropagation()
        bsOffCanvas.toggle()
    })

    // terminais
    allBtnOff[1].addEventListener('click', (e) =>{
        e.preventDefault()
        e.stopPropagation()
        bsOffCanvas2.toggle()
    })

    // Suspensao
    allBtnOff[2].addEventListener('click', (e) =>{

        e.preventDefault()
        e.stopPropagation()
        bsOffCanvas3.toggle()
    })

    // freios
    allBtnOff[3].addEventListener('click', (e) =>{

        e.preventDefault()
        e.stopPropagation()
        bsOffCanvas4.toggle()
    })

    // ignicao
    allBtnOff[4].addEventListener('click', (e) =>{

        e.preventDefault()
        e.stopPropagation()
        bsOffCanvas5.toggle()
    })

    // carga
    allBtnOff[5].addEventListener('click', (e) =>{

        e.preventDefault()
        e.stopPropagation()
        bsOffCanvas6.toggle()
    })

    // partida
    allBtnOff[6].addEventListener('click', (e) =>{

        e.preventDefault()
        e.stopPropagation()
        bsOffCanvas7.toggle()
    })

    // arrefecimento
    allBtnOff[7].addEventListener('click', (e) =>{

        e.preventDefault()
        e.stopPropagation()
        bsOffCanvas8.toggle()
    })

    // Combustivel
    allBtnOff[8].addEventListener('click', (e) =>{

        e.preventDefault()
        e.stopPropagation()
        bsOffCanvas9.toggle()
    })

    // transmissao
    allBtnOff[9].addEventListener('click', (e) =>{

        e.preventDefault()
        e.stopPropagation()
        bsOffCanvas10.toggle()
    })

    // rodagem
    allBtnOff[10].addEventListener('click', (e) =>{

        e.preventDefault()
        e.stopPropagation()
        bsOffCanvas11.toggle()
    })

    // escapamentos
    allBtnOff[11].addEventListener('click', (e) =>{

        e.preventDefault()
        e.stopPropagation()
        bsOffCanvas12.toggle()
    })

    

    // document.querySelector('.btn-open-offcanvas').addEventListener('click', (e) =>{
    //     e.preventDefault();
    //     e.stopPropagation();
    //     bsOffCanvas.toggle();
    // })

})


// links dos carousel banners
function carouselBanners(){
    const btnsBanner = document.querySelectorAll('.carousel-item .link-banner')
    //console.log(btnsBanner)

    // SESSOES
    let allSessoes = document.querySelectorAll('main .sessao')
    //console.log(allSessoes)

    btnsBanner[0].addEventListener('click', () =>{
        for(let c = 0; c < allSessoes.length; c++){
            allSessoes[c].style.display='none'
            allSessoes[0].style.display='block'

        }
    })

    btnsBanner[1].addEventListener('click', () =>{
        for(let c = 0; c < allSessoes.length; c++){
            allSessoes[c].style.display='none'
            allSessoes[0].style.display='block'

        }
    })

    


}


