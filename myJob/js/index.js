
// SECTION NAVIGATIONS
let allSessoes = document.querySelectorAll('main .sessao')
let currSectionId = 'inicial'


function goToSection(sectionId){

    if(currSectionId === sectionId) {
        window.location.href=`#${currSectionId}`
        return
    }

    document.getElementById(currSectionId).style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';

    window.location.href=`#${sectionId}`
  
    currSectionId = sectionId;
}

let dropdownMenuLinks = document.querySelector('.dropdown-menu')

dropdownMenuLinks.addEventListener('click', function(event){
    const link = event.target.closest('a.setLink');
    
    if (!link) return;

    event.preventDefault();

    const targetId = link.getAttribute('href').substring(1); 
    goToSection(targetId);
})



// OFFCANVAS  
document.addEventListener('DOMContentLoaded', () =>{

    let myOffCanvas = document.querySelectorAll('.myOffCanvas')
    let allBtnOff = document.querySelectorAll('.btn-open-offcanvas')

    const offCanvaInstances = Array.from(myOffCanvas).map(el => bootstrap.Offcanvas.getOrCreateInstance(el))

    allBtnOff.forEach((btn, index) =>{
        
        if(offCanvaInstances[index]){
            btn.addEventListener('click', (e) =>{
                e.preventDefault()
                e.stopPropagation()
                offCanvaInstances[index].toggle()
            })
        }
    })

})





// PRODUCTS PART


let body = document.querySelector('body')
let loading = document.querySelector('.loading')
let containerInicial = document.querySelector('.container_inicial')


const listCards = []
const apiTest = './allpeaces.json'



async function getAllProducts(){
    const resp = await fetch(apiTest)
    const dado = await resp.json()
    return dado
}


publishingAllCards()

async function publishingAllCards(){
    const data = await getAllProducts()
    
    loading.style.display="flex"
    containerInicial.style.display="none"

    for(let category in data){
        
        const products = data[category]

        for(let i = 0;i < products.length;i++){
            const product = products[i]
            listCards.push(product) // keeping track of all the products

            // create cart elements
            let card = document.createElement('div')
            card.classList.add('col-md-3', 'card')
            if(product.marca != ''){
                card.classList.add(product.marca)
            }
            card.id = product.id;


            if(product.qtd == 0){
                card.classList.add('acabou')
            }

            if(product.linhaCode){
                card.classList.add(product.linhaCode)
            }
            if(product.secundLineCode){
                card.classList.add(product.secundLineCode)
            }
            if(product.thirdLineCode){
                card.classList.add(product.thirdLineCode)
            }

            

            createHTMLCard(card, product)



            if(product.aplicacoes){
                generateDialogs(product)
            }

            const structure = document.getElementById('row-'+category)

            if(category === 'oleos'){
                const estruturaOleo = document.querySelector('#row-inicio-oleos')
                const estrutura2Oleo = document.querySelector('#row-oleos')

                let cardCloned = card.cloneNode(true)
                
                estruturaOleo.appendChild(card)
                estrutura2Oleo.appendChild(cardCloned)
            }
            
            else if(structure){
                structure.appendChild(card)
            }else{
                console.warn(`Element with ID 'row-${category}' not found.`)
            }
            
        }
    }

    getAllFilterBtns()

    loading.style.display="none"
    containerInicial.style.display="block"
    console.log('Data loaded!')
}

function createHTMLCard(card, product){

    return card.innerHTML = `
            <img src="${product.image}" alt="" class="img-fluid">
            <div class="card-body">
                <h5 class="card-title">${product.nome} ${product.marca}</h5>
                <p class="card-text" title="${card.id}">${product.info != undefined ? product.info : ''}</p>
                <p class="card-text">${product.linha != undefined ? 'Linha '+product.linha : ''}</p>
            </div>

            <div class='card-footer'>

                <button style="display: ${product.aplicacoes ? 'block' : 'none'}" type="button" class="padraoBtn" data-bs-toggle="modal" data-bs-target="${product.linkApli}"><span class="btnTxtAplicacoes">Aplicações</span></button>

                <button class="btnBuyAlone">
                    <span class="priceBuy">${product.price.toFixed(2).replace('.',',')}</span>
                    <span class="txtBuy">Comprar</span>
                </button>
            </div> `
}







