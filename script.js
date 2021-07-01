/* 
ADIG FLADÉLFIA JAVASCRIPT!
FEITO POR DANIELFTOSTA176
*/

function startup() {
setTimeout( function() {
   document.getElementById("parac").innerHTML = "Carregando."
   document.getElementById("captcha").style.width = "0"
    document.getElementById("insert").style.width = "0"
    document.getElementById("insert").innerHTML = ""
}, 20)

setTimeout( function() {
    document.getElementById("parac").innerHTML = "Carregando.."
}, 500)

setTimeout( function() {
    document.getElementById("parac").innerHTML = "Esperando Resposta"
    document.getElementById("titlec").innerHTML = "Aperte OK para continuar"
}, 750)

setTimeout( function() {
    alert("Aperte OK, ou você não será redirecionado!")
}, 900)

setTimeout( function() {
    document.getElementById("captcham").innerHTML = "100+76 = ?"
    document.getElementById("parac").innerHTML = "Esperando Resposta..."
    document.getElementById("titlec").innerHTML = `Resolva a questão.`
    document.getElementById("captcha").style.width = "100px"
    document.getElementById("insert").style.width = "10px"
    document.getElementById("insert").innerHTML = "Enter"
}, 1000)

}
function Submit() {

if (document.getElementById("captcha").value === "176") {
document.getElementById("captcha").style.width = "0"
document.getElementById("insert").style.width = "0"
document.getElementById("parac").innerHTML = "Correto!"
document.getElementById("titlec").innerHTML = `Redirecionando...`
document.getElementById("captcham").innerHTML = ""
document.getElementById("insert").innerHTML = ""
document.getElementById("captcha").style.top = "-100"
document.getElementById("insert").style.top = "-100"
setTimeout( function() { 
window.location.href = "casa"
}, 100)
} else {
    document.getElementById("parac").style.color = "#ff0000"
    document.getElementById("titlec").style.color = "#ff0000"
    document.getElementById("parac").innerHTML = "Incorreto!"
    document.getElementById("titlec").innerHTML = `Tente de novo...`
setTimeout( function() {
    document.getElementById("parac").style.color = "#ffffff"
    document.getElementById("titlec").style.color = "#ffffff"
    document.getElementById("parac").innerHTML = "Esperando Resposta..."
    document.getElementById("titlec").innerHTML = `Resolva a questão.`
}, 1500)

}

}

function next() {
setTimeout( function() {
    document.getElementById("footerload").innerHTML = "Adig Filadelfia | Carregando."
}, 1000)
setTimeout( function() {
    document.getElementById("footerload").innerHTML = "Adig Filadelfia | Carregando.."
}, 1500)
setTimeout( function() {
    document.getElementById("footerload").innerHTML = "Adig Filadelfia | Carregando..."
}, 2000)
setTimeout( function() {
    document.getElementById("footerload").innerHTML = "Adig Filadelfia | ADIG - Assembleia de Deus da Ilha do Gorvenador"
}, 2300)
}