const emailInput = document.getElementById('email')
const senhaInput = document.getElementById('senha')



function login () {
    if(emailInput.value == 'admin@email.com' && senhaInput.value == 'senha'){
        alert('ALELUIA! Você sabe seu login e senha! Outra página vai abrir...');
        window.location.href = 'pagina.html';
    } else {
        alert('Toma Ômega3 porque sua memória é ruim. Seu email ou senha estão incorretos. Tenha fé, e tente de novo.')
    }
}