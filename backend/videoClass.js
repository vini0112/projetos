
// const express = require("express")
// const server = express()
// const router = express.Router()
// const fs = require("fs")


// server.use(express.json({extended: true}))


// // ler
// const readFile = () =>{
//     const content = fs.readFileSync('../myJob/testando.json', "utf-8")
//     return(JSON.parse(content))
// }

// // salva
// const writeFile = (content) =>{
//     const updateFile = JSON.stringify(content)
//     fs.writeFileSync('../myJob/testando.json', updateFile, 'utf-8')
// }




// router.get('/', (req, res) =>{
    
//     const content = readFile()
//     res.send(content)
// })


// router.post('/', (req, res) =>{
//     // receiving 
//     const {name} = req.body

//     // lendo
//     const currentContent = readFile()

//     const id = Math.random().toString(32).substring(2, 9)
//     // salvando
//     currentContent.push({id ,name})
//     writeFile(currentContent)

//     // enviado resultado
//     res.send(currentContent)

// })


// router.put('/:id', (req, res) =>{
//     const {id} = req.params

//     const {name} = req.body

    
//     const currentContent = readFile()
//     const selectedItem = currentContent.findIndex((item) => item.id === id)
    
//     const {id: cId, name: cName} = currentContent[selectedItem]

//     const newObj = {
//         id: cId,
//         name: name ? name: cName
//     }

//     currentContent[selectedItem] = newObj
//     writeFile(currentContent)
//     res.send(newObj)
// })


// router.delete('/:id', (req, res) =>{

//     const {id} = req.params
//     const currentContent = readFile()
//     const selectedItem = currentContent.findIndex((item) => item.id === id)
//     currentContent.splice(selectedItem, 1)

//     writeFile(currentContent)
//     res.send(currentContent)
// })




// server.use(router)

// server.listen(3000, () =>{
//     console.log('rodando')
// })


