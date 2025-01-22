const date = new Date();
var data = date.getDate(); //numeroData
var dia = date.getDay(); //numeroDiaSemana
var mes = date.getMonth() + 1; //mês

var chancesDeVoltar;

const dias = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

var diaSemana = dias[dia];
//alert(diaSemana)


function atualizarDisplay() {
  var diaDisplay = document.getElementById("diaDisplay");
  var dataDisplay = document.getElementById("dataDisplay");
  var mesDisplay = document.getElementById("mesDisplay");

  diaDisplay.textContent = dias[dia];
  dataDisplay.textContent = data + "/ ";
  mesDisplay.textContent = mes
}
atualizarDisplay()

function voltar() {
  if (chancesDeVoltar >= 1) {
    date.setDate(date.getDate() - 1); // Subtrai 1 dia;
    data = date.getDate();
    dia = date.getDay();
    mes = date.getMonth() + 1;
    atualizarDisplay();
    VerificarDevocaoHoje();
    verificarBotoes();
  }
}

function avancar() {
  if (chancesDeVoltar < 6) {
    date.setDate(date.getDate() + 1); // Subtrai 1 dia;
    data = date.getDate();
    dia = date.getDay();
    mes = date.getMonth() + 1;
    atualizarDisplay();
    VerificarDevocaoHoje();
    verificarBotoes();
  }
}

