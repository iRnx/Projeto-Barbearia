// Esperar o documento carregar
$(document).ready(function () {
    // Usando um pequeno delay de 100ms porque às vezes o navegador preenche o campo logo que o documento está pronto, e pode não funcionar como esperado
    setTimeout(function(){
      $('#email').removeAttr('disabled');
      $('#nomesobrenome').removeAttr('disable');
      $('#telefone').removeAttr('disable');
    }, 100);
 });