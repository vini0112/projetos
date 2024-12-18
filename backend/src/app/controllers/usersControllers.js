
import { readFileSync, writeFileSync } from "fs"



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


class usersControllers{

    // SHOW ALL
    show(req, res){
        const currentContent = readFile()
        res.send(currentContent)
    }



    // POSTS
    postOleo(req, res){

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
        
    }

    postBateria(req, res){

        const {nome, image, marca, price, qtd} = req.body
        
        const currentContent = readFile()
        
        const extraindoArrays = Object.values(currentContent)
        const achatandoArrays = extraindoArrays.flat()
    
        // definindo ID
        const id = Math.max(...achatandoArrays.map((item) => item.id)) + 1
    
        // salvando
        currentContent.baterias.push({id, nome, image, marca, price, qtd})
        
        writeFile(currentContent)
        res.send("Criado com sucesso!")
        
    }

    postFluido(req, res){
        const {nome, image, marca, price, qtd} = req.body
        const currentContent = readFile()
        const extraindoArrays = Object.values(currentContent)
        const achatandoArrays = extraindoArrays.flat()
    
        // definindo ID
        const id = Math.max(...achatandoArrays.map((item) => item.id)) + 1
    
        // salvando
        currentContent.fluidos.push({id, nome, image, marca, price, qtd})
        
        writeFile(currentContent)
        res.send("Criado com sucesso!")
    }




    // UPDATE
    updateOleo(req, res){
    
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
    }

    updateBateria(req, res){
    
        const id = req.params.id
        const {nome, image, marca, price, qtd } = req.body
    
        const currentContent = readFile()
    
        const selectedItem = currentContent.baterias.findIndex(item => item.id == id)
        
        const {id: cId, nome: cNome, image: cImage, marca: cMarca, price: cPrice, qtd: cQtd } = currentContent.baterias[selectedItem]
    
        const newObj = {
            id: cId,
            nome: nome ? nome: cNome,
            image: image ? image: cImage,
            marca: marca ? marca: cMarca,
            price: price ? price: cPrice,
            qtd: qtd ? qtd: cQtd
        }
        currentContent.baterias[selectedItem] = newObj

        writeFile(currentContent)
        res.send(newObj)
    }

    updateFluido(req, res){
        const id = req.params.id
        const {nome, image, marca, price, qtd } = req.body
        const currentContent = readFile()
        const selectedItem = currentContent.fluidos.findIndex(item => item.id == id)
        
        const {id: cId, nome: cNome, image: cImage, marca: cMarca, price: cPrice, qtd: cQtd } = currentContent.fluidos[selectedItem]
    
        const newObj = {
            id: cId,
            nome: nome ? nome: cNome,
            image: image ? image: cImage,
            marca: marca ? marca: cMarca,
            price: price ? price: cPrice,
            qtd: qtd ? qtd: cQtd
        }
        currentContent.fluidos[selectedItem] = newObj
        
        writeFile(currentContent)
        res.send(newObj)
    }


    // DELETE
    deleteOleo(req, res){
        const currentContent = readFile()    
    
        const {id} = req.params
        
        const selectedItem = currentContent.oleos.findIndex((item) => item.id == id)
        currentContent.oleos.splice(selectedItem, 1)
    
        writeFile(currentContent)
        res.send("Deletado com sucesso!")
    }

    deleteBateria(req, res){
        const currentContent = readFile()    
    
        const {id} = req.params
        
        const selectedItem = currentContent.baterias.findIndex((item) => item.id == id)
        currentContent.baterias.splice(selectedItem, 1)
    
        writeFile(currentContent)
        res.send("Deletado com sucesso!")
    }

    deleteFluido(req, res){
        const currentContent = readFile()    
        const {id} = req.params
        const selectedItem = currentContent.fluidos.findIndex((item) => item.id == id)
        currentContent.fluidos.splice(selectedItem, 1)
    
        writeFile(currentContent)
        res.send("Deletado com sucesso!")
    }


}


export default new usersControllers();
