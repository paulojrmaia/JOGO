var imgEU
var imgCla

x = 70   //JO
y = 520   //  GA
r1 = 30  //    DOR
jump = 0  //

x2 = 580
y2 = 400
r2 = 35

movX = 1 // MOVIMENTO OBJETO

p = 0// PONTOS , OBS: 10 pontos por fase
V = 0// VITORIA'1' & DERROTA'2'
walk = 0//ANIMAÇÃO
count = 0 //Framecount ANIMAÇÃO
frameC = 0 //FrameCount TEMPO
bgmov = 0//MOVIMENTO BACKGROUND
CTDW = 0 // COUNTDOWN PARA OS CRÉDITOS
CT = 0
cc = 0
segu2 = 0

jog = []//RUN FOREST!
bg = []//BACKGROUND
winner = [] //IMAGENS WIN

xM = 290//Menu_rect
yM = 207//Menu_rect
op = 1//Menu_opção
te = -2//Tela
F = 1//FASE
i = 0

function preload (){
  
  intr = loadImage('elevINVERT.png')
  capo = loadImage('capoeira.png')
  menu = loadImage('lacer.jpg')
  mach = loadImage('machado.jpg')
  winner [0] = loadImage('tere.jpg')
  winner [1] = loadImage('turbante.png')
  winner [2] = loadImage('aleija.jpg')
  bg [0] = loadImage('RJ_bg.jpg')
  bg [1] = loadImage('ouro_bg.jpg')
  bg [2] = loadImage('sp_bg.jpg')
  jog [0] = loadImage('run_00.png')
  jog [1] = loadImage('run_01.png')
  jog [2] = loadImage('run_02.png')
  jog [3] = loadImage('run_03.png')
  jog [4] = loadImage('run_04.png')
  jog [5] = loadImage('run_05.png')
  alv = loadImage('acarajé.jpg')
  imgEU = loadImage('ftOF.jpg')
  imgCla = loadImage('ftPROF.jpg')
  
}

function setup() {
  createCanvas(800, 600);
  frameRate(60);

  
}
function draw() {
 background(255);
  if(te==-2)
    intro()
  if(te==-1)
    introtwo()
  if(te==0)
    Menu()
  if(te==1)
    game()
  if(te==2)
    instru()
  if(te==3)
    creditos()
  if(V == 1)
    win()  
  if(V == 2)
    lose()  

}

function keyPressed(){
  if(key=="ArrowUp"){
    yM = yM - 100
    op = op - 1
    jump = -2
    if(op<1){op=3}
    if(yM<200){yM=407}
        }
  if( key=="ArrowDown"){
    yM = yM + 100
    op = op + 1
    jump = +2
    if(op>3){op=1}
    if(yM>450){yM=207}
  }
  if(key == "Enter"){
    te=op
  }
  if(key == "Escape"){
    te = 0
    clear()
  }
  if(keyCode == '32'){
    te++
  }
}  

function keyTyped(){
  if(key === 's'){
    F = F+1
    jump = 0 
    movX = 1 // MOVIMENTO OBJETO
    p = 0// PONTOS
    bgmov = 0//MOVIMENTO BACKGROUND  
    x = 70   //JOGA
    y = 520   //   DOR    
    frameC = 0
    V = 0
    i++
    if(i>3){
      i=0
    }
  }
  if(key === 'n'){
    te = 3
  }
  if(key === 't'){
    te = 0
  }
}

function Menu (){
    stroke(0)
    image( menu,0 ,0 ,800 ,600 )
    fill(255)
    rect( xM , yM , 220 , 60 )//OBJETO #1)
    //rect( 10 , 55 , 590 , 60 )
    fill(0)
    textSize(48)
    textSize(40)
    text("Jogar",350,250)
    text("Instruções",310,350)
    text("Créditos",325,450)
    textSize(25)
    //strokeWeight(3)
    //stroke(255)
    //noStroke()
    fill('red')
    text("ESC para voltar / ENTER para escolher",20, 30)
    text("OBS: use as setas do teclado"+"\n"+" para trocar de opção!" ,250 ,550)
    
}  //AJUSTAR IMAGENS

