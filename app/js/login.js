//Validação do formulário
function validaLogin_(){
    var username = document.forms['form']['username'].value;
    var password = document.forms['form']['password'].value;
    
    if(username == "jason"){
        if(password=="123"){
            // alert("Login realizado com sucesso");
            proceed();
        }else{
            alert("Senha ou usuário incorretos");
        }
    }else{
        alert("Senha ou usuário incorretos");
    }
}

function Login() {
    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'http://google.com');
    form.style.display = 'hidden';
    document.body.appendChild(form)
    form.submit();
}

function aprovaLogin(){
    if(username == jason && password == 123){
        console.log('tá funcionando!')
        function redirectLogin(){
            //redireciona para página TODO list
            window.location.href("http://localhost:3002/app/public/index.html");
        }
    }else{
        console.log('Informe nome e senha válidos');
    }
}