// DIALOGS
function generateDialogs(product){
    
    let modalDialog = document.createElement('div')

    modalDialog.innerHTML = `

    <div class="modal fade thisModal" id="${product.aplicacoes[0].codeApli}" aria-hidden="true" aria-labelledby="modal-filtro-label" tabindex="-1" >
        <div class="modal-dialog modal-dialog-scrollable">

            <div class="modal-content" id="modal-content">

                <div class="modal-header">
                    <h2>Aplicações</h2>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <h5 title="${product.id}">${product.info}</h5>   

                    <ul id="lista-aplicacoes" class="ulListas id-${product.linkApli.replace(/[\/-]/g,'').replace('#', '')}">
                        <li class="montadora">${product.aplicacoes[0].montadora}:</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <p><span class="carro">Marca:</span> <span class="marcas">${product.marca}</span></p>
                    <p class="carro">C-${product.code}</p>
                </div>
            </div>
        </div>
    </div>
    
    `
    body.append(modalDialog)

    addCarAplications(product)
}


function addCarAplications(product){
    
    let uniqueClass = `id-${product.linkApli.replace(/[\/-]/g,'').replace('#', '')}`
    let allModalBody = document.querySelector(`.modal-body .${uniqueClass}`)
    let cont = 0

    let aplicacoesTwo = product.aplicacoesTwo
    let aplicacoesThree = product.aplicacoesThree

    let carros = product.aplicacoes[0].carros
    let anoApliOne = product.aplicacoes[0].anoApli
    

    // adding cars
    carros.forEach(carro =>{

        let liLista = document.createElement('li')
        liLista.classList.add(`listCars`)

        liLista.innerHTML = `<span class="carro">${carro}: </span>`
        
        allModalBody.appendChild(liLista)        
    })

    let allLis = document.querySelectorAll(`.modal-body .${uniqueClass} .listCars`)
    // adding applications
    anoApliOne.forEach(apli =>{ 
        cont += 1

        let spanLi = document.createElement('span')
        spanLi.innerHTML = `${apli}`
        allLis[cont - 1].append(spanLi)
    })


    
    if(aplicacoesTwo){

        let montadoraTwo = aplicacoesTwo[0].montadora
        let carrosTwo = aplicacoesTwo[0].carros
        let anoApliTwo = aplicacoesTwo[0].anoApli

        addingCarsAndAppliences(montadoraTwo, carrosTwo, anoApliTwo, uniqueClass, allModalBody, cont)
    }


    if(aplicacoesThree){
    
        let montadoraThree = aplicacoesThree[0].montadora
        let carrosThree = aplicacoesThree[0].carros
        let anoApliThree = aplicacoesThree[0].anoApli

        addingCarsAndAppliences(montadoraThree, carrosThree, anoApliThree, uniqueClass, allModalBody, cont)

    }


}


function addingCarsAndAppliences(montadora, carros, anoApli, uniqueClass, allModalBody, cont){

    //   ADDING MONTADORA 
        let liMontadora = document.createElement('li')
        liMontadora.classList.add(`montadora`)
        liMontadora.innerHTML = `
        <li class="montadora">${montadora}:</li>
        `
        allModalBody.appendChild(liMontadora)


        // ADDING CARs
        carros.map(carro =>{

            let liListCars = document.createElement('li')
            liListCars.classList.add(`listCars`)
            liListCars.innerHTML = `
            <span class="carro">${carro}: </span>
            `
            allModalBody.appendChild(liListCars)
        })


        // ADDING APLICATIONS
        let allListApli = document.querySelectorAll(`.modal-body .${uniqueClass} .listCars`)

        anoApli.forEach(apli =>{

            cont += 1
            let spanLine = document.createElement('span')
            spanLine.innerHTML = `${apli}`
            allListApli[cont - 1].append(spanLine)
        })

}





// FILTER BUTTONS
let btnMobileWrap = document.querySelectorAll('.btn-mobile-wrap')

function getAllFilterBtns(){
    let res = []
    
    btnMobileWrap.forEach(parentEl =>{
        res.push(document.querySelectorAll(`#${parentEl.id} button`))
    }) 
    return res
}


let nodeListArr = getAllFilterBtns()

let allBtns = nodeListArr.flatMap(nodeList => Array.from(nodeList))

allBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        e.preventDefault();
        allBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const btnText = btn.textContent.trim().toLowerCase()
        
        let currBlockId = btn.parentElement.parentElement.id
        let allCards = document.querySelectorAll(`#${currBlockId} .card`)
        

        allCards.forEach(card =>{
            card.classList.remove('fade-in-active', 'fade-out-active', 'positionAbsolute')

            if(btnText === 'todos'){
                card.classList.add('fade-in-active')
            }else{

                if(card.classList.contains(btnText) || btnText === 'volkswagen' && card.classList.contains('vws')){
                    card.classList.add('fade-in-active')
                }else {
                    // No match — hide with animation
                    card.classList.add('fade-out-active');
                    setTimeout(() => {
                        card.classList.add('positionAbsolute');
                    }, 100); // fade-out animation
                }
            }

        })
    });
});



        







// CART SHOPPING

let carts = []
let cartsPrice = [] // SEGUNDO CART ARRAY PARA USAR NA FUNCAO DE DENTRO DO CART



