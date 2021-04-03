AdaoBMF = {
  
  nome: 'AdaoBMF',
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
  
}

PirataRichards = {
  
  nome: 'PirataRichards',
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
  
}

digaobmf = {
  
  nome: 'digaobmf',
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
  
}

MGama = {
  
  nome: 'M-Gama',
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
  
}


AdaoBMF.pontos = calculaPontos(AdaoBMF)
PirataRichards.pontos = calculaPontos(PirataRichards)
digaobmf.pontos = calculaPontos(digaobmf)
MGama.pontos = calculaPontos(MGama)

function calculaPontos(jogador){
  pontos = (jogador.vitorias * 3) + jogador.empates
 
  return pontos
   
}

jogadores = [AdaoBMF, PirataRichards, digaobmf, MGama]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
  html = ""
  for (var i = 0; i < jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += '<td><button onClick="adicionarVitoria(' + i + ')">Vitória</button></td>'
    html += '<td><button onClick="adicionarEmpate('+ i +')">Empate</button></td>'
    html += '<td><button onClick="adicionarDerrota('+ i +')">Derrota</button></td></tr>'
 }
  
  tabelaJogadores = document.getElementById('tabelaJogadores')
  tabelaJogadores.innerHTML = html
  
}

function adicionarVitoria(i){
  jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
  
}
function adicionarEmpate(i){
  jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
  
}
function adicionarDerrota(i){
  jogador = jogadores[i]
  jogador.derrotas++
  
  exibirJogadoresNaTela(jogadores)
  
}