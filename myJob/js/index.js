
// onload 
document.addEventListener('DOMContentLoaded', () =>{

    // FUCAO AO CLICAR NO TITULO PRINCIPAL

    let allSessoes = document.querySelectorAll('main .sessao')
    let onloadTitlePrinc = document.querySelector('#title-princ')

    onloadTitlePrinc.addEventListener('click', () =>{

        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display=`none`
            allSessoes[0].style.display=`block`
        }
    })


    // funcoes do fast-search para mostrar pagina
    mostrarInfoFastSearch()

    // funcao dos links carousel
    carouselBanners()

})


// funcao das sessoes da pagina
function mostrarInfoFastSearch(){
    // all links clicando no (LI)
    let allSetLinks = document.querySelectorAll(`.dropdown-menu .setLink`)
    //console.log(allSetLinks)

    // all links dos filtros clicando no (LI)
    let allLinksFiltros = document.querySelectorAll('#drop-filtro .btnFiltros')
    //console.log(allLinksFiltros)


    
    // SESSOES
    let allSessoes = document.querySelectorAll('main .sessao')

    // SEM OS DROPS-DOWN
    let estruturasNAV = document.querySelectorAll('#estrutura-fast-src .estrutura')

    // DROPS-DOWN - filtros
    let allLinkDrop = document.querySelectorAll(`.dropdown-menu .dropdown-link`)

    // DROPS de todos os departamento
    let allDepart = document.querySelectorAll('.dropdown-menu .no-mobile')



    // ACAO DOS DROPS-DOWN - filtros

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
    

    // acao da pagina login

    let loginBtn = document.querySelector('#loginBtn')
    let btnDevEdit = document.querySelector('#btnDevEdit')

    loginBtn.addEventListener('click', () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display=`none`
            allSessoes[16].style.display=`block`
            
        }
    })

    btnDevEdit.addEventListener('click', () =>{
        for(let c = 0;c < allSessoes.length;c++){
            allSessoes[c].style.display=`none`
            allSessoes[17].style.display=`block`
            
        }
    })

}

// logica offcanvas 
document.addEventListener('DOMContentLoaded', () =>{

    let myOffCanvas = document.querySelectorAll('.myOffCanvas')


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


})


