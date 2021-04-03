//objetos = nome da var = { }

var carta1 = {
  nome: 'Lord Darth Vader',
  atributos:{
  ataque: 99,
  defesa: 99,
  Força: 99}, 
  imagem: "https://i.pinimg.com/236x/58/3d/a0/583da0307e474a4a89439b062049e7c9.jpg"
}
var carta2 = {
  nome:'Luke Skywalker' ,
  atributos:{
  ataque: 90,
  defesa: 87,
  Força:  99}, 
  imagem: "https://i.pinimg.com/236x/d4/7c/f4/d47cf42c151e2750ffb2910e6aae30bf.jpg"
  
}
var carta3 = {
  nome: 'Chewbaka',
  atributos:{
  ataque: 80,
  defesa: 60,
  Força:  5}, 
  imagem: "https://i.pinimg.com/236x/34/d9/71/34d971182fb81963c15e3e4b658d0f79.jpg"
  
  
}
var carta4 = {
  nome: 'Princesa Leia',
  atributos: {
  ataque: 69,
  defesa: 75,
  Força:  85}, 
  imagem: "https://i.pinimg.com/236x/70/13/0a/70130a2b13d393376e9416729261cf02.jpg"

  
}
var carta5 = {
  nome: 'Han Solo',
  atributos:{
  ataque: 85,
  defesa: 75,
  Força:  3}, 
  imagem: 'https://i.pinimg.com/236x/5f/8e/28/5f8e28787d8fbe19db5656a5d1a7c3d2.jpg'
  
  
}
var carta6 = {
  nome: 'R2D2',
  atributos:{
  ataque: 55,
  defesa: 80,
  Força:  0}, 
  imagem: 'https://i.pinimg.com/236x/db/fd/67/dbfd6772637abfc9e6c6bbdbb46ca8ef.jpg'
  
  
}
var carta7 = {
  nome: 'C3PO',
  atributos:{
  ataque: 57,
  defesa: 83,
  Força:  0}, 
  imagem: 'https://i.pinimg.com/236x/d8/ee/e9/d8eee9d5503146d6bdfb9c812c926ce0.jpg'
  
  
}
var carta8 = {
  nome: 'Meste Yoda',
  atributos:{
  ataque: 75,
  defesa: 85,
  Força:  99}, 
  imagem: 'https://i.pinimg.com/236x/1e/55/42/1e554294c6cc9afa156df07f04dc9b87.jpg'
  
  
}
var carta9 = {
  nome:'Darth Moul',
  atributos:{
  ataque: 80,
  defesa: 88,
  Força:  90}, 
  imagem: 'https://i.pinimg.com/236x/e4/39/db/e439db21e5f5b51bdd463ef2185381b8.jpg'
  
  
}
var carta10 = {
  nome: 'Lando Calrissian',
  atributos:{
  ataque: 70,
  defesa: 80,
  Força:  3}, 
  imagem: "https://i.pinimg.com/236x/1d/c5/a9/1dc5a9bbc9018591e4be68b7782eae7c.jpg"
    
  
}
var carta11 = {
  nome:'Obi Wan Kenobi',
  atributos:{
  ataque: 87,
  defesa: 75,
  Força: 90}, 
  imagem: 'https://i.pinimg.com/236x/eb/9a/e3/eb9ae3e6af5c36da3aa7e88866d50f57.jpg'
  
  
}
var carta12 = {
  nome:'Boba Fett',
  atributos:{
  ataque: 90,
  defesa: 85,
  Força: 5}, 
  imagem: 'https://i.pinimg.com/236x/0e/f7/7d/0ef77dcd32343cc9a9e01e35030a6ae8.jpg'
}

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12]

var cartaMaquina
var cartaJogador
var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeCartas()

function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = 'Jogador ' + pontosJogador + '/' + pontosMaquina + ' Maquina'
  divPlacar.innerHTML = html
 
}

function atualizaQuantidadeCartas(){
  var divquantidadeCartas = document.getElementById('quantidade-cartas')
  var html = 'Quantidade de cartas no jogo ' + cartas.length
  divquantidadeCartas.innerHTML = html
  
}

function sortearCarta(){ 
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
 
  cartaMaquina = cartas[numeroCartaMaquina]
  var numeroCartaJogador = parseInt(Math.random() * cartas.length)
  
  cartaMaquina = cartas[numeroCartaMaquina]  
  cartas.splice(numeroCartaMaquina, 1)  
  cartaJogador = cartas[numeroCartaJogador]
  cartas.splice(numeroCartaJogador, 1)
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibeCartaJogador()
  
}

function exibeCartaJogador(){
  var divCartaJogador = document.getElementById('carta-jogador')
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  divCartaJogador.style.backgroundImage= `url(${cartaJogador.imagem})`
  var nome = `<p class='carta-subtitle'>${cartaJogador.nome}</p>`
  var opcoesTexto = ""
  
  for(var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ' ' + cartaJogador.atributos[atributo] + '<br>'
   }

  var html = '<div id="opcoes" class="carta-status">'
  
  divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
      
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo')
  for (i=0; i<radioAtributo.length; i++) {
    if (radioAtributo[i].checked){
      return radioAtributo[i].value
      
    }
  }
}

function jogar(){
  var divResultado = document.getElementById('resultado')
  
  var atributoSelecionado = obtemAtributoSelecionado()
    if (cartaJogador.atributos[atributoSelecionado]>cartaMaquina.atributos[atributoSelecionado]){
      htmlResultado = '<p class="resultado-final">Você venceu</p>'
      pontosJogador++

   }
    else if (cartaJogador.atributos[atributoSelecionado]<cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = '<p class="resultado-final">Você perdeu</p>'
      pontosMaquina++

    }
      else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'    
    } if (cartas.length == 0){
      alert('FIM DE JOGO!') 
      if(pontosJogador > pontosMaquina){
        htmlResultado = '<p class="resultado-final">Venceu</p>'
      }else if(pontosJogador < pontosMaquina){
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
      }else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
      }
    } else {document.getElementById('btnProximaRodada').disabled = false}
  
  divResultado.innerHTML = htmlResultado  
  document.getElementById('btnJogar').disabled = true
  
  
  atualizaPlacar()
  exibeCartaMaquina()
  atualizaQuantidadeCartas()
}

function exibeCartaMaquina(){
  var divCartaMaquina = document.getElementById('carta-maquina')
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  divCartaMaquina.style.backgroundImage= `url(${cartaMaquina.imagem})`
  var nome = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`
  var opcoesTexto = ""
  
  for(var atributo in cartaMaquina.atributos){
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + ' ' + cartaMaquina.atributos[atributo] + '</p><br>'
   }

  var html = '<div id="opcoes" class="carta-status">'
  
  divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
    }  


function proximaRodada(){
  var divcartas = document.getElementById('cartas')
  divcartas.innerHTML = `<div id='carta-jogador' class='carta'></div><div id='carta-maquina' class='carta'></div>`
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ''
  
}