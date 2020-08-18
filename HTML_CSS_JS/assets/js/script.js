/*  OBSERVAÇÕES IMPORTANTES E DICAS

Case Sensitive = reconhece letra maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector() [sempre com a #]

*/
let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")  
/* também pode usar input#email, se fosse classe usaria o ponto (.)*/
let destino = document.querySelector("#destino")

nome.style.width = "100%"
email.style.width = "100%"

/* AGORA USANDO EVENTO*/

function validaNome (){
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome valido"
        txtNome.style.color = "green"

    }
}

function validaEmail (){
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) { 
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail valido"
        txtEmail.style.color = "green"
    }

}