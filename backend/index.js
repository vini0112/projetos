
import express, { Router, json } from "express"
const server = express()
const router = Router()
import { readFileSync, writeFileSync } from "fs"
import cors from "cors"

server.use(json({extended: true}))
server.use(cors())

// ler
const readFile = () =>{
    const content = readFileSync('../myJob/testando.json', "utf-8")
    return(JSON.parse(content))
}

// salva
const writeFile = (content) =>{
    const updateFile = JSON.stringify(content)
    writeFileSync('../myJob/testando.json', updateFile, 'utf-8')
}



router.get('/', (req, res) =>{
    
    const content = readFile()
    
    res.send(content)
})


router.post('/oleos', (req, res) =>{

    // receiving
    const {nome, image, marca, info, price, qtd} = req.body

    // lendo
    const currentContent = readFile()
    
    
    // lendo o array atual e extraindo
    const extraindoArrays = Object.values(currentContent)
    // lido e copactando todos em um so
    const achatandoArrays = extraindoArrays.flat()


    // definindo ID
    const id = Math.max(...achatandoArrays.map((item) => item.id)) + 1

    // salvando
    currentContent.oleos.push({id, nome, image, marca, info, price, qtd})
    
    writeFile(currentContent)

    // enviado resultado
    res.send("Criado com sucesso!")
    
})

router.post('/baterias', (req, res) =>{
    // receiving 
    const {nome, image, marca, info, price, qtd} = req.body

    // lendo
    const currentContent = readFile()
    
    // lendo o array atual e extraindo
    const extraindoArrays = Object.values(currentContent)
    // lido e copactando todos em um so
    const achatandoArrays = extraindoArrays.flat()


    // definindo ID
    const id = Math.max(...achatandoArrays.map((item) => item.id)) + 1

    // salvando
    currentContent.baterias.push({id, nome, image, marca, info, price, qtd})
    
    writeFile(currentContent)

    // enviado resultado
    res.send("Criado com sucesso!")


})


router.put('/oleos/:id', (req, res) =>{
    
    const id = req.params.id
    const {nome, image, marca, info, price, qtd } = req.body

    const currentContent = readFile()

    const selectedItem = currentContent.oleos.findIndex(item => item.id == id)
    
    const {id: cId, nome: cNome, image: cImage, marca: cMarca, info: cInfo, price: cPrice, qtd: cQtd } = currentContent.oleos[selectedItem]

    const newObj = {
        id: cId,
        nome: nome ? nome: cNome,
        image: image ? image: cImage,
        marca: marca ? marca: cMarca,
        info: info ? info: cInfo,
        price: price ? price: cPrice,
        qtd: qtd ? qtd: cQtd
    }
    currentContent.oleos[selectedItem] = newObj

    
    writeFile(currentContent)
    res.send(newObj)
})

router.put('/baterias/:id', (req, res) =>{

    const id = req.params.id
    const {nome, image, marca, info, price, qtd } = req.body

    const currentContent = readFile()

    const selectedItem = currentContent.baterias.findIndex(item => item.id == id)
    
    const {id: cId, nome: cNome, image: cImage, marca: cMarca, info: cInfo, price: cPrice, qtd: cQtd } = currentContent.baterias[selectedItem]

    const newObj = {
        id: cId,
        nome: nome ? nome: cNome,
        image: image ? image: cImage,
        marca: marca ? marca: cMarca,
        info: info ? info: cInfo,
        price: price ? price: cPrice,
        qtd: qtd ? qtd: cQtd
    }
    currentContent.baterias[selectedItem] = newObj

    
    writeFile(currentContent)
    res.send(newObj)

})


router.delete('/oleos/:id', (req, res) =>{
    const currentContent = readFile()    

    const {id} = req.params
    
    const selectedItem = currentContent.oleos.findIndex((item) => item.id == id)
    currentContent.oleos.splice(selectedItem, 1)

    writeFile(currentContent)
    res.send("Deletado com sucesso!")

    
})

router.delete('/baterias/:id', (req, res) =>{
    const currentContent = readFile()    

    const {id} = req.params
    
    const selectedItem = currentContent.baterias.findIndex((item) => item.id == id)
    currentContent.baterias.splice(selectedItem, 1)

    writeFile(currentContent)
    res.send("Deletado com sucesso!")

    
})




server.use(router)

server.listen(3000, () =>{
    console.log('rodando')
})



