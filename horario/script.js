function carregar(){
    var texto = document.querySelector('div#texto')
    var photo = document.querySelector('img#photo')
    var sessao = document.querySelector('section#comeco')

    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()


    texto.innerHTML = `A hora é ${hora}:${minutos}`
    
    var hora = 19
    if(hora > 3 && hora < 12){
        texto.innerHTML = `Bom dia! São ${hora}:${minutos}`
        photo.src='images/manha.jpg'
        document.body.style.backgroundColor='#785B49'

    } else if(hora >= 12 && hora < 16){
        texto.innerHTML = `Boa tarde! São ${hora}:${minutos}`
        photo.src='images/meiodia.jpg'
        document.body.style.backgroundColor='#AC9575'

    } else if(hora >= 16 && hora < 18){
        texto.innerHTML = `Bom fim de tarde! São ${hora}:${minutos}`
        photo.src='images/porsol.jpg'
        document.body.style.backgroundColor='#BF772F'

    } else if(hora >= 18 && hora <= 23){
        texto.innerHTML = `Boa noite! São ${hora}:${minutos}.`
        photo.src='images/noite.jpg'
        document.body.style.backgroundColor='#2B343B'

    } else if(hora >= 0 && hora <= 3){
        texto.innerHTML = `São ${hora}:${minutos} da madrugada!`
        photo.src='images/noite.jpg'
        document.body.style.backgroundColor='#2B343B'

    } 
    

    
    
}