let cartPart = document.querySelector('.boxCart')
let closeShopping = document.querySelector('.closeShopping')



// ativando e desativando cart shop list
cartPart.addEventListener('click', () =>{
    body.classList.toggle('activingCart')

    // tirando o scroll y do mobile
    if(window.innerWidth <= 480){
        body.style.overflowY="hidden"
    }

})

closeShopping.addEventListener('click', () =>{
    body.classList.toggle('activingCart')
    body.style.overflowY="scroll"

})





// INSIDE cart shopping
let listaDoCart = document.querySelector('.listCart')
let iconQtdPecas = document.querySelector('.qtdPecas')
let valorCompra = document.querySelector('.valorCompra')


// Capturando ID E PRICE dos produtos
document.addEventListener('click', (event) =>{
    let positionClicked = event.target

    let seAcabouProduct = positionClicked.closest('.acabou')
    let btnBuyAloneClicked = positionClicked.classList.contains('btnBuyAlone')
    let btnBuyClicked = positionClicked.classList.contains('btnBuy')

    if(btnBuyClicked && seAcabouProduct || btnBuyAloneClicked && seAcabouProduct){
        // mostrar notifications toast
        const toastBody = document.querySelector('#liveToast')

        const toast = new bootstrap.Toast(toastBody, {
            delay: 3000 // Tempo em milissegundos
        });
        toast.show()
    }
    else if(btnBuyAloneClicked || btnBuyClicked){

        const product_id = positionClicked.closest('.card').id
        const priceTxt = positionClicked.querySelector('.priceBuy').textContent.replace(',','.')

        const priceFloatString = parseFloat(priceTxt).toFixed(2)
        const priceNum = Number(priceFloatString)

        addToCart(product_id, priceNum)
    }
})



// definindo quantidade se ja existir ou nao
function addToCart(product_id, priceNum){
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id)

    
    if(carts.length <= 0){
        carts = [
            {
                product_id: product_id,
                quantity: 1,
                price: priceNum
            }
        ]

        cartsPrice = [
            {
                product_id: product_id,
                quantity: 1,
                price: priceNum
            }
        ]
        
        // console.log(cartsPrice)
    }else if(positionThisProductInCart < 0){
        carts.push(
            {
                product_id: product_id,
                quantity: 1,
                price: priceNum
            }
        )

        cartsPrice.push(
            {
                product_id: product_id,
                quantity: 1,
                price: priceNum
            }
        )
        // console.log(cartsPrice)

    }else{
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1
        carts[positionThisProductInCart].price = carts[positionThisProductInCart].quantity * priceNum

        // CART PRICE
        cartsPrice[positionThisProductInCart].quantity = cartsPrice[positionThisProductInCart].quantity + 1

    }

    
    addToCartHtml()
}

// adding structure html inside the cart
function addToCartHtml(){
    listaDoCart.innerHTML = ''
    let totalQtd = 0
    let totalPrice = 0

    
    carts.forEach((card, key) => {

        totalQtd += card.quantity
        totalPrice += card.price
        
        
        let positionProduct = listCards.findIndex((value) => value.id == card.product_id)
        let info = listCards[positionProduct]
        // console.log(info)


        if(carts.length > 0){

            let liCart = document.createElement('li')
            liCart.dataset.id = card.product_id

            liCart.innerHTML = `
                <img src="${info.image}" alt="" class="imgOfCart"> <span>${info.nome} ${info.info}</span> <div class="itemQtd"> <button onclick="changeQtd(${key}, ${card.quantity + 1})"><i class="fa-solid fa-plus"></i></button> <span class="cartQtdNum">${card.quantity}</span> <button class="minus" onclick="changeQtd(${key}, ${card.quantity - 1})"><i class="fa-solid fa-minus"></i></button></div>

            `
            listaDoCart.appendChild(liCart)

        }

    })
    

    iconQtdPecas.innerHTML = totalQtd
    valorCompra.innerHTML = totalPrice.toFixed(2).replace('.',',')
}


// somando e deletando de acordo com os btns
// UTILIZANDO O CART PRICE AQUI
function changeQtd(key, quantity){


    if(quantity == 0){
        carts.splice(key, 1)
    }else{
        
        carts[key].quantity = quantity
        carts[key].price = quantity * cartsPrice[key].price
    }

    addToCartHtml()
}


// se clicado no btn finalizar dentro do cart listCards[id - 1].price
let btnTotal = document.querySelector('.total')

btnTotal.addEventListener('click', () =>{

    const toastBody2 = document.querySelector('#liveToast2')

    const toast2 = new bootstrap.Toast(toastBody2, {
        delay: 3000 // Tempo em milissegundos
    });

    toast2.show()
})