function VerificarDevocaoHoje() {
  switch (dias[dia]) {

    case ("Segunda"):
      chancesDeVoltar = 0;
      var devocao = {
        titulo: "CULTO ON-LINE",
        verso: "Não deixemos de nos congregar, como é costume de alguns. Pelo contrário, façamos admoestações, ainda mais agora que vocês veem que o Dia se aproxima. Hebreus 10:25",
        imagem: "img",
        texto: `A internet tem oferecido uma grande oportunidade de comunicação. Quem poderia imaginar que um sermão feito a partir da minha casa seria assistido simultaneamente por mais de 100 mil pessoas, como ocorreu algumas vezes durante a pandemia? E mais, sem a necessidade da parafernália de transmissão usada pelas emissoras de TV.<p>

Contudo, essa oportunidade trouxe um dilema. Muitos gostaram da sensação de ficar em casa e, ainda assim, mantendo a consciência tranquila, pois assistiam ao sermão transmitido pela igreja. E com algumas vantagens: no conforto do sofá, sem tirar o pijama! Se o sermão fosse ruim, bastava clicar em outro canal. Nada de cobrança nem formalismos. Que armadilha para o povo de Deus!<p>

Não é de hoje que as pessoas buscam razões para não ir à igreja. Há algum tempo, alguém escreveu para uma revista religiosa: “Tenho frequentado a igreja por 30 anos e, durante esse período, ouvi uns 3 mil sermões. Contudo, ao longo de toda a minha vida, não consigo me lembrar de nenhum sequer. Assim, penso que estou perdendo meu tempo, e os pregadores estão desperdiçando o deles com discursos que ninguém quer ouvir.”<p>

Esse desabafo iniciou uma controvérsia na coluna “Cartas ao Editor”, que republicou várias cartas sobre o assunto. Uma delas dizia: “Sou um idoso de 90 anos. Tenho 70 anos de convivência com minha mulher. Durante esse tempo, ela deve ter cozinhado umas 70 mil refeições, e não me lembro do cardápio de nenhuma delas. Mas de uma coisa eu sei: todas me nutriram e me deram força para fazer o meu trabalho. Se não fossem essas refeições, hoje estaria morto. Do mesmo modo, se eu não tivesse ido à igreja para saciar minha fome espiritual, estaria morto espiritualmente.”<p>

Há casos excepcionais que demandam um culto virtual. Também há dias em que você é forçado a trocar o almoço por um fast food. Mas experimente fazer isso a vida toda! As consequências da desnutrição logo aparecerão. Propagandas de suco podem aguçar seu paladar, mas não refrescam sua sede. Há coisas que só funcionam no mundo físico, e o convívio com as pessoas é uma delas. `,
      }
      atualizarTexto(devocao);
      break;

    case ("Terça"):
      chancesDeVoltar = 1;
      var devocao = {
        titulo: "CULTO ALTERNATIVO",
        verso: "E o povo sentou-se para comer e beber e levantou-se para se divertir. Êxodo 32:6",
        imagem: "img",
        texto: `O versículo de hoje poderia muito bem descrever um inocente encontro social, mas seu contexto revela o triste momento quando Israel, mesmo após testemunhar tantos milagres, troca o Senhor por um bezerro.<p>

O verbo hebraico que as Bíblias traduzem por “divertir” traz uma ideia de diversão sexual. É o mesmo que aparece em Gênesis 26:8 para descrever as carícias que Isaque fazia em Rebeca. Considerando a bebedeira que tomou conta do arraial e o fato de Moisés tê-los encontrado “descontrolados” (algumas versões traduzem como “despidos” [Êx 32:25]), imagino que a orgia tenha tomado conta daquele lugar. Afinal, o Egito tinha cultos que envolviam nudez, o que pode ter influenciado o povo.<p> 

O bezerro que os hebreus cultuaram provavelmente foi Apis, o deus da fertilidade, cujo culto envolvia atos libidinosos. Um exemplo era a prática da anasyrma, em que o adorador levantava a roupa e mostrava os órgãos genitais para a divindade a fim de receber um favor dela. O historiador Diodoro Sículo, que viveu no 1o século a.C., testemunhou esse comportamento em devotas de Apis que queriam engravidar.<p> 

Isso nos dá uma ideia do que acontecia nesses rituais pagãos, revelando que as pessoas muitas vezes não se mostram moralmente melhores que os deuses que adoram. No entanto, o que surpreende ainda mais é que os hebreus acreditavam estar adorando ao Senhor, ainda que de uma forma alternativa. Talvez pensassem que Apis fosse uma manifestação cósmica do mesmo Deus em quem criam.<p> 

Esse cenário é confirmado por indícios bíblicos e arqueológicos que sugerem associações entre o bezerro e o Deus dos hebreus, algo que os profetas desaprovavam. Um exemplo está registrado em 1 Reis 12, quando Jeroboão ergueu dois bezerros de ouro em Dã e Betel, referindo-se a eles como os “deuses” que os haviam tirado da terra do Egito.<p> 

Percebe o perigo? Nem sempre Satanás tenta o povo a romper com o sagrado. Ao contrário, ele os incentiva à adoração, porém de maneira imprópria, iludindo-os a cultuar demônios e fazendo-os crer que estão adorando a Cristo. Foi assim no passado e continua no presente. Portanto, fique atento, pois há muitas versões modernas do “bezerro” prontas para seduzir o povo de Deus.`,
      }
      atualizarTexto(devocao);
      break;

    case ("Quarta"):
      chancesDeVoltar = 2;
      var devocao = {
        titulo: "ÉTICA OU ESTÉTICA?",
        verso: "Ai deles! Porque seguiram o mesmo caminho de Caim. Judas 11",
        imagem: "img",
        texto: `Existem cinco ramos da filosofia tradicionalmente aceitos: metafísica, epistemologia, política, ética e estética. Cada ramo responde a perguntas específicas que têm um impacto profundo em nossa vida, e suas respostas podem fornecer diferentes soluções para um mesmo dilema.<p>

Gostaria de me concentrar especificamente na ética e na estética, consideradas primas-irmãs e, por vezes, até confundidas. A estética se preocupa com o belo como forma de eliminar traços de feiura, enquanto a ética, embora não se oponha a isso, coloca essas questões em segundo plano. Sua prioridade é distinguir o certo do errado na tomada de decisões.<p>

Vamos analisar um exemplo: Pedro ama o sorriso de sua filhinha Sara. Nada lhe agrada mais do que vê-la sorrindo. Da mesma forma, vê-la chorando lhe causa repulsa. Isso é estética, e não há nada de errado com o sentimento dele. No entanto, um dia Sara faz birra para não obedecer à mãe e começa a chorar querendo doce. A desobediência e como lidar com ela são questões éticas.<p> 

Imagine, porém, que Pedro, priorizando a estética sobre a ética, dê o doce escondido para a menina apenas para que ela pare de chorar e volte a sorrir. Ele estaria certo? Claro que não. Ele estaria colocando o belo acima do que é correto.<p> 

Esse foi o erro de Caim quando trouxe sua oferta perante o Senhor. Por motivos egoístas e estéticos, ele preferiu um belo altar com frutos do campo ao altar ensanguentado que certamente seria mais feio. E era mesmo. Tive a oportunidade de presenciar na Jordânia o sacrifício de cordeiros em um ritual muçulmano e posso garantir que não havia nada de belo naquilo.<p> 

Meu lado estético entende a escolha de Caim, mas meu lado ético não pode justificá-la. Ele fez o que era bonito, mas não o que era correto. Talvez esse seja o grande dilema litúrgico atualmente: fazer um culto tão “descolado” que leve o adorador a se esquecer do verdadeiro motivo da adoração. Igreja não tem palco, tem púlpito; não tem plateia, tem congregação; não tem artistas, tem ministros. Não há nada de errado com o belo nem com a adequação litúrgica, desde que isso não anule o que é correto perante Deus. Adoração é coisa séria. Não caiamos no erro de Caim. `,
      }
      atualizarTexto(devocao);
      break;

    case ("Quinta"):
      chancesDeVoltar = 3;
      var devocao = {
        titulo: "REAL VERSUS IDEAL",
        verso: "Traga para junto de você, do meio dos filhos de Israel, o seu irmão Arão e os filhos dele, para que Me sirvam como sacerdotes. Êxodo 28:1",
        imagem: "img",
        texto: `Sem o ritual do santuário, o plano da redenção seria completamente desconhecido. Por isso, era plano de Deus, desde o início, estabelecer um lugar consagrado no meio de Israel para ensinar de forma didática a vinda do futuro Messias.<p>

Contudo, algumas passagens de Êxodo me fazem crer que a escolha sacerdotal de uma única tribo, a de Levi, não era o ideal desejado por Deus. Isso parece estranho, uma vez que foi Deus quem designou Arão e seus filhos para o sacerdócio. Acontece que, por causa da condição do povo, Deus às vezes sanciona coisas que não são necessariamente o que Ele havia intencionado.<p> 

Veja a monarquia de Israel. Embora apontasse Saul como rei e fizesse promessas aos descendentes de Davi, Deus não queria que os hebreus tivessem um monarca. O Senhor reinaria sobre eles (Êx 19:3-6; Lv 20:26). No entanto, prevendo que o povo pediria um rei no futuro, Deus atendeu ao pedido deles, mas sem alterar o princípio de que esse rei deveria representar Deus para Seu povo.<p> 

Da mesma forma, o sacerdócio. Embora não contasse com as mesmas precauções quanto à monarquia, Deus não queria que apenas alguns oficiassem no santuário. O ideal divino era que todas as tribos, e não somente uma delas, fossem “um reino de sacerdotes e uma nação santa” (Êx 19:6).<p> 

O relato de Êxodo 19 a 24 mostra que, a princípio, após um período de santificação, todo o povo de Israel deveria se aproximar gradualmente do Sinai para depois subir ao monte. Porém, apenas Moisés, Arão, Nadabe, Abiú e 70 anciãos puderam ver a glória do Senhor. O povo, amedrontado, afastou-se para mais longe e pediu a Moisés que fosse o porta-voz, de modo que Deus não falasse mais diretamente com eles.<p> 

Observe como o medo e a falta de santidade podem nos impedir de receber bênçãos maiores. A situação do Sinai me faz pensar em uma empresa que queria dar um carro para cada funcionário, mas o medo e a falta de habilitação fazem com que alguns recebam apenas um vale-transporte. Coragem e santidade! Não é isso que nos falta para Deus nos conceder bênçãos ainda maiores?`,
      }
      atualizarTexto(devocao);
      break;

    case ("Sexta"):
      chancesDeVoltar = 4;
      var devocao = {
        titulo: "INTIMIDADE COM DEUS",
        verso: "E nos constituiu reino, sacerdotes para o Seu Deus e Pai, a Ele a glória e o domínio para todo o sempre. Amém! Apocalipse 1:6",
        imagem: "img",
        texto: `O texto de hoje bem poderia ser uma continuação do tema de ontem. Nesse versículo, João reafirma o ideal que Deus tinha antes que houvesse tabernáculo e monarquia em Israel: fazer de cada crente um coparticipante no reino de Deus e no sacerdócio de Cristo.<p>

É por isso que, mesmo sem méritos próprios, podemos interceder junto a Deus por nossos irmãos e almejar um trono com Cristo. Como lemos em 2 Timóteo 2:12: “Se perseveramos, também com Ele reinaremos.” Contudo, enquanto estivermos do lado de cá da eternidade, existirão diferentes graus de intimidade com Deus que resultarão em maior ou menor participação das bênçãos que o Senhor já disponibilizou neste mundo.<p> 

No santuário havia três espaços que ilustram o processo: o pátio, o lugar santo e o lugar santíssimo, cada um simbolizando um grau no relacionamento com Deus. No pátio, todos os levitas podiam entrar, mas apenas os sacerdotes tinham acesso diário ao lugar santo, e o sumo sacerdote era o único que comparecia anualmente ao lugar santíssimo.<p> 

Existem crentes que se contentam com o pátio. Eles oram, confessam seus pecados e participam dos cultos, mas sua experiência não passa disso. Outros avançam para o lugar santo, mostrando mais interesse pela vida religiosa e, portanto, tendo acesso a aspectos que os demais não conseguem visualizar.<p> 

Finalmente, há aqueles que entram no lugar santíssimo, diante da presença de Deus. Eles não conhecem apenas a prática (pátio) ou a teologia (lugar santo), mas se relacionam pessoalmente com o ser de Deus (santíssimo). Estão na categoria de Elias, Daniel, João Batista, entre outros personagens ilustres da Bíblia.<p> 

Impossível chegar a esse nível? Creio que não, pelo menos é o que leio em Hebreus 10:19 a 22: “Portanto, meus irmãos, tendo ousadia para entrar no Santuário, pelo sangue de Jesus, pelo novo e vivo caminho que Ele nos abriu por meio do véu, […] aproximemo-nos com um coração sincero, em plena certeza de fé.” E então? Comece hoje mesmo sua ascensão, pela fé, ao trono de Deus. Jesus franqueou o caminho para você. `,
      }
      atualizarTexto(devocao);
      break;

    case ("Sábado"):
      chancesDeVoltar = 5;
      var devocao = {
        titulo: "DESCRENÇAS",
        verso: "Diz o insensato no seu coração: “Não há Deus.” Salmo 53:1",
        imagem: "img",
        texto: `O ateísmo é um fenômeno difícil de mensurar historicamente. Dizer quando e porque ele começou não é tarefa fácil. Pode-se afirmar que há muito tempo já existiam ateus no mundo, embora fossem uma minoria muitas vezes escondida.<p>

Será que hoje existem mais ateus do que no passado? Em termos numéricos, sim, pois a população do mundo cresceu. No entanto, em termos percentuais, é difícil determinar, especialmente porque, no domínio eclesiástico que moldou a Idade Média, muitos talvez fossem ateus, mas não o diziam por medo de represálias.<p> 

Considere ainda que o ateísmo não é a única forma de duvidar de Deus. Temos ainda os desdobramentos do agnosticismo, deísmo, panteísmo e outras formas de negação do Sagrado, conforme ensinado nas Escrituras.<p> 

De modo geral, a palavra ateísmo tem sido usada de maneira bem diversificada. Muitos religiosos a consideram sinônimo de demonismo e depravação, enquanto pessoas seculares a interpretam como uma elevada disposição mental que admite a realidade como ela é.<p> 

Poucos talvez saibam, mas, no passado, os cristãos foram chamados de ateus pelo Império Romano. Naquele contexto, ateu era quem não observava algumas práticas da religião romana, que, por sua vez, era fruto do sincretismo de vários cultos politeístas.<p> 

Assim, o ateísmo cristão era a não participação nos ritos. O cidadão comum não precisava ser devoto dos deuses; bastava, em respeito a eles, realizar certas performances ocasionais, como fazer um voto ao passar por um túmulo imperial, oferecer um sacrifício ou se assentar por um instante orando aos deuses. Os cristãos, é claro, não aceitavam isso e, por essa razão, eram formalmente acusados.<p> 

Existe, porém, outro tipo de ateísmo que ameaça mais os crentes do que qualquer outra forma de ceticismo. Refiro-me ao ateísmo prático. Enquanto o ateu teórico diz que Deus não existe, o ateu prático diz que Ele existe, mas vive como se não existisse. Portanto, não saia de casa hoje sem se perguntar como estão suas obras em relação à sua fé. Elas refletem ou desmentem sua crença em Deus?`,
      }
      atualizarTexto(devocao);
      break;

    case ("Domingo"):
      chancesDeVoltar = 6;
      var devocao = {
        titulo: "ATEÍSMO PRÁTICO",
        verso: "Quando o Filho do Homem vier, será que ainda encontrará fé sobre a terra? Lucas 18:8",
        imagem: "img",
        texto: `O versículo de hoje está relacionado à parábola sobre a viúva pobre e o juiz que não tinha pressa em julgar sua causa (Lc 18:1-8). O tema mais amplo abrange a demorada vinda do reino de Deus (Lc 17:20-37).<P> 

Assim como os judeus perguntavam pela chegada do Messias prometido, os novos discípulos também questionavam quando Jesus traria o fim do mundo, a inauguração do reino e a vindicação dos filhos de Deus.<P>  

Essas mesmas dúvidas são levantadas hoje por crentes e descrentes. “Ele vai realmente voltar? Se sim, quando?” Alguns até perguntam em tom de zombaria (2Pe 3:3-10). Essas palavras difíceis parecem apontar para um tempo em que a demora do cumprimento levaria muitos a perder aquela fé perseverante – semelhante à da viúva diante do juiz que não a atendia.<P>  

A ideia não é comparar Deus ao juiz injusto, mas acentuar a fé da viúva. Se ela continuava pedindo, mesmo diante de um juiz que não respondia, por que desistiríamos diante de um Deus que é fiel e justo?<P>  

Ontem mencionei que o ateu teórico é aquele que diz não crer em Deus. Já o ateu prático diz acreditar em Deus, mas vive como se Ele não existisse. Segundo o IBGE, 86% da população brasileira declara ter uma orientação cristã. Logo, a maioria dos brasileiros, independentemente da religião, diz acreditar em três marcos comuns a todos os cristãos: 1) existe um Deus; 2) devemos amar uns aos outros; e 3) haverá um juízo final.<P>  

No entanto, se isso for verdade, era de esperar que a maioria da população brasileira se pautasse por esses três marcos, o que não é verdade. Não seria esse um indicativo de que somos uma nação de ateus práticos, que pregam uma coisa e vivem outra?<P>  

Kerby Anderson escreveu: “A razão pela qual tão poucas pessoas agem como cristãs é porque elas não pensam como cristãs. Comportamento é resultado de valores e crenças. Pensar biblicamente sobre questões da vida deveria ser o resultado último de um viver biblicamente em sociedade” (link.cpb.com.br/3537d1).<P>  

Que possamos pensar “biblicamente” nas coisas da vida e que nosso comportamento responda positivamente à indagação de Cristo: “Haverá fé sobre a Terra?” Sim, Senhor, porque estamos aqui aguardando Sua vinda. `,
      }
      atualizarTexto(devocao);
      break;

  }
}
VerificarDevocaoHoje();

