
('Pagina em manutenção!')

// usando jquery
$(document).ready(function(){
    // progress bar
    let containerA = document.getElementById('circleA')
    let containerB = document.getElementById('circleB')
    let containerC = document.getElementById('circleC')
    let containerD = document.getElementById('circleD')

    let circleA = new ProgressBar.Circle(containerA, {
        color: '#64DAF9',
        // grossura do circle 
        strokeWidth: 8,
        duration: 1300,
        from:{color: '#AAA'},
        to: {color: '#64DAF9'},
        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color)
            let value = Math.round(circle.value() * 60)
            circle.setText(value)
        }

    })

    let circleB = new ProgressBar.Circle(containerB, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2000,
        from: {color: '#AAA'},
        to: {color: '#64DAF9'},
        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value() * 243)
            circle.setText(value)
        }

    })

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1800,
        from: {color: '#AAA'},
        to: {color: '#64DAF9'},
        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value() * 150)

            circle.setText(value)
        }

    })

    let circleD = new ProgressBar.Circle(containerD, {
        
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2300,
        from: {color: '#AAA'},
        to: {color: '#64DAF9'},
        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value() * 343)

            circle.setText(value)

            
        }
    })

    //iniciando o loader quando o usuario chegar no elemento
    let dataAreaOffset = $('#data-area').offset()
    let stop = 0

    $(window).scroll(function (){
        let scroll = $(window).scrollTop()

        if(scroll > (dataAreaOffset.top - 400) && stop == 0){
            circleA.animate('1.0')
            circleB.animate('1.0')
            circleC.animate('1.0')
            circleD.animate('1.0')
            stop = 1
        }
    })

    //parallax
    setTimeout(function(){

        $('#data-area').parallax({imageSrc: 'photos/cidadeparallax.png'})

        $('#pattern-img').parallax({imageSrc: 'photos/pattern.png'})
    }, 250)

    // parte do portifolio

    $('.filter-btn').on('click', function(){

        // identificar os ids dos btns 
        let type = $(this).attr('id')

        // identificar caixas
        let boxes = $('.project-box')

        // remover funcao active 
        $('.btn-portifolio').removeClass('active')

        // o btn clicado receberá o active
        $(this).addClass('active')

        // verificar qual id foi selecionado
        if(type == 'btn-dev'){
            eachBoxes('dev', boxes)
        }
        if(type == 'btn-all'){
            eachBoxes(type, boxes)
        }
        if(type == 'btn-design'){
            eachBoxes('design', boxes)
        }
        if(type == 'btn-seo'){
            eachBoxes('seo', boxes)
        }

        
    })

function eachBoxes(type, boxes){
    if(type == "btn-all"){
        $(boxes).fadeIn()
    }else{
        $(boxes).each(function(){
            if(!$(this).hasClass(type)){
                $(this).fadeOut('slow')
            }else{
                $(this).fadeIn()
            }
        })
    }
}


})