function instru(){
  background(255)
  image(intr, 0,0  , 800 , 600)
  stroke(255)
  fill(0)
  textSize(30)
  text("ESC para voltar",20, 30)
  text("9º ANO DO FUNDAMENTAL "+"\n"+"MATÉRIA: História"+"\n"+"Habilidade BNCC:(EF09HI04)",20 , 90)
  text("-Seu objetivo é pegar os Acarajés no cénario, "+"\n"+"use as SETAS para controlar o personagem"+"\n"+"Serão três fases, colete pelo menos"+"\n"+"10 pontos para passar"+"\n"+"QUALQUER ERRO RECARREGUE A PÁGINA!", 20 , 230)

}//ADAPTAR AO MODELO ATUAL

function creditos(){  
  background('black')
  textSize(20)
  noStroke()
  fill('red')
  text("ESC para voltar",20, 30)
  text("Paulo Eduardo"+" - "+"Programador",450, 430)
  image(imgEU, 500 , 200);
  text("Claudia Moreira - Educadora Idealizadora",20, 180)
  image(imgCla, 100 , 200);
}

function game(){ //ADICIONAR HIGHSCORE
  frameC++//Tempo
  count++//Animação - Corrida
  time = parseInt((frameC/60))//SEGUNDOS
  //background(255);
  image(bg[i] , bgmov , 0 , 1000 , 600)//BACKGROUND
  if(bgmov>-200){
    bgmov = bgmov -0.2//Movivemto do Cénario
  }
  else{
    bgmov = -200
  }
  noFill()
  noStroke()
  image(jog[walk%5] , x-50 , y-75 , 100 ,100 )//IMG.JOGADOR
  ellipse( x , y , 2*r1 ,2*r1 )//JOGADOR
  if( count>30) {
    walk++
    count = 0
  }
  fill(255)
  ellipse( x2 , y2 , 2*r2 , 2*r2)//OBSTACULO
  image(alv , x2-28 , y2-28, 55 , 55 )//IMG. OBSTACULO
  
  
  x2 = x2 - movX
  if(x2 < 0){
  movX=-1
  }
  if(x2 > 600){
  movX=1
  }
  fill('red')
  textSize(30)
  //text("Y: " + y2 + " X:" + x2+" "+jump , 100 , 200)
  text("Tempo: " + time + " Pontos:" + p+"/10" , 20 , 50)//TEMPO_&_PONTOS.txt
  //Movimento do JOGADOR
  if( keyIsDown ( LEFT_ARROW ) ) {
    x -= 2
  } //Movimento JOGADOR
  if( keyIsDown ( RIGHT_ARROW) ) {
    x += 2
  }
  if( keyIsDown(32)){ 
    //32==ESPAÇO
  }
  fill('green')
  rect(-10 , 550 , 2000 ,40)
  y = y+jump//SOBE E DESCE: Formula
  //LIMITES DO PULO 
  if(y<400){
    jump = +2
  }
  if(y>520){
    jump = 0
  }
  if(x>width){
    x = 800
  }
  if(x<0){
    x = 0
  }
  //COLISÃO & PONTUAÇÃO
  if (dist(x , y , x2, y2)<=r1+r2){
    p++
    x2 = random(1 , 900)
    y2 = random(365 , 560)
  }
  //VICT OU DERR
  if(p>=10&& time>30){// ATENÇÃO PONTOS ALTERADOS PARA TESTES MAIS RAPIDOS
    V = 1
  }
  if(p<10 && time>=90){
    V = 2
  }
}

