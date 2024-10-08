
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
    // filtroIniciar()

    // funcao filtrando pesquisa dos oleos
    // filtrarMarcas()

    // fucao dos filtros de oleo simples
    // filtrarFiltrosOleo()

    // fucao dos filtros de oleo pesado
    // filtrandoPesados()

    // funcao filtrando pesquisa dos filtros-combustivel simples
    // combustSimples()

    // funcao filtrando pesquisa dos filtros-combustivel simples
    // combustPesados()

    // funcao filtrando pesquisa dos filtros-ar-motor
    // arMotor()

    // fucao filtrando pesquisa dos terminais de direcao
    // filtroTerminais()

    //fucao filtrando pesquisa dos pivos suspensao
    // filtroPivos()

    // fucao filtrando pesquisa das barras axiais
    // filtroBarras()

    // fucao filtrando pesquisa dos batedores
    // filtroBatedor()

    // funcao filtrando pesquisa das buchas
    // filtroBuchas()

    // funcao filtrando pesquisa dos estabilizadores
    // filtroEstabili()

    // funcao filtrando pesquisa das pastilhas freio
    // filtroPastilha()

    //fucao filtrando pesquisa dos reparos
    // filtroReparo()

    // fucao filtrando pesquisa dos cabos
    // filtroCabos()

    // fucao filtrando pesquisa dos canos
    // filtroCanos()

    // fucao filtrando pesquisa dos cabos
    // filtroCorreiaAlter()

    //funcao filtrando pesquisa dos bojos
    // filtroBojos()

    // funcao filtrando pesquisa intermediarios
    // filtroInter()

    // funcao filtrando pesquisa coxins escapes
    // filtroCoxinEscap()


    // funcoes do fast-search para mostrar pagina
    mostrarInfoFastSearch()

    // funcao dos links carousel
    carouselBanners()

})


//  ESTRUTURA JSON
// {
//     "nome": "",
//     "Lado": "",
//     "image": "",
//     "marca": "",
//     "info": "",
//     "linha": "",
//     "linhaCode": "",
//     "code": "",
//     "linkApli": "#",
//     "price": 0,
//     "qtd": 1
// },


// ALL BTNS FUNCTION
//allCards[c].classList.remove('positionAbsolute')
//allCards[c].classList.remove('fade-out-active')


// FUNCTION BEFORE IF 
// allCards[c].classList.remove('positionAbsolute')
// allCards[c].classList.remove('fade-out-active')
// allCards[c].classList.add('fade-in-active')


// FUNCTION INSIDE IF
// allCards[c].classList.remove('fade-in-active')
// allCards[c].classList.add('fade-out-active')
// setTimeout(function(){
//     allCards[c].classList.add('positionAbsolute')
// }, )



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

    // mostrando rodagem
    allDepart[10].addEventListener('click', () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display='none'
            allSessoes[15].style.display='block'


            if(allSetLinks[10]){
                window.location.href = '#area-escapamento'
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




// PARTE DO UPDATE DA PAGINA
// FAZENDO REQUESTS DE JSONS
























