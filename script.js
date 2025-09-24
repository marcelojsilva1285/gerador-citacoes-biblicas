document.addEventListener('DOMContentLoaded', () => {
  const btnGerar = document.getElementById('btn-gerar'); 
  const textoBiblico = document.getElementById('text');
  const referencia = document.getElementById('referencia');
  let numeroAnterior = -1;
  let numeroAtual;
  const versiculos = [
    {
      texto: 'O que vem de Deus, traz paz.',
      referencia: 'João 14:27',
    },
    {
      texto: 'O choro pode durar uma noite, mas a alegria vem pela manhã.',
      referencia: 'Salmos 30:5',
    },
    {
      texto: 'Tudo posso naquele que me fortalece.',
      referencia: 'Filipenses 4:13',
    },
    {
      texto: 'O Senhor é o meu pastor; de nada me faltará.',
      referencia: 'Salmos 23:1',
    },
    {
      texto: 'O mais importante para Deus é o que está no coração',
      referencia: '1 Samuel 16:7',
    },
    {
      texto: 'A nossa capacidade vem de Deus.',
      referencia: '2 Coríntios 3:5',
    },
    {
      texto: 'Até aqui nos ajudou o Senhor!',
      referencia: '1 Samuel 7:12',
    },
    {
      texto: 'Se Deus é por nós, quem será contra nós?',
      referencia: 'Romanos 8:31',
    },
    {
      texto:
        'O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.',
      referencia: '1 Coríntios 13:4',
    },
    {
      texto: 'Não há medo no amor.',
      referencia: '1 João 4:18',
    },
    {
      texto: 'Amem-se uns aos outros como eu os amei.',
      referencia: 'João 15:12',
    },
    {
      texto: 'Revistam-se do amor, que é o elo perfeito.',
      referencia: 'Colossenses 3:14',
    },
    {
      texto: 'A boca fala do que está cheio o coração.',
      referencia: 'Mateus 12:34',
    },
    {
      texto: 'Ele enxugará dos seus olhos toda lágrima.',
      referencia: 'Apocalipse 21:4',
    },
    {
      texto: 'Se Cristo vos libertar, verdadeiramente sereis livres.',
      referencia: 'João 8:36',
    },
    {
      texto: 'Bendito é o que vem em nome do Senhor!',
      referencia: 'Mateus 21:9',
    },
    {
      texto:
        'Os verdadeiros adoradores adorarão o Pai em espírito e em verdade.',
      referencia: 'João 4:23',
    },
    {
      texto: 'O amigo ama em todos os momentos; é um irmão na adversidade.',
      referencia: 'Provérbios 17:17',
    },
    {
      texto: 'Ele é fiel em tudo o que faz.',
      referencia: 'Salmos 33:4',
    },
    {
      texto: 'Combati o bom combate, terminei a corrida, guardei a fé.',
      referencia: '2 Timóteo 4:7',
    },
    {
      texto:
        'O castigo que nos trouxe paz estava sobre ele, e pelas suas feridas fomos curados.',
      referencia: 'Isaías 53:5',
    },
    {
      texto: 'Espere no Senhor. Seja forte! Coragem! Espere no Senhor.',
      referencia: 'Salmos 27:14',
    },
    {
      texto: 'O que é nascido de Deus vence o mundo.',
      referencia: '1 João 5:4',
    },
    {
      texto:
        'Deus é o nosso refúgio e a nossa fortaleza, auxílio sempre presente na adversidade.',
      referencia: 'Salmos 46:1',
    },
    {
      texto:
        'Venham a mim, todos os que estão cansados, eu darei descanso a vocês.',
      referencia: 'Mateus 11:28',
    },
    {
      texto: 'Confie no Senhor de todo o seu coração',
      referencia: 'Provérbios 3:5',
    },
    {
      texto: 'O meu socorro vem do Senhor, que fez os céus e a terra.',
      referencia: 'Salmos 121:2',
    },
    {
      texto: 'Protege-me, ó Deus, pois em ti me refugio.',
      referencia: 'Salmos 16:1',
    },
    {
      texto:
        'Ainda que eu tenha o dom de profecia, se não tiver amor, nada serei.',
      referencia: '1 Coríntios 13:2',
    },
    {
      texto: 'Como é bom um conselho na hora certa!',
      referencia: 'Provérbios 15:23',
    },
    {
      texto: 'Não tema, eu o ajudarei.',
      referencia: 'Isaías 41:13',
    },
    {
      texto: 'Alegrem-se sempre no Senhor. Novamente direi: Alegrem-se!',
      referencia: 'Filipenses 4:4',
    },
    {
      texto: 'Lancem sobre ele toda a sua ansiedade, ele tem cuidado de vocês',
      referencia: '1 Pedro 5:7',
    },
    {
      texto: 'Aproveitem ao máximo todas as oportunidades.',
      referencia: 'Colossenses 4:5',
    },
    {
      texto: 'A tua ajuda me fez forte.',
      referencia: '2 Samuel 22:36',
    },
    {
      texto: 'O que Deus uniu, ninguém separe.',
      referencia: 'Mateus 19:6',
    },
    {
      texto:
        'Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento.',
      referencia: 'Provérbios 3:5',
    },
    {
      texto: 'Bendito é o Rei de Israel!',
      referencia: 'João 12:13',
    },
    {
      texto: 'Feliz será aquele que espera!',
      referencia: 'Daniel 12:12',
    },
    {
      texto:
        'O amor não se alegra com a injustiça, mas se alegra com a verdade.',
      referencia: '1 Coríntios 13:6',
    },
    {
      texto:
        'Não fosse a ajuda do Senhor, eu já estaria habitando no silêncio.',
      referencia: 'Salmos 94:17',
    },
    {
      texto:
        'Permanecem agora estes 3: a fé, a esperança e o amor. O maior deles, porém, é o amor.',
      referencia: '1 Coríntios 13:13',
    },
    {
      texto: 'Quem é generoso será abençoado.',
      referencia: 'Provérbios 22:9',
    },
    {
      texto: 'Quem semeia a injustiça colhe a maldade.',
      referencia: 'Provérbios 22:8',
    },
    {
      texto: 'Quem encontra uma esposa encontra algo excelente.',
      referencia: 'Provérbios 18:22',
    },
    {
      texto:
        'O amor nunca perece; mas as profecias desaparecerão, as línguas cessarão.',
      referencia: '1 Coríntios 13:8',
    },
    {
      texto: 'As minhas ovelhas ouvem a minha voz.',
      referencia: 'João 10:27',
    },
    {
      texto: 'Todas as coisas foram criadas por Ele e para Ele.',
      referencia: 'Colossenses 1:16',
    },
    {
      texto: 'Quem ama sua mulher, ama a si mesmo.',
      referencia: 'Efésios 5:28',
    },
    {
      texto: 'Eu sou o Alfa e o Ômega, o Princípio e o Fim.',
      referencia: 'Apocalipse 21:6',
    },
    {
      texto: 'Quando vocês ficarem irados, não pequem.',
      referencia: 'Efésios 4:26',
    },
    {
      texto: 'Não deem lugar ao Diabo.',
      referencia: 'Efésios 4:27',
    },
    {
      texto: 'Eles já não são dois, mas sim uma só carne.',
      referencia: 'Mateus 19:6',
    },
    {
      texto: 'Por isso posso me deitar tranquilo e dormir em paz.',
      referencia: 'Salmos 3:5',
    },
    {
      texto:
        'Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.',
      referencia: 'Isaías 41:10',
    },
    {
      texto: 'Todos somos membros de um mesmo corpo.',
      referencia: 'Efésios 4:25',
    },
    {
      texto:
        'Eu sei que o meu Redentor vive e que no fim se levantará sobre a terra.',
      referencia: 'Jó 19:25',
    },
    {
      texto:
        'Mas em todas estas coisas somos mais que vencedores, por meio daquele que nos amou.',
      referencia: 'Romanos 8:37',
    },
    {
      texto: 'O ódio provoca dissensão, mas o amor cobre todos os pecados.',
      referencia: 'Provérbios 10:12',
    },
    {
      texto:
        'Nenhuma palavra torpe saia da boca de vocês, mas apenas a que for útil para edificar os outros.',
      referencia: 'Efésios 4:29',
    },
    {
      texto: 'Tenham cuidado para que ninguém retribua o mal com o mal.',
      referencia: '1 Tessalonicenses 5:15',
    },
    {
      texto: 'Porque vivemos por fé, e não pelo que vemos.',
      referencia: '2 Coríntios 5:7',
    },
    {
      texto:
        'Aqueles que semeiam com lágrimas, com cantos de alegria colherão.',
      referencia: 'Salmos 126:5',
    },
    {
      texto: 'Mas bendito é o homem cuja confiança está no Senhor.',
      referencia: 'Jeremias 17:7',
    },
    {
      texto: 'Entregue o seu caminho ao Senhor.',
      referencia: 'Salmos 37:5',
    },
    {
      texto: 'A nosso Deus e Pai seja a glória para todo o sempre. Amém.',
      referencia: 'Filipenses 4:20',
    },
    {
      texto: 'O Senhor é a minha rocha, a minha fortaleza e o meu libertador.',
      referencia: 'Salmos 18:2',
    },
    {
      texto:
        'Nada façam por ambição egoísta ou por vaidade, mas humildemente considerem os outros superiores a vocês mesmos.',
      referencia: 'Filipenses 2:3',
    },
    {
      texto:
        'Enoque andou com Deus; e já não foi encontrado, pois Deus o havia arrebatado.',
      referencia: 'Gênesis 5:24',
    },
    {
      texto:
        'Mesmo quando eu andar por um vale de trevas e morte, não temerei perigo algum, pois tu estás comigo.',
      referencia: 'Salmos 23:4',
    },
    {
      texto:
        'A cidade não precisa de sol nem de lua para brilharem sobre ela, pois a glória de Deus a ilumina.',
      referencia: 'Apocalipse 21:23',
    },
    {
      texto: 'Só ele cura os de coração quebrantado e cuida das suas feridas.',
      referencia: 'Salmos 147:3',
    },
    {
      texto: 'Irmãos, fostes chamados à liberdade!',
      referencia: 'Gálatas 5:13',
    },
    {
      texto:
        'Pois o Reino de Deus não é comida nem bebida, mas justiça, paz e alegria no Espírito Santo.',
      referencia: 'Romanos 14:17',
    },
    {
      texto:
        'É grande o meu prazer no Senhor! Regozija-se a minha alma em meu Deus!',
      referencia: 'Isaías 61:10',
    },
    {
      texto: 'Eu a amei com amor eterno; com amor leal a atraí.',
      referencia: 'Jeremias 31:3',
    },
    {
      texto:
        'Mostra-me o caminho que devo seguir, pois a ti elevo a minha alma.',
      referencia: 'Salmos 143:8',
    },
    {
      texto:
        'De manhã ouves, Senhor, o meu clamor; de manhã te apresento a minha oração e aguardo com esperança.',
      referencia: 'Salmos 5:3',
    },
    {
      texto:
        'O Senhor, sim, o Senhor é a minha força e o meu cântico; ele é a minha salvação!',
      referencia: 'Isaías 12:2',
    },
    {
      texto:
        'O Senhor vive! Bendita seja a minha Rocha! Exaltado seja Deus, o meu Salvador!',
      referencia: 'Salmos 18:46',
    },
    {
      texto:
        'Em seu coração o homem planeja o seu caminho, mas o Senhor determina os seus passos.',
      referencia: 'Provérbios 16:9',
    },
    {
      texto: 'Então cada um foi para a sua casa.',
      referencia: 'João 7:53',
    },
    {
      texto: 'Senhor, para quem iremos? Tu tens as palavras de vida eterna.',
      referencia: 'João 6:68',
    },
    {
      texto: 'Não se deixem enganar: de Deus não se zomba.',
      referencia: 'Gálatas 6:7',
    },
    {
      texto: 'E esta é a promessa que ele nos fez: a vida eterna.',
      referencia: '1 João 2:25',
    },
    {
      texto: 'Aqueles que me perseguem tropeçarão e não prevalecerão.',
      referencia: 'Jeremias 20:11',
    },
    {
      texto: 'Quem crê no Filho tem a vida eterna.',
      referencia: 'João 3:36',
    },
    {
      texto: 'O Senhor é a minha luz e a minha salvação; de quem terei temor?',
      referencia: 'Salmos 27:1',
    },
    {
      texto:
        'Ainda que eu fale as línguas dos anjos, se não tiver amor, serei como o sino que ressoa.',
      referencia: '1 Coríntios 13:1',
    },
    {
      texto:
        'Ele é o Deus que me reveste de força e torna perfeito o meu caminho.',
      referencia: 'Salmos 18:32',
    },
    {
      texto: 'O Senhor está com você, poderoso guerreiro.',
      referencia: 'Juízes 6:12',
    },
    {
      texto:
        'Se alguém está em Cristo, nova criatura é; as coisas velhas já passaram; eis que tudo se fez novo.',
      referencia: '2 Coríntios 5:17',
    },
    {
      texto:
        'Assim como a água reflete o rosto, o coração reflete quem somos nós.',
      referencia: 'Provérbios 27:19',
    },
    {
      texto:
        'O que é nascido de Deus vence o mundo; e esta é a vitória que vence o mundo: a nossa fé.',
      referencia: '1 João 5:4',
    },
    {
      texto:
        'Prepara-se o cavalo para o dia da batalha, mas o Senhor é que dá a vitória.',
      referencia: 'Provérbios 21:31',
    },
    {
      texto:
        'Conservem-se livres do amor ao dinheiro e contentem-se com o que vocês têm.',
      referencia: 'Hebreus 13:5',
    },
    {
      texto:
        'É melhor ter pouco com o temor do Senhor do que grande riqueza com inquietação.',
      referencia: 'Provérbios 15:16',
    },
    {
      texto:
        '1000 poderão cair ao seu lado; 10 mil, à sua direita, mas tu não serás atingido.',
      referencia: 'Salmos 91:7',
    },
    {
      texto:
        'Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus.',
      referencia: '1 Tessalonicenses 5:18',
    },
    {
      texto: 'Tudo o que fizerem, façam-no em nome do Senhor Jesus.',
      referencia: 'Colossenses 3:17',
    },
    {
      texto:
        'Deem graças ao Senhor, porque ele é bom. O seu amor dura para sempre!',
      referencia: 'Salmos 136:1',
    },
    {
      texto: 'Tu és o meu Deus; graças te darei!',
      referencia: 'Salmos 118:28',
    },
    {
      texto:
        'Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.',
      referencia: 'Hebreus 11:1',
    },
    {
      texto:
        'Mas tu, Senhor, és o escudo que me protege; és a minha glória e me fazes andar de cabeça erguida.',
      referencia: 'Salmos 3:3',
    },
    {
      texto: 'Pois vocês sabem que a prova da sua fé produz perseverança.',
      referencia: 'Tiago 1:3',
    },
    {
      texto:
        'Ensina-nos a contar os nossos dias para que o nosso coração alcance sabedoria.',
      referencia: 'Salmos 90:12',
    },
  ];

  btnGerar.addEventListener('click', () => {
    
    do {
      numeroAtual = Math.floor(Math.random() * versiculos.length);
      
    } while (numeroAtual === numeroAnterior);
        
    textoBiblico.textContent = versiculos[numeroAtual].texto;
    referencia.textContent = versiculos[numeroAtual].referencia;
    
    // Atualiza o número anterior para a próxima iteração.
    numeroAnterior = numeroAtual;
  });
});
