

let oleos = [
        {
            nome: "Óleo",
            viscosidade: "5w30",
            marca: "Lubrax",
            info: "Sintético",
            image: "photos/oleos/lubrax5w30.png",
            price: 43.00,
            qtd: 10
            
        },
        {
            nome: "Óleo",
            viscosidade: "0w20",
            marca: "Lubrax",
            info: "Sintético-Prêmio",
            image: "photos/oleos/lubrax0w20.png",
            price: 45.00,
            qtd: 10
        },
        {
            nome: "Óleo",
            viscosidade: "15w40",
            marca: "Lubrax",
            info:"Semi-Sintético",
            image: "photos/oleos/lubrax15w40.png",
            price: 35.00,
            qtd: 0
        },
        {
            nome: "Óleo",
            viscosidade: "15w40",
            marca: "Lubrax",
            info: "Mineral Extra Turbo",
            image: "photos/oleos/lubrax-extraturbo.png",
            price: 115,
            qtd:10
        },
        {
            nome: "Óleo KPower",
            viscosidade: "5w30",
            marca: "Selenia",
            info: "Sintético",
            image: "photos/oleos/seleniakpower5w30.png",
            price: 42.00,
            qtd:0
        },
        {
            nome: "Óleo Performer",
            viscosidade: "15w40",
            marca: "Selenia",
            info: "Semi-Sintético",
            image: "photos/oleos/selenia15w40.png",
            price: 35.00,
            qtd: 10
        },
        {
            nome: "Óleo",
            viscosidade: "5w40",
            marca: "Elaion",
            info: "Sintético",
            image: "photos/oleos/elaion5w40.png",
            price: 46.00,
            qtd: 10
        },
        {
            nome: "Óleo",
            viscosidade: "10w40",
            marca: "Elaion",
            info: "Semi-Sintético",
            image: "photos/oleos/elaion10w40.png",
            price: 40.00,
            qtd: 10
        },
        {
            nome: "Óleo",
            viscosidade: "5w30",
            marca: "Mobil",
            info: "Sintético",
            image: "photos/oleos/mobil5w30.png",
            price: 42.74,
            qtd: 10
        },
        {
            nome: "Óleo",
            viscosidade: "15w40",
            marca: "Mobil",
            info: "Mineral",
            image: "photos/oleos/mobil15w40-4l.png",
            price:  125,
            qtd: 10
        },
        {
            nome: "Óleo",
            viscosidade: "15w40",
            marca: "Mobil",
            info: "Mineral",
            image: "photos/oleos/mobil15w40-20l.png",
            price: 596.26,
            qtd: 10
        },
        {
            nome: "Óleo",
            viscosidade: "15w40",
            marca: "Lubel",
            info: "Semi-Sintético",
            image: "photos/oleos/lube15w40-semi.png",
            price: 35.00,
            qtd: 10
        },
        {
            nome: "Óleo",
            viscosidade: "20w50",
            marca: "Lubel",
            info: "Mineral",
            image: "photos/oleos/lubel20w50-mine.png",
            price: 26.70,
            qtd: 10
        },
        {
            nome: "Óleo",
            viscosidade: "15w40",
            marca: "Lubel",
            info: "Mineral",
            image: "photos/oleos/lubel15w40-mine.png",
            price:  28.56,
            qtd:10
        },
        {
            nome: "Óleo",
            viscosidade: "20w50",
            marca: "Classic-Line",
            info: "Mineral",
            image: "photos/oleos/classicLine.png",
            price: 26.46,
            qtd:10
        }
        
    ]

const estruturaOleo = document.querySelector('#row-inicio-oleos')

function addCardsOleo(){
    oleos.forEach((value, key) =>{

        let oleoCards = document.createElement('div')
        oleoCards.classList.add('col-md-3')
        oleoCards.classList.add('card')
        oleoCards.classList.add('projeto-oleo')
        oleoCards.classList.add(value.marca)

        if(value.qtd == 0){
            oleoCards.classList.add('acabou')
        }

        oleoCards.innerHTML = `
        
        <img src="${value.image}" alt="" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${value.nome} ${value.marca} ${value.viscosidade}</h5>
            <p class="card-text">${value.info}</p>
        </div>
        
        `

        estruturaOleo.appendChild(oleoCards)
    })
}

addCardsOleo()


/* <div class="col-md-3 card projeto-oleo lubrax" id="estrutura-card">
<img src="photos/oleos/lubrax5w30.png" alt="lubrax 5w30" class="img-fluid">
<div class="card-body">
    <h5 class="card-title">Óleo Lubrax 5w30</h5>
    <p class="card-text">Sintético</p>
</div>
</div> */


let baterias = [
    {
        nome: "Moura",
        info: "60 Amperes",
        image: "photos/baterias/moura60.png",
        price:  515,
        qtd: 1
    },
    {
        nome: "Zetta",
        info: "60 Amperes",
        image: "photos/baterias/zeta2.png",
        price:  388,
        qtd: 0
    },
    {
        nome: "Zetta",
        info: "50 Amperes",
        image: "photos/baterias/zeta2.png",
        price: 325,
        qtd: 1
    },
    {
        nome: "Zetta",
        info: "70 Amperes",
        image: "photos/baterias/zeta2.png",
        price: 584.84,
        qtd: 0
    },
    {
        nome: "Zetta",
        info: "45 Amperes",
        image: "photos/baterias/zetta45.png",
        price: 326,
        qtd: 0
    },
    {
        nome: "Heliar",
        info: "60 Amperes",
        image: "photos/baterias/heliar.png",
        price: 500,
        qtd: 0
    },
    {
        nome: "America",
        info: "50 Amperes",
        image: "photos/baterias/america.png",
        price: 325,
        qtd: 1
    },
    {
        nome: "America",
        info: "60 Amperes",
        image: "photos/baterias/america.png",
        price:  315,
        qtd: 0
    },
]


let estruturaBattery = document.querySelector('#row-inicio-baterias')

function addBattery(){
    baterias.forEach((value) =>{
        let cardBattery = document.createElement('div')
        cardBattery.classList.add('col-md-3')
        cardBattery.classList.add('card')

        if(value.qtd == 0){
            cardBattery.classList.add('acabou')
        }

        cardBattery.innerHTML = `
        
        <img src="${value.image}" alt="${value.nome} ${value.info}" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${value.nome}</h5>
            <p class="card-text">${value.info}</p>
        </div>
        
        `
        estruturaBattery.appendChild(cardBattery)
    })
}

addBattery()


// <div class="col-md-3 card">
// <img src="photos/baterias/moura60.png" alt="Moura 60amp" class="img-fluid">
// <div class="card-body">
//     <h5 class="card-title">Batéria Moura</h5>
//     <p class="card-text">60 Amperes</p>
// </div>
// </div>