// links dos carousel banners
function carouselBanners(){
    const btnsBanner = document.querySelectorAll('.carousel-item .link-banner')

    // SESSOES
    let allSessoes = document.querySelectorAll('main .sessao')
    

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


// loggin page 
let loginFormEntrar = document.querySelector('.login-form')
let registerForm = document.querySelector('.register-form')

let btnLoginEntrar = document.querySelector('.btnLoginEntrar')
let btnLoginCadastrar = document.querySelector('.btnLoginCadastrar')

btnLoginCadastrar.addEventListener('click', (e) =>{
    e.preventDefault()
    loginFormEntrar.style.display="none"
    registerForm.style.display="block"
})

btnLoginEntrar.addEventListener('click', (e) =>{
    e.preventDefault()
    registerForm.style.display="none"
    loginFormEntrar.style.display="block"
})


// verificao de login

// API REQUEST
const apiUrl = ''


// dados
async function gettingUsers(){
    const resp = await fetch(apiUrl) //
    const dado = await resp.json()
    const allUsers = await dado.users
    return allUsers
}


// ENTRAR

async function entrarValidation(formdata){

    const users = await gettingUsers()
    const seJaExiste = users.some(user => user.username == formdata.nome && user.password == formdata.senha)

    const devToken = 'dev_token_access'
    const userToken = 'user_token_access'


    let areaFormPage = document.querySelector('#area-form')
    let areaLoginPage = document.querySelector('#area-login')
    let loginBtn = document.querySelector('#loginBtn')
    let btnDevEdit = document.querySelector('#btnDevEdit')
    let btnLogOut = document.querySelector('#btnLogOut')

    if(formdata.nome == 'vinicius' && formdata.senha == 'vini10'){
        console.log('Welcome Vini')

        areaLoginPage.style.display="none"
        loginBtn.style.display="none"
        areaFormPage.style.display="block"
        btnDevEdit.style.display="block"
        btnLogOut.style.display="block"

        // setting token
        localStorage.setItem('authDevToken', devToken)
    }
    else if(seJaExiste){
        console.log('Login feito com Sucesso!')

        let inicialPage = document.querySelector('#inicial')

        loginBtn.style.display="none"
        areaLoginPage.style.display="none"
        btnLogOut.style.display="block"
        inicialPage.style.display="block"

        // setting token
        localStorage.setItem('authUserToken', userToken)
    }
    else if(!seJaExiste){
        alert('Email/Senha errado!')
    }
    
}


let btnEntrar = document.querySelector('.btnEntrar')
btnEntrar.addEventListener('click', (e) =>{
    e.preventDefault()
    alert('Funcão não disponível!')
    const formdata = {
        nome: document.querySelector('.usernameInput').value.trim(),
        senha: document.querySelector('.passwordInput').value.trim()
    }


    // entrarValidation(formdata)

    let nome = document.querySelector('.usernameInput')
    let senha = document.querySelector('.passwordInput')
    nome.value = ''
    senha.value = ''

})




// CADASTRAR


// FUNCAO DE POST creatingUser(formData)
async function creatingUser(obj){
    
    try{
        const response = await fetch(`${apiUrl}addingUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        })

        if (response.ok) {
            const data = response.json();
            console.log('Resposta do servidor:', data);
            alert('Usuario Criado com sucesso!');
        } else {
            console.error('Erro ao criar usuario:', response.statusText);
            alert('Erro ao criar usuario!.');
        }

    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Erro ao enviar o formulário.');
    }


}

async function cadastroValidation(formdata){

    const users = await gettingUsers()
    
    const seExiste = users.some(usuario => usuario.email === formdata.email)

    if(seExiste){
        alert('Email já cadastrado!')
        return false
    }


    
    creatingUser(formdata)
    return true
}


let btnCadastrar = document.querySelector('.btnCadastrar')
btnCadastrar.addEventListener('click', (e) =>{
    e.preventDefault()
    const formdata = {
        username: document.querySelector('.userNameCad').value.trim(),
        email: document.querySelector('.emailCad').value.trim(),
        password: document.querySelector('.passwordCad').value.trim()
    }    
    alert('Funcão não disponível!')


    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(formdata.username == ''){
        alert('Preencha o nome!')
        return false
    }

    if(formdata.username.length < 4){
        alert('Username precisa ter mais de 3 caracteres!')
        return false
    }
    
    if (!regexEmail.test(formdata.email)){
        alert('Digite um email válido!')
        return false
    }

    if(formdata.password.length < 4){
        alert('Senha precisa ter mais de 3 caracteres!')
        return false
    }

    // cadastroValidation(formdata)

    let userNameCad = document.querySelector('.userNameCad')
    let emailCad = document.querySelector('.emailCad')
    let passwordCad = document.querySelector('.passwordCad')

    userNameCad.value = ''
    emailCad.value = ''
    passwordCad.value = ''
    userNameCad.focus()
    
})




// LOG OUT
let btnLogOut = document.querySelector('#btnLogOut')

btnLogOut.addEventListener('click', () =>{
    const devToken = localStorage.getItem("authDevToken");
    const userToken = localStorage.getItem('authUserToken')

    let loginBtn = document.querySelector('#loginBtn')
    let btnDevEdit = document.querySelector('#btnDevEdit')

    if(devToken){
        localStorage.removeItem('authDevToken')
        console.log('DEV LOGGED OUT!')

        btnLogOut.style.display="none"
        btnDevEdit.style.display="none"
        loginBtn.style.display="block"

    }else if(userToken){
        localStorage.removeItem('authUserToken')
        console.log('USER LOGGED OUT!')

        btnLogOut.style.display="none"
        loginBtn.style.display="block"
    }
})


// verificando se ainda esta logado ou nao dps do load
window.addEventListener('load', () =>{
    const devToken = localStorage.getItem("authDevToken");
    const userToken = localStorage.getItem('authUserToken')

    let loginBtn = document.querySelector('#loginBtn')
    let btnLogOut = document.querySelector('#btnLogOut')
    let btnDevEdit = document.querySelector('#btnDevEdit')

    if(devToken){
        console.log("Desenvolvedor ainda está logado!");
        
        loginBtn.style.display="none"
        btnDevEdit.style.display="block"
        btnLogOut.style.display="block"

    } else if(userToken){
        console.log("Usuario ainda está logado!");

        loginBtn.style.display="none"
        btnLogOut.style.display="block"

    }
    else {
        console.log("Usuário não está logado.");
    }
})

    
