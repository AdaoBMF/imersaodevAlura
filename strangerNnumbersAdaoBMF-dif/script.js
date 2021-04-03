numeroDaEleven = Math.random() * 11
numeroDaEleven = parseInt(numeroDaEleven)

tentativas = 3

alert('Você tem 3 tentativas para adivinhar qual número a Eleven está pensando. Clik OK para começar. Boa sorte! ')

while(tentativas > 0) {
  palpite = parseInt(prompt('Digite um numero entre 0 e 10'))
  
if(palpite == numeroDaEleven){
    document.write('<h2>' + "Parabéns você conseguiu ler a mente da Eleven" + '</h2>')
  
  break 
}
else if(palpite < numeroDaEleven) {
  
  alert('UM POUCO MAIS')
  
  tentativas = tentativas - 1
 
}
else if(palpite > numeroDaEleven) {
 
alert('UM POUCO MENOS')
  
  tentativas = tentativas - 1  
}
}
if (palpite != numeroDaEleven){
  document.write('<h3>' + 'Fim de jogo! <br> você é um péssimo telepata! O número da Eleven é: ' + numeroDaEleven + '</h3>')
}
if (tentativas == 3){
  document.write('<h4>' + 'EXELENTE! <br> Acertou de primeira, você é um ótimo telepata' + '</h4>')
} else if(tentativas == 2){
  document.write('<h4>' + 'Nada mal... <br> tavez você saiba oque esta fazendo' + '</h4>')
} else if(tentativas == 1){
  document.write('<h4>' + 'Na última! <br> Deve ter sido sorte ' + '</h4>')
}