function win(){

  background(255)
  if(i==0){
    image(winner[0] ,0 ,0 , 300 , 250)
    textSize(35)
    text("-Tereza de Benguela.", 310 , 40)
    textSize(20)
    text("-Ela liderou o Quilombo de Quariterê após a morte de"+"\n"+"seu companheiro (José Piolho). Sua liderança se"+"\n"+"destacou com a criação de uma espécie de"+"\n"+"Parlamento e de um sistema de defesa.", 310 , 90)
  }
  if(i==1){//TURBANTE
    image(winner[1] ,-50 ,-50 , 400 , 400)
    textSize(35)
    text("-Turbante.", 310 , 40)
    textSize(20)
    text("– Historicamente usados pelas mulheres negras,"+"\n"+"o ornamento ressurgiu como símbolo da cultura negra"+"\n"+"nos movimentos que lutavam pelos direitos civis."+"\n"+"O turbante é símbolo de força e poder.", 310 , 90)
  }
  if(i==2){
    image(winner[2] ,0 ,0 , 380 , 400)
    textSize(35)
    text("- Aleijadinho.", 390 , 40)
    textSize(20)
    text("-Antônio Francisco Lisboa, mais conhecido"+"\n"+"como Aleijadinho, foi um importante escultor,"+"\n"+"entalhador e arquiteto do Brasil colonial.", 390 , 90)
  }
  
  if(F<3){
    textSize(35)
    text("VOCÊ PASSOU!" , 350 , 300)
    text("Deseja iniciar a próxima fase?"+"\n"+" SIM [S] / NÃO [N] ", 150 , 350)
    text("(Fase "+F+" de 3)",275,500)
  }
  if(F>=3){
    CTDW++// FPS
    CT = parseInt(CTDW/60)
    textSize(30)
    text("Você completou o jogo! :)", 420 ,250)
    if(CT>=1){
      te = 3
      textSize(40)
      text("Aperte 'S' para ver os Créditos", 100 ,505)
    }
  }

}

function lose(){
  text("Tente novamente! [T]" , 200 , 300)
}

function intro(){
  image(mach ,0 , 0 , 800 , 600 )
  cc++
  segu2 = cc/60
  if(segu2>2 && segu2<5){
    fill('black')
    text("BARRA DE ESPAÇO P/ PASSAR!",100,560)
  }
  if(segu2>5){
    segu2 = 0
    cc = 0
  }
  strokeWeight(5)
  stroke(0)
  fill('yellow')
  textSize(40)
  text("Este jogo tem como proposta: caminhar por"+"\n"+" elementos e personagens da cultura"+"\n"+" afro-brasileira mostrando aos alunos uma"+"\n"+" diversidade de contribuições da cultura"+"\n"+" negra à formação da cultura brasileira. "+"\n"+"Por Exemplo:",10 ,50 )
  text("Machado de Assis um escritor brasileiro,"+"\n"+"considerado por muitos críticos, estudiosos,"+"\n"+"escritores e leitores um dos maiores senão"+"\n"+"o maior nome da literatura do Brasil." , 20 , 360)

}

function introtwo(){
  image(alv ,0 ,10 )
  image(capo , 0 , 300 , 220 , 220)
  textSize(30) 
  textSize(20)
  text("O acarajé é uma especialidade gastronômica das culinárias"+"\n"+"africana e afro-brasileira. Trata-se de um bolinho feito de massa"+"\n"+"de feijão-fradinho, cebola e sal, e frito em azeite de dendê."+"\n"+"No continente africano e nos templos de matriz africana"+"\n"+"no Brasil é conhecido como akará. Bastante conhecido no Brasil,"+"\n"+"e no mundo." , 220 , 20)
  
  text("- A capoeira ou capoeiragem é uma expressão cultural brasileira"+"\n"+"que mistura arte marcial, esporte, cultura popular,"+"\n"+"dança e música. Capoeira é um esporte praticado nas escolas "+"\n"+"públicas e privadas no Brasil." , 220,320)
  textSize(40)
  text("CAPOEIRA",10, 550 )
  
}