function atualizarTexto(devocao) {
  document.getElementById("titulo").textContent = devocao.titulo;
  document.getElementById("verso").textContent = devocao.verso;
  document.getElementById("texto").innerHTML = devocao.texto;
  document.getElementById("versoTexto").scrollTop = 0;
}

function verificarBotoes() {
  const botaoVoltar = document.getElementById("botaoVoltar");
  const botaoAvancar = document.getElementById("botaoAvancar");

  if (chancesDeVoltar <= 0) {
    botaoVoltar.style.backgroundColor = "gray";  // Desativa o botão "Voltar"
  } else {
    botaoVoltar.style.backgroundColor = "#4a4857"; // Ativa o botão "Voltar"
  }

  if (chancesDeVoltar >= 6) {
    botaoAvancar.style.backgroundColor = "gray";  // Desativa o botão "Avançar"
  } else {
    botaoAvancar.style.backgroundColor = "#4a4857"; // Ativa o botão "Avançar"
  }
}
verificarBotoes()

/* menu */
var menuBotao = document.getElementById("menuBotao");
var menu = document.getElementById("menu");
menu.style.display = "none";

menuBotao.onclick = () => {
  if (menu.style.display === "none") {
    menu.style.display = "flex"
  }
  else {
    menu.style.display = "none"
  }
}

document.addEventListener("click", (click) => {
  if (!menu.contains(click.target) && (!menuBotao.contains(click.target))) {
    menu.style.display = "none"
  }
})


/* Fonte */

var textoFonte = document.getElementById("texto");
var versoFonte = document.getElementById("verso");

var tamanhoFonteDisplay = document.getElementById("tamanhoFonteDisplay");
var tamanhoFonte = 20;
var tamanhoVersoFonte = 15;
tamanhoFonteDisplay.textContent = tamanhoFonte;
function aumentarFonte() {
  tamanhoFonte += 5;
  tamanhoVersoFonte += 2;
  textoFonte.style.fontSize = `${tamanhoFonte}px`;
  versoFonte.style.fontSize = `${tamanhoVersoFonte}px`;
  tamanhoFonteDisplay.textContent = tamanhoFonte;
}
function diminuirFonte() {
  tamanhoFonte -= 5;
  tamanhoVersoFonte -= 2;
  textoFonte.style.fontSize = `${tamanhoFonte}px`;
  versoFonte.style.fontSize = `${tamanhoVersoFonte}px`;
  tamanhoFonteDisplay.textContent = tamanhoFonte;
}