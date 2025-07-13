
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








// DUMMY 


// ENTRAR

async function entrarValidation(formdata){

    const users = '' // dummy only
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

    







